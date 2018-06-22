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
  setGraphValue (v) {
    const username = v.label;
    const PullRequests = v.theta;
    return this.setState({mouseOverValue: {username, PullRequests}})
  }
  render(){
    return (
      <RadialChart
        className={'donut-chart-example'}
        innerRadius={100}
        radius={200}
        getAngle={d => d.theta}
        data={this.props.users_and_prs}
        onValueMouseOver={v => this.setState({mouseOverValue: v})}
        onSeriesMouseOut={v => this.setState({mouseOverValue: false})}
        width={500}
        height={500}>
         {this.state.mouseOverValue && <Hint className="custom-hint" value={{"Username": this.state.mouseOverValue.label, "Pull Requests": this.state.mouseOverValue.theta}} />}
      </RadialChart>
    )
  }
}

const mapStateToProps = (state) => {
  const { users_and_prs } = state.zoom1;
  return { users_and_prs };
}

export default connect(mapStateToProps) (UsersNPrs);
