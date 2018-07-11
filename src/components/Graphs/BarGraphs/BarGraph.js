import React, { Component } from 'react';
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

class BarGraph extends Component {
    state = {
        value: false
      }
  render() {
    const {value} = this.state;
    return (
        <div>
             <Grid>
                 <Row className="show-grid">
                    <Col xs={12} md={12}>
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
                    </div>
                 </Col>
             </Row>
            </Grid>
        </div>
    );
  }
}

export default BarGraph;
