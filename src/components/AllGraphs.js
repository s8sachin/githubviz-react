import React, { Component } from 'react';
import Header from './commons/Header';
import { connect } from 'react-redux';
import RepoNCommits from './Zoom1Graphs/RepoNCommits';
import UsersNPrs from './Zoom1Graphs/UsersNPrs';
import { Grid, Row, Col } from 'react-bootstrap';
import TeamsNMembersNPrs from './Zoom1Graphs/TeamsNMembersNPrs';
import { repoAndCommitsAction, usersAndPRAction, teamsNMembersNPrsAction } from '../actions/AllGraphAction';

class AllGraphs extends Component {

  componentWillMount() {
    this.props.repoAndCommitsAction();
    this.props.usersAndPRAction();
    this.props.teamsNMembersNPrsAction();
  }

  handleData(response) {
    this.setState({ data: response.data.repoNCommits })
  }
  render() {
    return (
      <div>
        <Header />
        <Grid className="overflow">
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <h3 className="graph-heading">Repositories and Commits:</h3>
            <center><RepoNCommits /></center>
            </Col>
          </Row>
          <div className="border-bottom"></div>
          <Row className="show-grid">
            {/* <Col xs={12} md={4}>
            </Col> */}
            {/* <Col xs={12} md={12} className="margin-fix"> */}
              <h3 className="graph-heading">Users and Pullrequests:</h3>
            <center><UsersNPrs/></center>
            {/* </Col>
            <Col xs={12} md={4}>
            </Col> */}
          </Row>
          <div className="border-bottom"></div>
          <Row className="show-grid">
            <Col xs={12} md={12} className="margin-fix">
              <h3 className="graph-heading">Team and Pull Requests:</h3><br/>
              <center><TeamsNMembersNPrs /></center>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { repos_and_commits, users_and_prs, teams_and_members_and_prs } = state.zoom1;
  return { repos_and_commits, users_and_prs, teams_and_members_and_prs };
}

export default connect(mapStateToProps, { repoAndCommitsAction, usersAndPRAction, teamsNMembersNPrsAction })(AllGraphs);
