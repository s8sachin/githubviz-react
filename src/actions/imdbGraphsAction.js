import { IMDB_SACH_MOVIES_BY_YEAR } from './type';
import { imdbSachMoviesByYear } from '../api/imdbApis';

export const imdbSachMoviesByYearAction = (status) => {
  return (dispatch) => {
    var data = {};
    imdbSachMoviesByYear(status)
    .then(response => {
      data = response.data.imdbSachMoviesByYear;
      dispatch({type: IMDB_SACH_MOVIES_BY_YEAR, payload: data})
    })
    .catch(er => console.log(er))
  }
}