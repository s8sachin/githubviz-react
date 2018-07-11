import React, {Component} from 'react';
import { RadialChart,Hint,myPalette} from 'react-vis';

class Piecharts extends Component {
    state = {
      value: false
    }
    render() {
      const {value} = this.state;
      return (
        <RadialChart 
        className={'donut-chart-example'}
      
          radius={140}
          getAngle={d => d.theta}
          data={[
            {theta: 2, className: 'custom-class'},
            {theta: 6},
            {theta: 2},
            {theta: 3},
            {theta: 1}
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
  export default Piecharts;