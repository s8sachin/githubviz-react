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
        <h1>Pie chart</h1>
        <p>A pie graph (or pie chart) is a specialized graph used in statistics. </p>
          <p>The independent variable is plotted around a circle in either a clockwise direction or a counterclockwise direction.</p>
        <ClockExample/>
      </div>
    )
  }
}
class Radialcharts extends Component {
  state = {
    value: false
  }
  render () {
    const { value } = this.state;
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={6}>
              <RadialChart
                className={'donut-chart-example'}
                innerRadius={100}
                radius={140}
                getAngle={d => d.theta}
                data={[
                  { theta: 2, className: 'custom-class' },
                  { theta: 6 },
                  { theta: 2 },
                  { theta: 3 },
                  { theta: 1 }
                ]}
                onValueMouseOver={v => this.setState({ value: v })}
                onSeriesMouseOut={v => this.setState({ value: false })}
                width={300}
                height={300}>
                {value && <Hint value={value} />}
              </RadialChart>
            </Col>
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


export default  Piecharts;