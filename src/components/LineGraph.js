import React, { Component } from 'react';
import Header from './commons/Header';
import 'react-vis/dist/style.css';
import { XYPlot,VerticalBarSeries,XAxis,YAxis, VerticalGridLines, HorizontalGridLines,Hint,LineMarkSeries
  } from 'react-vis';
  import { Grid, Row,Col} from 'react-bootstrap';
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
  const data1 = [
    {x: "Repo", y: "C1"},
    {x: "Repo1", y: "C2"},
    {x: "Repo2", y: "C3"},
    {x: "Repo3", y: "C4"},
    {x: "Repo4", y: "C5"},
    {x: "Repo5", y: "C6"},

  ];
class LineGraph extends Component {
  state = {
    value: false,
    value2: false
  }
  render () {
    const {value} = this.state;
    const {value2} = this.state;
    return (
      <div>
        <Header />
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={6}>
              <div>
                <XYPlot height={300} width={500} color="orange" stroke="black"  xType="ordinal">
                  <VerticalGridLines />
                  <HorizontalGridLines />
                  <XAxis />
                  <YAxis />
                  <VerticalBarSeries data={data}
                    onValueMouseOver={v => this.setState({ value: v })}
                    onSeriesMouseOut={v => this.setState({ value: false })} />
                  {value && <Hint value={value} />}
                </XYPlot>
                <h3 className="head-custom">BarGragh:</h3>
                <p className="para-custom">Bar series come in two flavors, HorizontalBarSeries and VerticalBarSeries</p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <XYPlot height={300} width={300} stroke="orange" xType="ordinal" yType="ordinal" >
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <LineMarkSeries data={data1}
                 onValueMouseOver={v => this.setState({ value2: v })}
                 onSeriesMouseOut={v => this.setState({ value2: false })}
                />
                 {value2 && <Hint value={value2} />}
              </XYPlot>
              <h3 className="head-custom">LineGragh:</h3>
                <p className="para-custom">Line series come in two flavors, HorizontalBarSeries and VerticalBarSeries</p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
export default LineGraph;