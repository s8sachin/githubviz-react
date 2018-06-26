import { singleRepoNCommits, singleUserNCommits} from '../api/zoom2Api';
import { SINGLE_REPO_COMMITS, SINGLE_USERN_COMMITS} from './type';

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
export const  singleUserNCommitsAction = (status) => {
  return (dispatch) => {
    console.log(status)
    singleUserNCommits(status)
    .then(response => {
      const single_usern_commits = 'single_usern_commits'
      const data = response.data.singleUserNCommits;
      dispatch({type: SINGLE_USERN_COMMITS, payload: {single_usern_commits, data}})
    })
    .catch(er => console.log(er))
  }
}