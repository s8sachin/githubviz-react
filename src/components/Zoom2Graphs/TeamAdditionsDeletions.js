import React, { Component } from 'react';
import { connect } from 'react-redux';
import { teamAdditionsDeletionsAction } from '../../actions/zoom2Action';
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, VerticalBarSeries, Hint } from 'react-vis';
import Header from '../commons/Header';
import { Col,Grid,Row,Button }   from 'react-bootstrap';
import browserHistory from '../../history';


class TeamAdditionsDeletions extends Component {
  
  componentWillMount() {
    const team = this.props.match.params.team;
    this.props.teamAdditionsDeletionsAction(team);
    this.setState({ mouseOverValue: false });
  }

  render () {
    return (
      <div>
        <Header/>
      <div style={{'paddingLeft': '50px'}}>
      <Grid>
       <Row className="show-grid">
         <Col xs={12} md={2}>
          <Button className="butn-top" bsStyle="primary" onClick={() => browserHistory.push('/AllGraphs')}>Back</Button>
         </Col>
         <Col xs={12} md={6}>
          <h4 className="header-color1">Team Members Additions and deletions from recent 10 PRs</h4>
         </Col>
         <Col xs={12} md={4}></Col>
         </Row>
         <Row className="show-grid">
            <Col className="margin-row" xs={12} md={12}>
              <XYPlot
                xType="ordinal"
                width={1000}
                height={500}
                xDistance={100}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeries 
            data={this.props.team_additons_deletions.additions}
            onValueMouseOver={v => this.setState({ mouseOverValue: v })}
            onValueMouseOut={v => this.setState({ mouseOverValue: false })}/>
          <VerticalBarSeries 
            data={this.props.team_additons_deletions.deletions}
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
        </Grid>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  const { team_additons_deletions } = state.zoom2;
  return { team_additons_deletions };
}

export default connect(mapStateToProps, { teamAdditionsDeletionsAction })(TeamAdditionsDeletions);