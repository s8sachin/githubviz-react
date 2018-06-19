import React, { Component } from 'react';
import { Grid, Jumbotron, Button } from 'react-bootstrap';
import Header from './commons/Header';

class Root extends Component {

  clickFunc() {
    console.log("hi")
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
              <Button bsStyle="primary" href='#'>Learn more</Button>
            </p>
          </Jumbotron>
        </Grid>
      </div>
    );
  }
}

export default Root;