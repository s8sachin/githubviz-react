import React, { Component } from 'react';
import { XYPlot,XAxis,YAxis, VerticalGridLines, HorizontalGridLines,Hint,LineMarkSeries
} from 'react-vis';
import { Grid, Row,Col} from 'react-bootstrap';

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
        value2: false
      }
  render() {
    const {value2} = this.state;
    return (
      <div>
      <Grid>
        <Row>
      <Col xs={12} md={12}>
      <XYPlot height={300} width={500} stroke="orange" xType="ordinal" yType="ordinal" >
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
    </Col>
    </Row>
        </Grid>
        </div>
    );
  }
}

export default LineGraph;
