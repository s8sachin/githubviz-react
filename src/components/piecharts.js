import React, { Component } from 'react';
import Header from './commons/Header';
import { Grid,Row,Col} from 'react-bootstrap';
import { RadialChart,Hint,XYPlot,ArcSeries} from 'react-vis';
import 'react-vis/dist/style.css';
class  Piecharts extends Component {
  render () {
    return (
      <div>
        <Header/>
        <Radialcharts/>
        <ClockExample/>
      </div>
    )
  }
}
class Radialcharts extends Component {
  state = {
    value: false,
    value1:false
  }
  render () {
    const { value } = this.state;
    const { value1} = this.state;
    return (
      <div>
        <Grid>
          <Row className="show-grid">
          <h1 className="head-custom">Pie chart</h1>
            <Col xs={12} md={6}>
            
              <RadialChart
                className={'donut-chart-example'}
                innerRadius={120}
                radius={170}
                getAngle={d => d.theta}
                data={[
                  { theta: 2, className: 'custom-class' },
                  { theta: 6 },
                  { theta: 2 },
                  { theta: 3 },
                  { theta: 11 },
                  { theta: 10 }
                ]}
                onValueMouseOver={v => this.setState({ value: v })}
                onSeriesMouseOut={v => this.setState({ value: false })}
                width={400}
                height={400}>
                {value && <Hint value={value} />}
              </RadialChart>
            </Col>
            <Col xs={12} md={6}>
              <RadialChart
                className={'donut-chart-example'}
                radius={200}
                getAngle={d => d.theta}
                data={[
                  { theta: 10, label:'Repo1'},
                  { theta: 11,label:'Repo2'},
                  { theta: 12,label:'Repo3'},
                  { theta: 13,label:'Repo4'},
                  { theta: 14,label:'Repo5'},
                  { theta: 15,label:'Repo6'}
                ]}
                showLabels
                onValueMouseOver={v => this.setState({ value1: v })}
                onSeriesMouseOut={v => this.setState({ value1: false })}
                width={450}
                height={450}>
                {value1 && <Hint value={value1} />}
              </RadialChart>
            </Col>
          </Row>
          <Row className="show-grid">
          <p>A pie graph (or pie chart) is a specialized graph used in statistics. </p>
          <p>The independent variable is plotted around a circle in either a clockwise direction or a counterclockwise direction.</p>
          </Row>
        </Grid>
      </div>
      )
    }
  }
const PI = Math.PI;
function getSeconds() {
  return Math.floor((new Date()).getTime() / 1000);
}
 class ClockExample extends Component {
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
          radiusDomain={[0, 3]}
          data={[
            {time: seconds / 60 * 2 * PI, radius0: 1, radius: 1.5, color: 0},
            {time: minutes / 60 * 2 * PI, radius0: 1.6, radius: 2.1, color: 1},
            {time: hours / 24 * 2 * PI, radius0: 2.2, radius: 2.7, color: 2}
          ]}/>
      </XYPlot>
    );
  }
}
export default  Piecharts;
