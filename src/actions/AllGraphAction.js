import {REPO_AND_COMMITS} from './type';
import { getReposAndCommits } from '../api/zoom1Api';

export const repoAndCommitsAction = (status) => {
  return (dispatch) => {
    getReposAndCommits()
    .then(response => {
      const repos_and_commits = 'repos_and_commits'
      const data = response.data.repoNCommits;
      dispatch({type: REPO_AND_COMMITS, payload: {repos_and_commits, data}})
    })
    .catch(er => console.log(er))
  }
}