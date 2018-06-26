import { singleRepoNCommits } from '../api/zoom2Api';
import { SINGLE_REPO_COMMITS } from './type';

export const singleRepoNCommitsAction = (status) => {
  return (dispatch) => {
    singleRepoNCommits(status)
    .then(response => {
      const single_repo_commits = 'single_repo_commits'
      const data = response.data.singleRepoNCommits;
      dispatch({type: SINGLE_REPO_COMMITS, payload: {single_repo_commits, data}})
    })
    .catch(er => console.log(er))
  }
}