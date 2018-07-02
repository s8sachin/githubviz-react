import { ROOT_URL, headers } from "./api_config";
import axios from 'axios';

export const singlePullreqNcommits = (params) => {
  return axios({
    method: 'get',
    url: `${ROOT_URL}/singlePullreqNcommits/${params.repoName}/${params.prno}`,
    headers: headers()
  })
}
