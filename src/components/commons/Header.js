import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Button } from 'react-bootstrap';
import browserHistory from '../../history';

class Header extends Component {

  state = {
    userLoggedIn: false
  }
  
  componentWillMount () {
    this.setState({userLoggedIn: this.authenticate()})
  }

  authenticate () {
    return (localStorage.getItem('access_token') && localStorage.getItem('email')) ? true : false;
  }

  logout () {
    localStorage.removeItem('access_token');
    localStorage.removeItem('email');
    this.setState({userLoggedIn: false});
    browserHistory.push('/');
  }

  render () {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='#' id ="gitviz" onClick={() => browserHistory.push('/')}>Github Viz</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {this.state.userLoggedIn && 
            <div>
              <Nav>
                <NavItem eventKey={1} href="#">
                  <Button  bsSize='xsmall' bsStyle="primary" onClick={() => browserHistory.push('/allGraphs')}>All Graphs</Button>
                </NavItem>
              </Nav>
              <Nav>
                <NavItem eventKey={2} href="#">
                  <Button  bsSize='xsmall' bsStyle="primary" onClick={() => browserHistory.push('/googleMap')}>Google Map</Button>
                </NavItem>
                {/* <NavItem eventKey={2} href="#">
                  Link
                  </NavItem>
                  <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}></MenuItem>
                  <MenuItem eventKey={3.2}>Another action</MenuItem>
                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown> */}
              </Nav>
            </div>
          }
          <Nav pullRight>
            <NavItem eventKey={1} id="piechart" onClick={() => browserHistory.push('/piecharts')}>
             Pie chart
            </NavItem>
            <NavItem  id="linegrph" eventKey={2} onClick={() => browserHistory.push('/lineGraph')}>
              Line Gragh
            </NavItem>
            {this.state.userLoggedIn && <NavItem eventKey={2}>
              <Button bsSize='xsmall' bsStyle="primary" onClick={() => this.logout()}>Logout</Button>
            </NavItem>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;