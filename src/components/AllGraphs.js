import React, { Component } from 'react';
import Header from './commons/Header';
import axios from 'axios';
import { connect } from 'react-redux';
import RepoNCommits from './Zoom1Graphs/RepoNCommits';
import UsersNPrs from './Zoom1Graphs/UsersNPrs';
import { repoAndCommitsAction, usersAndPRAction } from '../actions/AllGraphAction';
import{Grid,Row,Col} from 'react-bootstrap';
class AllGraphs extends Component {

  componentWillMount () {
    this.props.repoAndCommitsAction();
    this.props.usersAndPRAction();
  }

  handleData (response) {
    this.setState({data: response.data.repoNCommits})
  }

  render () {
    return (
      <div>
        <Header/>
        <Grid className="overflow">
        <Row className="show-grid">
        <Col xs={12} md={12}>
        <h3 className="color-fix">BarGragh:</h3>
        <RepoNCommits/>
        </Col>
        </Row>
        <div className="border-fix"></div>
        <Row className="show-grid">
        <Col xs={12} md={4}>
        <h3 className="color-fix">PieChart:</h3>
        </Col>
        <Col xs={12} md={4} className="margin-fix">
        <UsersNPrs/>
        </Col>
        <Col xs={12} md={4}></Col>
        </Row>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { repos_and_commits, users_and_prs } = state.zoom1;
  return { repos_and_commits, users_and_prs };
}

export default connect(mapStateToProps, { repoAndCommitsAction, usersAndPRAction }) (AllGraphs);
