
import React, { Component } from 'react';
import Header from './commons/Header';
import 'react-vis/dist/style.css';
import { XYPlot,LineMarkSeries,XAxis,YAxis, VerticalGridLines, HorizontalGridLines,Hint
  } from 'react-vis';
  const data = [
    {x: "repo1", y: "c1"},
    {x: "repo2", y: "c2"},
    {x: "repo3", y: "c3"},
    {x: "repo4", y: "c4"},
    {x: "repo5", y: "c5"},
    {x: "repo6", y: "c6"},
    {x:"repo7", y: "c7"},
  ];
  

class LineGraph extends Component {
    state = {
        value: false
      }
    render () {
        const { value } = this.state;
    return (
      <div>
        <Header/>
        <XYPlot height={300} width={500} color= "pink" stroke="black" xType="ordinal" yType="ordinal">
        <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
            {/* <LineSeries  data={data} /> */}
            <LineMarkSeries data={data}
            onValueMouseOver={v => this.setState({ value: v })}
                onSeriesMouseOut={v => this.setState({ value: false })}/>
                {value && <Hint value={value} />}
            </XYPlot>
            <h1 className="head-custom">Line Graph</h1>
      </div>
    )
  }
}


export default LineGraph;



