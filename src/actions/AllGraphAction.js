import { REPO_AND_COMMITS, USERS_AND_PRS, TEAMS_AND_MEMBERS_AND_PRS } from './type';
import { getReposAndCommits, getUsersAndPullreq, getTeamsNMembersNPrs } from '../api/zoom1Api';

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

export const usersAndPRAction = (status) => {
  return (dispatch) => {
    getUsersAndPullreq()
    .then(response => {
      const users_and_prs = 'users_and_prs'
      const data = response.data.usersAndPullreq;
      dispatch({type: USERS_AND_PRS, payload: {users_and_prs, data}})
    })
    .catch(er => console.log(er))
  }
}

export const teamsNMembersNPrsAction = (status) => {
  return (dispatch) => {
    getTeamsNMembersNPrs()
    .then(response => {
      const teams_and_members_and_prs = 'teams_and_members_and_prs'
      const data = response.data.teamsNMembersNPrs;
      dispatch({type: TEAMS_AND_MEMBERS_AND_PRS, payload: {teams_and_members_and_prs, data}})
    })
    .catch(er => console.log(er))
  }
}