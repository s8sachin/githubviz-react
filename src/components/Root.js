import React, { Component } from 'react';
import { Grid, Jumbotron, Button } from 'react-bootstrap';
import Header from './commons/Header';
import axios from 'axios';
import SocialLogin from 'react-social-login'
import browserHistory from '../history';

var SocialLoginButton = ({ children, triggerLogin, ...props }) => (
  <Button onClick={triggerLogin} {...props}>
    { children }
  </Button>
)

SocialLoginButton = SocialLogin(SocialLoginButton)
// const gitlogin = encodeURIComponent('clientId=5768b65c8ab3fb5b5ea8&redirect_uri=http://localhost:3000&scope=user').toString();
class Root extends Component {
  onSuccess = response => console.log(response);
  onFailure = response => console.error(response);
  login = () => {
    axios({
      method: 'get',
      url: 'https://github.com/login/oauth/authorize'
    })
    .then(res => {
      console.log(res)
    })
  }
  render() {
    return (
      <div>
        <Header/>
        <Grid bsClass='container'>
          <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <Button bsStyle="primary" href='/allGraphs'>Learn more</Button>
            </p>
            <SocialLoginButton
              provider='github'
              gatekeeper='http://localhost:3000/callback'
              appId='5768b65c8ab3fb5b5ea8'
              redirect='http://localhost:3000/callback'
            >
              Login with GitHub OAuth
            </SocialLoginButton>
          </Jumbotron>
        </Grid>
      </div>
    );
  }
}

export default Root;