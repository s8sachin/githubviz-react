import React, {Component} from 'react';
import { RadialChart, Hint } from 'react-vis';
import { connect } from 'react-redux';
import { USERS_AND_PRS } from '../../actions/type';

class UsersNPrs extends Component {
  constructor () {
    super();
  }
  componentWillMount () {
    this.setState({mouseOverValue: false})
  }
  render(){
    return (
      <RadialChart
        className={'donut-chart-example'}
        innerRadius={100}
        radius={140}
        getAngle={d => d.theta}
        data={this.props.users_and_prs}
        onValueMouseOver={v => this.setState({mouseOverValue: v})}
        onSeriesMouseOut={v => this.setState({mouseOverValue: false})}
        width={300}
        // showLabels
        height={300}>
        {this.state.mouseOverValue && <Hint value={this.state.mouseOverValue} />}
      </RadialChart>
    )
  }
}

const mapStateToProps = (state) => {
  const { users_and_prs } = state.zoom1;
  return { users_and_prs };
}

export default connect(mapStateToProps) (UsersNPrs);
