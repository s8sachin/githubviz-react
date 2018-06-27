import React, { Component } from 'react';
import { connect } from 'react-redux';
import { XYPlot, XAxis, YAxis, VerticalBarSeries, VerticalGridLines, HorizontalGridLines, Hint, LineMarkSeries } from 'react-vis';
import { singleRepoNCommitsAction } from '../../actions/zoom2Action';
import browserHistory from '../../history';
import {Row,Col,Grid,Button} from "react-bootstrap"
import Header from '../commons/Header';

const lodingGraphData = [
  {x: 0, y: 8},
  {x: 1, y: 5},
  {x: 2, y: 4},
  {x: 3, y: 9},
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

class SingleRepoNCommits extends Component {
 
  componentWillMount() {
    const repo = this.props.match.params.repo;
    this.setState({ repoName: repo});
    this.props.singleRepoNCommitsAction(repo);
    this.setState({ mouseOverValue: false });
  }
  back = () => {
    browserHistory.push(`/allGraphs`);
  }

  render () {
    var graphData = this.props.single_repo_commits[0] ? this.props.single_repo_commits : lodingGraphData;
    return (
        <div className="overflow">
          <Header />
           <center> 
            <Grid>
              <Row className="show-grid">
                <Col xs={12} md={2}>
                  <Button bsStyle="primary" className="backbtn" onClick={this.back}>Back</Button>
                </Col>
                <Col xs={12} md={10}>
                <h2>{this.state.repoName} branches and commits</h2>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col md={12}>
                  <XYPlot height={500} width={1200} color="#25939a" stroke="#25939a" xType="ordinal" className={this.props.single_repo_commits[0] ? '' : 'loadingGraphOpacity'}>
                    <HorizontalGridLines />
                    <XAxis tickLabelAngle={-45} title="Branches"/>
                    <YAxis title="Commits" />
                    <LineMarkSeries data={graphData}
                    onValueMouseOver={v => this.setState({ mouseOverValue: v })}
                      onSeriesMouseOut={v => this.setState({ mouseOverValue: false })} />
                      {this.state.mouseOverValue &&
                        <Hint value={this.state.mouseOverValue}>
                          <div className='hintStyle'>
                            <p>{this.state.mouseOverValue.x} :<br />{this.state.mouseOverValue.y}</p>
                          </div>
                        </Hint>
                      } 
                  </XYPlot>
                </Col>
              </Row>
            </Grid>
          </center>
      </div>
   )
  }
}

const mapStateToProps = (state) => {
  const { single_repo_commits } = state.zoom2;
  return { single_repo_commits };
}
export default connect(mapStateToProps, { singleRepoNCommitsAction })(SingleRepoNCommits);