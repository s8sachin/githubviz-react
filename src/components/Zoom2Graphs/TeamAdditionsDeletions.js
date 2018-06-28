import React, { Component } from 'react';
import { connect } from 'react-redux';
import { teamAdditionsDeletionsAction } from '../../actions/zoom2Action';
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, VerticalBarSeries, Hint, DiscreteColorLegend } from 'react-vis';
import Header from '../commons/Header';
import { Col, Grid, Row, Button, Glyphicon }   from 'react-bootstrap';
import browserHistory from '../../history';

const lodingAdditionData = [
  {x: '-----------', y: 2},
  {x: '----------', y: 6},
  {x: '---------', y: 2},
  {x: '--------', y: 3},
  {x: '-------', y: 1}
];

const lodingDelData = [
  {x: '-----------', y: 2},
  {x: '----------', y: 4},
  {x: '---------', y: 0},
  {x: '--------', y: 3},
  {x: '-------', y: 5}
];

class TeamAdditionsDeletions extends Component {
  
  componentWillMount() {
    const team = this.props.match.params.team;
    this.props.teamAdditionsDeletionsAction(team);
    this.setState({ mouseOverValue: false, team });
  }

  render () {
    var additionData = this.props.team_additons_deletions.additions || lodingAdditionData ;
    var deletionData = this.props.team_additons_deletions.deletions || lodingDelData;
    return (
      <div>
        <Header/>
        <div style={{'paddingLeft': '50px'}}>
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={2}>
                <Button className="butn-top" bsStyle="primary" onClick={() => browserHistory.push('/AllGraphs')}><Glyphicon glyph="chevron-left" /> Back</Button>
              </Col>
              <Col xs={12} md={10}>
                <h4 className="header-color1">Team {this.state.team}: Members Additions and deletions from recent 10 PRs</h4>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col className="margin-row" xs={12} md={12}>
                <XYPlot
                  xType="ordinal"
                  width={1000}
                  height={500}
                  xDistance={100}
                  className={this.props.team_additons_deletions.additions ? '' : 'loadingGraphOpacity'}>
                  <VerticalGridLines />
                  <HorizontalGridLines />
                  <XAxis />
                  <YAxis />
                  <VerticalBarSeries 
                    data={additionData}
                    onValueMouseOver={v => this.setState({ mouseOverValue: v })}
                    onValueMouseOut={v => this.setState({ mouseOverValue: false })}/>
                  <VerticalBarSeries 
                    data={deletionData}
                    onValueMouseOver={v => this.setState({ mouseOverValue: v })}
                    onValueMouseOut={v => this.setState({ mouseOverValue: false })}/>
                  { this.state.mouseOverValue && 
                    <Hint value={this.state.mouseOverValue}>
                      <div className='hintStyle'>
                        <p>{this.state.mouseOverValue.x} <br/> {this.state.mouseOverValue.type}: <br/>{this.state.mouseOverValue.y}</p>
                      </div>
                    </Hint>
                  }
                </XYPlot>
              </Col>
            </Row>
            <Row>
              <center>
                <DiscreteColorLegend
                orientation="horizontal"
                items={['Additions', 'Deletions']}
                />
              </center>
            </Row>
          </Grid>
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  const { team_additons_deletions } = state.zoom2;
  return { team_additons_deletions };
}

export default connect(mapStateToProps, { teamAdditionsDeletionsAction })(TeamAdditionsDeletions);