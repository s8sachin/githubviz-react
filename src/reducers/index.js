import { combineReducers } from 'redux';
import repoNCommitReducer from './repoNCommitReducer';
export default combineReducers({
  repoNCommits: repoNCommitReducer
})