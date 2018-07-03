import { TABLE_DATA} from '../actions/type';
const INITIAL_STATE = {
    table_data: []
  }
  
  export default (state = INITIAL_STATE, action) => {
    switch(action.type){
      case TABLE_DATA: 
        return {...state, table_data:action.payload.data};
        default :
      return state;
  }
}