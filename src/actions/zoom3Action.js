import { singlePullreqNcommits,committedDateNMessage } from '../api/zoom3Api';
import { TABLE2_DATA,TABLE_DATA} from './type';

export const singlePullreqNcommitsAction = (status) => {
    return (dispatch) => {
      const table2_data = 'table2_data';
      var data = [];
      dispatch({type:  TABLE2_DATA, payload: {table2_data, data}});
      singlePullreqNcommits(status)
      .then(response => {
        data = response.data.singlePullreqNcommits;
        dispatch({type: TABLE2_DATA, payload: {table2_data, data}})
      })
      .catch(er => console.log(er))
    }
  }

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