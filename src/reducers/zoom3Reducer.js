import { TABLE2_DATA,TABLE_DATA} from '../actions/type';
const INITIAL_STATE = {
    table2_data: [],
    table_data: []
  }
  
  export default (state = INITIAL_STATE, action) => {
    switch(action.type){
      case TABLE2_DATA: 
        return {...state, table2_data:action.payload.data};
      case TABLE_DATA: 
        return {...state, table_data:action.payload.data};
        default :
      return state;
  }
}