import React, {Component} from 'react';
import * as qs from 'query-string';
import axios from 'axios';
import browserHistory from '../history';

class Callback extends Component {
  state = {
    code: null
  }
  componentWillMount(){
    var query = qs.parse(this.props.location.search)
    this.setState({code: query.code})
    this.getKey(query.code)
  }

  getKey (code) {
    if (code) {
      axios({
        method: 'POST',
        url: 'http://localhost:8000/auth/github',
        data: {
          "code": code.toString()
        },
        headers: {'Accept': 'application/json', 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*'}
      })
      .then(res => {
        console.log(res.data.gitResponse);
        if (res.data.gitResponse.error) {
          return browserHistory.push('/');
        }
        localStorage.setItem('access_token', res.data.gitResponse.access_token);
        browserHistory.push('/allGraphs');
      })
      .catch(e => console.log(e))
    }
  }

  render() {
    return(
      <div>Authenticating...</div>
    )
  }
}

export default Callback;