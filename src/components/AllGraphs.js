import React, { Component } from 'react';
import Header from './commons/Header';
import axios from 'axios';
import { connect } from 'react-redux';
import RepoNCommits from './Zoom1Graphs/RepoNCommits';
import UsersNPrs from './Zoom1Graphs/UsersNPrs';
import { repoAndCommitsAction, usersAndPRAction } from '../actions/AllGraphAction';

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
        <RepoNCommits/>
        <UsersNPrs/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { repos_and_commits, users_and_prs } = state.zoom1;
  return { repos_and_commits, users_and_prs };
}

export default connect(mapStateToProps, { repoAndCommitsAction, usersAndPRAction }) (AllGraphs);
