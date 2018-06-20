import React, { Component } from 'react';
import { Grid, Jumbotron, Button } from 'react-bootstrap';
import browserHistory from '../history';
import Header from './commons/Header';
import auth0 from 'auth0-js';
import Auth from '../Auth';
class Root extends Component {

  auth0login () {
    const auth = new Auth();
    auth.login();
  }

  render() {
    return (
      <div>
        <Header/>
        {console.log(process.env)}
        <Grid bsClass='container'>
          <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <Button bsStyle="primary" onClick={() => browserHistory.push('/allGraphs')}>All Graphs</Button>
              <Button bsStyle="primary" onClick={() => this.auth0login()}>Login</Button>
            </p>
          </Jumbotron>
        </Grid>
      </div>
    );
  }
}

export default Root;