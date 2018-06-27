import React, { Component } from 'react';
import { XYPlot, XAxis, YAxis, VerticalBarSeries, VerticalGridLines, HorizontalGridLines, Hint } from 'react-vis';
import { connect } from 'react-redux';
import { DropdownButton, MenuItem, Tooltip } from 'react-bootstrap';
import browserHistory from '../../history';
import { repoAndCommitsAction } from '../../actions/AllGraphAction';

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

const repoCounts = [20, 40, 60, 80, 100]
class RepoNCommits extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.setState({ mouseOverValue: false, repoCount: this.props.repoCount })
  }

  singleRepoNCommits = (v) => {
    const repo = v.x;
    browserHistory.push(`/singleRepoNCommits/${repo}`);
  }

  changeNumberOfRepos (count) {
    this.props.repoAndCommitsAction({repoCount: count})
    this.setState({repoCount: count})
  }

  render() {
    var graphData = this.props.repos_and_commits[0] ? this.props.repos_and_commits : lodingGraphData;
    return (
      <div>
        <div className='pull-right zIndex100'>
          <span className='marginRight30'><b>Repositories Selected: {this.state.repoCount}</b></span>
          <DropdownButton title='Repositories Count' id='g1Dropdown' onSelect={v => this.changeNumberOfRepos(v)}>
            {repoCounts.map((count, index) => {
              return <MenuItem key={index} active={this.state.repoCount === count} eventKey={count}>{count}</MenuItem>
            })}
          </DropdownButton>
        </div><br/>
        <XYPlot height={300} width={1000} color="orange" stroke="black" xType="ordinal" className={this.props.repos_and_commits[0] ? 'rv-xy-plot__inner_380' : 'loadingGraphOpacity rv-xy-plot__inner_380'}>
          <HorizontalGridLines />
          <XAxis tickLabelAngle={-45}/>
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

export default connect(mapStateToProps, { repoAndCommitsAction })(RepoNCommits);
