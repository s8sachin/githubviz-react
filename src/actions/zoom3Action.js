import { committedDateNMessage } from '../api/zoom3Api';
import { TABLE_DATA} from './type';

export const committedDateNMessageAction = (status) => {
    return (dispatch) => {
        console.log(status)
      const table_data = 'table_data';
      var data = [];
      dispatch({type:  TABLE_DATA, payload: {table_data, data}});
      committedDateNMessage (status)
      .then(response => {
          console.log(response)
        data = response.data.committedDateNMessage ;
        dispatch({type: TABLE_DATA, payload: {table_data, data}})
      })
      .catch(er => console.log(er))
    }
  }