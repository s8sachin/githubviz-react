import React, { Component } from 'react';
import Header from './commons/Header';
import { Grid, Row,Col,Button,ProgressBar} from 'react-bootstrap';
import { FlexibleXYPlot,
  FlexibleWidthXYPlot,
  FlexibleHeightXYPlot,VerticalBarSeries} from 'react-vis';

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
  render () {
    return (
      <div>
        <Header/>
        <Grid>
  <Row className="show-grid">
    <Col xs={12} md={8}>
    {/* <XYPlot height={300} width= {300}>
  <VerticalGridLines />
  <HorizontalGridLines />
  <XAxis />
  <YAxis />
  <LineSeries data={data} />
  <Button bsStyle="primary">Primary</Button>
</XYPlot> */}
<ProgressBar bsStyle="success" now={40} />
  <ProgressBar bsStyle="info" now={20} />
  <ProgressBar bsStyle="warning" now={60} />
  <ProgressBar bsStyle="danger" now={80} />
  <Button bsStyle="primary">Primary</Button>
    </Col>
    <Col xs={6} md={4}>
    <FlexibleWidthXYPlot height={400}>
  <VerticalBarSeries data={data} />
</FlexibleWidthXYPlot>

<FlexibleHeightXYPlot width={300}>
  <VerticalBarSeries data={data} />
</FlexibleHeightXYPlot>

<FlexibleXYPlot>
  <VerticalBarSeries data={data} />
</FlexibleXYPlot>
    <Button bsStyle="success">Success</Button>
    </Col>
  </Row>
  </Grid>

       
      </div>
    )
  }
}

export default AllGraphs;