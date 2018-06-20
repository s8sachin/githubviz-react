import React, { Component } from 'react';
import Header from './commons/Header';
import { Grid,Row,Col,Button} from 'react-bootstrap';
 import {XYPlot, XAxis, YAxis,ArcSeries, HorizontalGridLines, LineSeries, RadialChart,
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
        <ClockExample/>
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

const PI = Math.PI;
function getSeconds() {
  return Math.floor((new Date()).getTime() / 1000);
}
 class ClockExample extends React.Component {
  state = {
    time: 0
  }

  componentDidMount() {
    this._timerId = setInterval(() => this.setState({time: getSeconds()}), 100);
  }

  componentWillUnmount() {
    clearInterval(this._timerId);
    this.setState({timerId: false});
  }

  render() {
    const {time} = this.state;
    const seconds = time % 60;
    const minutes = (time / 60) % 60;
    const hours = (time / (60 * 24)) % 24;
    return (
      <XYPlot
        xDomain={[-3, 3]}
        yDomain={[-3, 3]}
        width={300}
        getAngle={d => d.time}
        getAngle0={d => 0}
        height={300}>
        <ArcSeries
          animation={{
            damping: 9,
            stiffness: 300
          }}
          radiusDomain={[0, 3]}
          data={[
            {time: seconds / 60 * 2 * PI, radius0: 1, radius: 1.5, color: 0},
            {time: minutes / 60 * 2 * PI, radius0: 1.6, radius: 2.1, color: 1},
            {time: hours / 24 * 2 * PI, radius0: 2.2, radius: 2.7, color: 2}
          ]}
          />
      </XYPlot>
    );
  }
}

export default AllGraphs;