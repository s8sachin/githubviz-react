import { IMDB_SACH_MOVIES_BY_YEAR } from '../actions/type';

const INITIAL_STATE = {
  repos_and_commits: {}
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case IMDB_SACH_MOVIES_BY_YEAR: 
      return {...state, imdb_sach_movies_by_year:action.payload};
    default :
      return state;
  }
}