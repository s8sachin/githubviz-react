import { singlePullreqNcommits } from '../api/zoom3Api';
import { TABLE2_DATA} from './type';

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