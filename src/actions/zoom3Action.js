import { committedDateNMessage } from '../api/zoom3Api';
import { TABLE_DATA} from './type';

export const committedDateNMessageAction = (status) => {
    return (dispatch) => {
      const table_data = 'table_data';
      var data = [];
      dispatch({type:  TABLE_DATA, payload: {table_data, data}});
      committedDateNMessage (status)
      .then(response => {
        data = response.data.committedDateNMessage ;
        dispatch({type: TABLE_DATA, payload: {table_data, data}})
      })
      .catch(er => console.log(er))
    }
  }