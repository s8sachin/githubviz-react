import React, {Component} from 'react';
import { RadialChart, Hint, DiscreteColorLegend } from 'react-vis';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import browserHistory from '../../history';

const lodingGraphData = [
  {theta: 2, label: '-----------'},
  {theta: 6, label: '-----------'},
  {theta: 2, label: '-----------'},
  {theta: 3, label: '-----------'},
  {theta: 1, label: '-----------'}
];

class UsersNPrs extends Component {

  componentWillMount () {
    this.setState({mouseOverValue: false})
  }

  singleUserNCommits = (v) => {
    const label = v.label;
    browserHistory.push(`/singleUserNCommits/${label}`);
  }
  render () {
    var graphData = this.props.users_and_prs[0] ? this.props.users_and_prs : lodingGraphData;
    return (
      <div className={this.props.users_and_prs[0] ? '' : 'loadingGraphOpacity'}>
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
            { this.props.users_and_prs[0] && this.state.mouseOverValue && 
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
  const { users_and_prs } = state.zoom1;
  return { users_and_prs };
}

export default connect(mapStateToProps) (UsersNPrs);
