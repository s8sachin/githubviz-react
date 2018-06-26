import React, { Component } from 'react';
import { XYPlot, XAxis, YAxis, VerticalBarSeries, VerticalGridLines, HorizontalGridLines, Hint } from 'react-vis';
import { connect } from 'react-redux';
import browserHistory from '../../history';

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
class RepoNCommits extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.setState({ mouseOverValue: false })
  }

  singleRepoNCommits = (v) => {
    const repo = v.x;
    browserHistory.push(`/singleRepoNCommits/${repo}`);
  }

  render() {
    var graphData = this.props.repos_and_commits[0] ? this.props.repos_and_commits : lodingGraphData;
    return (
      <div>
        <XYPlot height={300} width={1000} color="orange" stroke="black" xType="ordinal" className={this.props.repos_and_commits[0] ? '' : 'loadingGraphOpacity'}>
          <HorizontalGridLines />
          <XAxis tickLabelAngle={-45} />
          <YAxis />
          <VerticalBarSeries data={graphData}
            onValueClick={v => this.singleRepoNCommits(v)}
            onValueMouseOver={v => this.setState({ mouseOverValue: v })}
            onSeriesMouseOut={v => this.setState({ mouseOverValue: false })} />
          {this.props.repos_and_commits[0] && this.state.mouseOverValue && 
            <Hint value={this.state.mouseOverValue}>
              <div className='hintStyle'>
                <p>{this.state.mouseOverValue.x} :<br/>{this.state.mouseOverValue.y}</p>
              </div>
            </Hint>
          }
        </XYPlot>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { repos_and_commits } = state.zoom1;
  return { repos_and_commits };
}

export default connect(mapStateToProps)(RepoNCommits);
