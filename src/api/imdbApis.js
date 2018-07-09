import axios from 'axios';
import { ROOT_URL, headers } from './api_config';

export const imdbSachMoviesByYear = (params) => {
  const queryParams = params || {};
  return axios({
    method:'get',
    url:`${ROOT_URL}/imdbSachMoviesByYear`,
    headers: headers()
  })
}
