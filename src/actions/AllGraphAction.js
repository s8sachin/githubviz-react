import {REPO_AND_COMMITS} from './type';
import { getReposAndCommits } from '../api/zoom1Api';

export const repoAndCommitsAction = (status) => {
  return (dispatch) => {
    getReposAndCommits()
    .then(response => {
      const repoNCommits = 'repoNCommits'
      const data = response.data.repoNCommits;
      dispatch({type: REPO_AND_COMMITS, payload: {repoNCommits: data}})
    })
    .catch(er => console.log(er))
  }
}