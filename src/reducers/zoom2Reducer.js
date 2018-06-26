import { SINGLE_REPO_COMMITS } from '../actions/type';

const INITIAL_STATE = {
  single_repo_commits: []
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case SINGLE_REPO_COMMITS: 
      return {...state, [action.payload.single_repo_commits]:action.payload.data};
    default :
      return state;
  }
}