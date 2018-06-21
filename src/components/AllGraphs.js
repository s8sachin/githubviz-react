import React, { Component } from 'react';
import Header from './commons/Header';
import axios from 'axios';
import { connect } from 'react-redux';
import RepoNCommits from './Zoom1Graphs/RepoNCommits';
import {repoAndCommitsAction} from '../actions/AllGraphAction';

class AllGraphs extends Component {

  componentWillMount () {
    this.props.repoAndCommitsAction()
  }

  handleData (response) {
    this.setState({data: response.data.repoNCommits})
  }

  render () {
    return (
      <div>
        <Header/>
        <RepoNCommits/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { repos_and_commits } = state.repoNCommits;
  return { repos_and_commits };
}

export default connect(mapStateToProps, { repoAndCommitsAction }) (AllGraphs);
