import React, { Component } from 'react';
import Header from './commons/Header';
import { Grid,Row,Col,Button} from 'react-bootstrap';
 import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, RadialChart,
  Hint} from 'react-vis';
  
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
class AllGraphs extends Component {
  state = {
    value: false
  }
  render () {
    const {value} = this.state;
    return (
      <div>
        <Header/>
        <Content/>
        <Grid>
      <Row className="show-grid">  
         <Col xs={12} md={6}>
        <XYPlot height={300} width= {300}>
          {/* <VerticalGridLines /> */}
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LineSeries data={data} />
        </XYPlot>
        <Button bsStyle="success" bsSize="large">
        chart
        </Button>
        </Col>
        
        <Col xs={12} md={6}>
        <RadialChart
        className={'donut-chart-example'}
        innerRadius={100}
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
        <Button bsStyle="success" bsSize="large">
        pie chart
        </Button>
         </Col>
        </Row>
        </Grid>
      </div>
    );
  }
}
class Content extends React.Component {
  render() {
     return (
        <div>
           <h2>Content</h2>
           <p>The content text!!!</p>
        </div>
     );
  }
}

export default AllGraphs;