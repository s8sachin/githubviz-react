import { REPO_AND_COMMITS, USERS_AND_PRS } from '../actions/type';

const INITIAL_STATE = {
  repos_and_commits: [],
  users_and_prs: []
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case REPO_AND_COMMITS: 
      return {...state, [action.payload.repos_and_commits]:action.payload.data};
    case USERS_AND_PRS: 
      return {...state, [action.payload.users_and_prs]:action.payload.data};
    default :
      return state;
  }
}