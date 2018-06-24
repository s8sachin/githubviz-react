import React, { Component } from 'react';
import Spinner from 'react-spinkit';

class Callback extends Component {
  render() {
    return (
      <div >
        <center><Spinner name="cube-grid" color="coral" className='fullPageSpinner'/></center>
      </div>
    );
  }
}

export default Callback;