import { TABLE2_DATA} from '../actions/type';
const INITIAL_STATE = {
    table2_data: []
  }
  
  export default (state = INITIAL_STATE, action) => {
    switch(action.type){
      case TABLE2_DATA: 
        return {...state, table2_data:action.payload.data};
        default :
      return state;
  }
}