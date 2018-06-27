import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RadialChart, Hint, DiscreteColorLegend } from 'react-vis';
import { Col }   from 'react-bootstrap';
import { singleUserNCommitsAction } from '../../actions/zoom2Action';

const lodingGraphData = [
    {theta: 2, label: '-----------'},
    {theta: 6, label: '-----------'},
    {theta: 2, label: '-----------'},
    {theta: 3, label: '-----------'},
    {theta: 1, label: '-----------'}
  ];
 class SingleUserNCommits extends Component {
    componentWillMount() {
      const label = this.props.match.params.label;
      this.props.singleUserNCommitsAction(label);
      this.setState({ mouseOverValue: false });
    }
    render () {
      var graphData = this.props.single_usern_commits[0] ? this.props.single_usern_commits : lodingGraphData;
      return (
        <div className={this.props.single_usern_commits[0] ? '' : 'loadingGraphOpacity'}>
          <Col xs={6} md={6}>
            <RadialChart
              className='donut-chart-hover'
              innerRadius={100}
              radius={140}
              getAngle={d => d.theta}
              data={graphData}
              onValueClick={v => this.singleUserNCommits(v)}
              onValueMouseOver={v => this.setState({mouseOverValue: v})}
              onSeriesMouseOut={v => this.setState({mouseOverValue: false})}
              width={300}
              // showLabels
              height={300}>
              { this.props.single_usern_commits[0] && this.state.mouseOverValue && 
                <Hint value={this.state.mouseOverValue}>
                  <div className='hintStyle'>
                    <p>{this.state.mouseOverValue.label} :<br/>{this.state.mouseOverValue.theta}</p>
                  </div>
                </Hint>
              }
            </RadialChart>
          </Col>
          <Col xs={6} md={6}>
            <DiscreteColorLegend
              orientation="vertical"
              height={300}
              width={200}
              items={graphData.map(e => e.label)}
            />
          </Col>
        </div>
      )
    }
  }
  const mapStateToProps = (state) => {
    const { single_usern_commits } = state.zoom2;
    return { single_usern_commits };
  }
  
  export default connect(mapStateToProps, { singleUserNCommitsAction })(SingleUserNCommits);