import React, { Component } from 'react';
import { connect } from 'react-redux';
import { XYPlot, XAxis, YAxis, VerticalBarSeries, VerticalGridLines, HorizontalGridLines, Hint } from 'react-vis';
import { singleRepoNCommitsAction } from '../../actions/zoom2Action';

const lodingGraphData = [
  {x: 0, y: 8},
  {x: 1, y: 5},
  {x: 2, y: 4},
  {x: 3, y: 9},
  {x: 1, y: 5},
  {x: 2, y: 4},
  {x: 3, y: 9},
  {x: 4, y: 1},
  {x: 5, y: 7},
  {x: 6, y: 6},
  {x: 7, y: 3},
  {x: 8, y: 2},
  {x: 9, y: 0}
];

class SingleRepoNCommits extends Component {

  componentWillMount() {
    const repo = this.props.match.params.repo;
    this.props.singleRepoNCommitsAction(repo);
    this.setState({ mouseOverValue: false });
  }

  render () {
    var graphData = this.props.single_repo_commits[0] ? this.props.single_repo_commits : lodingGraphData;
    return (
      <XYPlot height={300} width={1000} color="orange" stroke="black" xType="ordinal" className={this.props.single_repo_commits[0] ? '' : 'loadingGraphOpacity'}>
        <HorizontalGridLines />
        <XAxis tickLabelAngle={-45} />
        <YAxis />
        <VerticalBarSeries data={graphData}
          // onValueClick={v => this.singleRepoNCommits(v)}
          onValueMouseOver={v => this.setState({ mouseOverValue: v })}
          onSeriesMouseOut={v => this.setState({ mouseOverValue: false })} />
        {this.props.single_repo_commits[0] && this.state.mouseOverValue &&
          <Hint value={this.state.mouseOverValue}>
            <div className='hintStyle'>
              <p>{this.state.mouseOverValue.x} :<br />{this.state.mouseOverValue.y}</p>
            </div>
          </Hint>
        }
      </XYPlot>
    )
  }
}

const mapStateToProps = (state) => {
  const { single_repo_commits } = state.zoom2;
  return { single_repo_commits };
}

export default connect(mapStateToProps, { singleRepoNCommitsAction })(SingleRepoNCommits);