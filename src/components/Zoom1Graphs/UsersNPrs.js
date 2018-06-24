import React, {Component} from 'react';
import { RadialChart, Hint, DiscreteColorLegend } from 'react-vis';
import { connect } from 'react-redux';
import { USERS_AND_PRS } from '../../actions/type';
import { Col } from 'react-bootstrap';

const lodingGraphData = [
  {theta: 2, label: '-----------'},
  {theta: 6, label: '-----------'},
  {theta: 2, label: '-----------'},
  {theta: 3, label: '-----------'},
  {theta: 1, label: '-----------'}
];

class UsersNPrs extends Component {

  constructor () {
    super();
  }

  componentWillMount () {
    this.setState({mouseOverValue: false})
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