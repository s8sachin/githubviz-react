import React, { Component } from 'react';
import Header from './commons/Header';
import 'react-vis/dist/style.css';
import { XYPlot,VerticalBarSeries,XAxis,YAxis, VerticalGridLines, HorizontalGridLines,Hint
  } from 'react-vis';
  const data = [
    {x: 0, y: 8},
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
  

class LineGraph extends Component {
  state = {
    value: false
  }
  render () {
    const {value} = this.state;
    return (
      <div>
        <Header/>
        <XYPlot height={300} width={500} color= "orange" stroke="black" >
        <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
  <VerticalBarSeries data={data} 
  onValueMouseOver={v => this.setState({value: v})}
  onSeriesMouseOut={v => this.setState({value: false})}/>
  
        {value && <Hint value={value}/>}
</XYPlot>
<h3 class="head-custom">BarGragh:</h3>
<p class="para-custom">Bar series come in two flavors, HorizontalBarSeries and VerticalBarSeries</p>
      </div>
    )
  }
}


export default LineGraph;