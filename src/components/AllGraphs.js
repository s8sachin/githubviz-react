import React, { Component } from 'react';
import Header from './commons/Header';
import axios from 'axios';
import { connect } from 'react-redux';
import RepoNCommits from './Zoom1Graphs/RepoNCommits';
import {repoAndCommitsAction} from '../actions/AllGraphAction';

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
  
  constructor(props) {
    super(props);
  }
  componentWillMount () {
    this.props.repoAndCommitsAction()
  }

  handleData (response) {
    this.setState({data: response.data.repoNCommits})
  }

  state = {
    value: false,
    data: data
  }
  render () {
    const {value} = this.state;
    return (
      <div>
        <Header/>
        <RepoNCommits/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { repoNCommits } = state.repoNCommits;
  return { repoNCommits };
}

export default connect(mapStateToProps, { repoAndCommitsAction }) (AllGraphs);
// export default AllGraphs;
