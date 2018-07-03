import { ROOT_URL, headers } from "./api_config";
import axios from 'axios';

export const  committedDateNMessage= (params) => {
  return axios({
    method: 'get',
    url: `${ROOT_URL}/committedDateNMessage/${params.repoName}/${params.branch}`,
    headers: headers()
  })
}