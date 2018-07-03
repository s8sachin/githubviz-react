import React, { Component } from 'react';
import { XYPlot, XAxis, YAxis, VerticalBarSeries, VerticalGridLines, HorizontalGridLines, Hint, RadialChart, DiscreteColorLegend } from 'react-vis';
import { connect } from 'react-redux';
import { DropdownButton, MenuItem, Tooltip } from 'react-bootstrap';
import browserHistory from '../../history';
import { repoAndCommitsAction } from '../../actions/AllGraphAction';

const lodingBarGraphData = [
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

const lodingPieChartData = [
  {theta: 2, label: '-----------'},
  {theta: 6, label: '-----------'},
  {theta: 2, label: '-----------'},
  {theta: 3, label: '-----------'},
  {theta: 1, label: '-----------'}
];

const repoCounts = [10, 20, 30, 40, 50]
const graphs = ['Vertical Bar Graph', 'Pie Chart']
class RepoNCommits extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.setState({ mouseOverValue: false, repoCount: this.props.repoCount, graph: this.props.graph })
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  singleRepoNCommits = (v) => {
    var repo;
    if (this.state.graph === graphs[0]) {
      repo = v.x;
    } else {
      repo = v.label;
    }
    browserHistory.push(`/singleRepoNCommits/${repo}`);
  }

  changeNumberOfRepos (count) {
    this.props.repoAndCommitsAction({repoCount: count})
    this.setState({repoCount: count})
  }
  
  changeGraph (graph) {
    this.setState({graph});
  }
  
  renderGraph () {
    switch(this.state.graph){
      case graphs[0]:
      var graphData = this.props.repos_and_commits.barGraphData || lodingBarGraphData;
        return (
          <XYPlot height={300} width={1000} color="orange" stroke="black" xType="ordinal" className={this.props.repos_and_commits.barGraphData ? 'rv-xy-plot__inner_380' : 'loadingGraphOpacity rv-xy-plot__inner_380'}>
            <HorizontalGridLines />
            <XAxis tickLabelAngle={-45}/>
            <YAxis />
            <VerticalBarSeries data={graphData}
              onValueClick={v => this.singleRepoNCommits(v)}
              onValueMouseOver={v => this.setState({ mouseOverValue: v })}
              onSeriesMouseOut={v => this.setState({ mouseOverValue: false })} />
            {this.props.repos_and_commits.barGraphData && this.state.mouseOverValue && 
              <Hint value={this.state.mouseOverValue}>
                <div className='hintStyle'>
                  <p>{this.state.mouseOverValue.x} :<br/>{this.state.mouseOverValue.y}</p>
                </div>
              </Hint>
            }
          </XYPlot>
        );
      case graphs[1]:
      var graphData = this.props.repos_and_commits.pieChartData || lodingPieChartData;
        return (
          <div>
            <RadialChart
              className={this.props.repos_and_commits.pieChartData ? '' : 'loadingGraphOpacity'}
              innerRadius={100}
              radius={140}
              getAngle={d => d.theta}
              data={graphData}
              onValueClick={v => this.singleRepoNCommits(v)}
              onValueMouseOver={v => this.setState({mouseOverValue: v})}
              onSeriesMouseOut={v => this.setState({mouseOverValue: false})}
              width={300}
              // showLabels
              height={300}>
              {this.state.mouseOverValue && 
                <Hint value={this.state.mouseOverValue}>
                  <div className='hintStyle'>
                    <p>{this.state.mouseOverValue.label} :<br/>{this.state.mouseOverValue.theta}</p>
                  </div>
                </Hint>
              }
            </RadialChart>
            {/* <DiscreteColorLegend
              className='pull-right'
              orientation="vertical"
              height={300}
              width={200}
              items={graphData.map(e => e.label)}
            /> */}
          </div>
        )
    }
  }

  render() {
    return (
      <div>
        <div className='pull-right zIndex100'>
          <span className='marginRight30'><b>Repositories Selected: {this.state.repoCount}</b></span>
          <DropdownButton className='marginRight30' title='Repositories Count' id='g1Dropdown' onSelect={v => this.changeNumberOfRepos(v)}>
            {repoCounts.map((count, index) => {
              return <MenuItem key={index} active={this.state.repoCount === count} eventKey={count}>{count}</MenuItem>
            })}
          </DropdownButton>
          <DropdownButton title='Graphs' id='g1GraphChange' onSelect={v => this.changeGraph(v)}>
            {graphs.map((graph, index) => {
              return <MenuItem key={index} active={this.state.graph === graph} eventKey={graph}>{graph}</MenuItem>
            })}
          </DropdownButton>
        </div><br/>
        {this.renderGraph()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { repos_and_commits } = state.zoom1;
  return { repos_and_commits };
}

export default connect(mapStateToProps, { repoAndCommitsAction })(RepoNCommits);
