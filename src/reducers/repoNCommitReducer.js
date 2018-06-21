import {REPO_AND_COMMITS} from '../actions/type';

const INITIAL_STATE = {
  repos_and_commits: []
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case REPO_AND_COMMITS: 
      return {...state, [action.payload.repos_and_commits]:action.payload.repos_and_commits};
    default :
      return state;
  }
}