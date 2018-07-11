import React, {Component} from 'react';
import { RadialChart,Hint} from 'react-vis';

class Donutcharts extends Component {
  state = {
    value: false
  }
  render() {
    const {value} = this.state;
    return (
      <RadialChart 
        className={'donut-chart-example'}
        innerRadius={100}
        radius={140}
        getAngle={d => d.theta}
        data={[
          {theta: 11, className: 'custom-class'},
          {theta: 12},
          {theta: 13},
          {theta: 14},
          {theta: 15}
        ]}
        onValueMouseOver={v => this.setState({value: v})}
        onSeriesMouseOut={v => this.setState({value: false})}
        width={300}
        height={300}>
        {value && <Hint value={value}/>}
      </RadialChart>
    );
  }
}
export default Donutcharts;