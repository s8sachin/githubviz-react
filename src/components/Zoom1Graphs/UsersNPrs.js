import React, {Component} from 'react';
import { RadialChart, Hint, DiscreteColorLegend } from 'react-vis';
import { connect } from 'react-redux';
import { Col, DropdownButton, MenuItem, Tooltip } from 'react-bootstrap';
import browserHistory from '../../history';
import { usersAndPRAction } from '../../actions/AllGraphAction';

const lodingGraphData = [
  {theta: 2, label: '-----------'},
  {theta: 6, label: '-----------'},
  {theta: 2, label: '-----------'},
  {theta: 3, label: '-----------'},
  {theta: 1, label: '-----------'}
];

const usersCounts = [20, 40, 60, 80, 100]

class UsersNPrs extends Component {

  componentWillMount () {
    this.setState({mouseOverValue: false})
    this.setState({ mouseOverValue: false, usersCount: this.props.usersCount })
  }

  changeNumberOfUsers (count) {
    this.props.usersAndPRAction({usersCount: count})
    this.setState({usersCount: count})
  }

  singleUserNCommits = (v) => {
    const label = v.label;
    browserHistory.push(`/singleUserNCommits/${label}`);
  }
  render () {
    var graphData = this.props.users_and_prs[0] ? this.props.users_and_prs : lodingGraphData;
    return (
      <div className={this.props.users_and_prs[0] ? '' : 'loadingGraphOpacity'}>
        <div className='pull-right zIndex100'>
          <span className='marginRight30'><b>Users Selected: {this.state.usersCount}</b></span>
          <DropdownButton title='Users Count' id='g1Dropdown' onSelect={v => this.changeNumberOfUsers(v)}>
            {usersCounts.map((count, index) => {
              return <MenuItem key={index} active={this.state.usersCount === count} eventKey={count}>{count}</MenuItem>
            })}
          </DropdownButton>
        </div><br/>
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

export default connect(mapStateToProps, { usersAndPRAction }) (UsersNPrs);
