import React, { Component } from 'react';
import { Grid, Jumbotron, Button } from 'react-bootstrap';
import Header from './commons/Header';
import Auth from '../Auth';
class Root extends Component {

  auth0login () {
    const auth = new Auth();
    auth.login();
  }

  userLoggedIn = (localStorage.getItem('access_token') && localStorage.getItem('email')) ? true : false;

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
              {!this.userLoggedIn && <Button bsStyle="primary" onClick={() => this.auth0login()}>Login</Button>}
            </p>
          </Jumbotron>
        </Grid>
      </div>
    );
  }
}

export default Root;