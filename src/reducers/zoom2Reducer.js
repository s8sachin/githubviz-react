import { SINGLE_REPO_COMMITS, SINGLE_USERN_COMMITS, TEAM_ADDITIONS_DELETIONS } from '../actions/type';

const INITIAL_STATE = {
  single_repo_commits: [],
  single_usern_commits: [],
  team_additons_deletions: []
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case SINGLE_REPO_COMMITS: 
      return {...state, [action.payload.single_repo_commits]:action.payload.data};
    case SINGLE_USERN_COMMITS: 
      return {...state, [action.payload.single_usern_commits]:action.payload.data};
    case TEAM_ADDITIONS_DELETIONS: 
      return {...state, [action.payload.team_additons_deletions]:action.payload.data};
    default :
      return state;
  }
}