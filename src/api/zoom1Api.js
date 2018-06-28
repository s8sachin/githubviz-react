import axios from 'axios';
import { ROOT_URL, headers } from './api_config';

export const getReposAndCommits = (params) => {
  const queryParams = params || {};
  return axios({
    method:'get',
    url:`${ROOT_URL}/reposAndCommits?repoCount=${queryParams.repoCount}`,
    headers: headers()
  })
}

export const getUsersAndPullreq = (params) => {
  const queryParams = params || {};
  return axios({
    method:'get',
    url:`${ROOT_URL}/usersAndPullreq?usersCount=${queryParams.usersCount}`,
    headers: headers()
  })
}

export const getTeamsNMembersNPrs = (params) => {
  return axios({
    method:'get',
    url:`${ROOT_URL}/teamsNMembersNPrs`,
    headers: headers()
  })
}