import { singleRepoNCommits, singleUserNCommits, teamAdditionsDeletions } from '../api/zoom2Api';
import { SINGLE_REPO_COMMITS, SINGLE_USERN_COMMITS, TEAM_ADDITIONS_DELETIONS } from './type';

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

export const teamAdditionsDeletionsAction = (status) => {
  return (dispatch) => {
    teamAdditionsDeletions(status)
    .then(response => {
      console.log(response)
      const team_additons_deletions = 'team_additons_deletions'
      const data = response.data.teamAdditionsDeletions;
      dispatch({type: TEAM_ADDITIONS_DELETIONS, payload: {team_additons_deletions, data}})
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