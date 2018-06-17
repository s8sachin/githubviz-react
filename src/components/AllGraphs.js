import React, { Component } from 'react';
import Header from './commons/Header';
import 'react-vis/dist/style.css';
import {XYPlot, LineSeries, VerticalGridLines, XAxis, YAxis, HorizontalGridLines, MarkSeries, VerticalBarSeries, Hint, Sunburst} from 'react-vis';

var data = [
  {x: "asd", y: 8},
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

class AllGraphs extends Component {
  state = {
    hover: null
  }

  render () {
    return (
      <div>
        <Header/>
        All Graphs
        <XYPlot height={300} width= {300} colorRange={['#c7e9c0', '#00441b']} xType="ordinal" >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis 
            // tickValues={[0, 1, 3, 4, 5]} 
            // tickFormat={v => `Value is ${v}`} 
            tickLabelAngle={-90} style={{
            line: {stroke: '#ADDDE1'},
            ticks: {stroke: '#ADDDE1'},
            text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
          }}/>
          <YAxis />
          <VerticalBarSeries data={data}
          onValueMouseOver={v => this.setState({hover: v})}
          onSeriesMouseOut={v => this.setState({hover: null})} />
          {this.state.hover &&
            <Hint value={this.state.hover} />
          }
        </XYPlot>
      </div>
    )
  }
}

export default AllGraphs;