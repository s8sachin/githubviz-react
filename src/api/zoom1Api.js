import axios from 'axios';
import { ROOT_URL, headers } from './api_config';

export const getReposAndCommits = (params) => {
  return axios({
    method:'get',
    url:`${ROOT_URL}/reposAndCommits`,
    headers: headers()
  })
}

export const getUsersAndPullreq = (params) => {
  return axios({
    method:'get',
    url:`${ROOT_URL}/usersAndPullreq`,
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