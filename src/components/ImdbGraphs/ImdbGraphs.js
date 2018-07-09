import React, { Component } from 'react';
import { connect } from 'react-redux';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, Hint, VerticalBarSeries } from 'react-vis';
import { imdbSachMoviesByYearAction } from '../../actions/imdbGraphsAction';
import browserHistory from '../../history';
import { Row, Col, Grid, Button, Glyphicon } from "react-bootstrap";
import Header from '../commons/Header';

class ImdbGraphs extends Component {
 
  componentWillMount() {
    this.setState({ mouseOverValue: false });
    this.props.imdbSachMoviesByYearAction()
  }

  render () {
    return (
      <div>
        <XYPlot height={500} width={1300} color="orange" stroke="black" xType="ordinal">
          <HorizontalGridLines />
          <XAxis tickLabelAngle={-45}/>
          <YAxis />
          <VerticalBarSeries data={this.props.imdb_sach_movies_by_year}
            onValueClick={v => this.singleRepoNCommits(v)}
            onValueMouseOver={v => this.setState({ mouseOverValue: v })}
            onSeriesMouseOut={v => this.setState({ mouseOverValue: false })} />
          {this.state.mouseOverValue && 
            <Hint value={this.state.mouseOverValue}>
              <div className='hintStyle'>
                <p>{this.state.mouseOverValue.x} :<br/>{this.state.mouseOverValue.y}</p>
              </div>
            </Hint>
          }
        </XYPlot>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { imdb_sach_movies_by_year } = state.imdb;
  return { imdb_sach_movies_by_year };
}
export default connect(mapStateToProps, { imdbSachMoviesByYearAction })(ImdbGraphs);