import React, { Component } from 'react';
import { Navbar, Nav, NavItem,Grid,Row,Col} from 'react-bootstrap';
import logo from "../../../hpp.png";
import Switch from 'react-toggle-switch';
import "react-toggle-switch/dist/css/switch.min.css"; 

class Headerhp extends Component {

	constructor(props) {
    super(props);
    this.state = {
      switched: false
    };
  }
  
  toggleSwitch = () => {
    this.setState(prevState => {
      return {
        switched: !prevState.switched
      };
    });
  };
    render() {
      return ( 
        <div>
        <Navbar staticTop>
          <Grid>
            <Row className="row-edit">
             <Col  md={12} lg={12} sm={12} >
               <Navbar.Header>
                 <Navbar.Brand>
                   <img src={logo}  alt="logo"  width="200" height="60"/>
                 </Navbar.Brand>
               </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
           <span className="color-text"> Overview</span>
          </NavItem>
        </Nav>
				<Nav pullRight>
      <NavItem id="color-textt" eventKey={1} href="#">
			<span className="color-textt"> Auto Refresh</span>
      </NavItem>
      <NavItem eventKey={2} href="#">
			<Switch onClick={this.toggleSwitch} on={this.state.switched}/>
			</NavItem>
			<NavItem eventKey={3} href="#">
			<i className="fa fa-bell fa-2x  black-color" aria-hidden="true"></i>
			</NavItem>
			<NavItem eventKey={4} href="#">
			<i className="fa fa-bars fa-2x  black-color" aria-hidden="true"></i>
      </NavItem>
    </Nav>
    </Col>
    </Row>
    <Row className="row-edit">
    <Col xs={12} md={12} lg={12} sm={12}>
    <Nav>
    <NavItem eventKey={2} href="#" >
              <i className="fa fa-repeat" aria-hidden="true"></i>
            </NavItem>
            <NavItem eventKey={1} href="#">
              <i className="fa fa-play " aria-hidden="true"></i>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <i className="fa fa-pause" aria-hidden="true"></i>
            </NavItem>
            <NavItem eventKey={3} href="#">
              <i className="fa fa-undo" aria-hidden="true"></i>
            </NavItem>
            <NavItem eventKey={4} href="#">
              <i className="fa fa-undo gly-rotate-252" aria-hidden="true"></i>
            </NavItem>
            <NavItem eventKey={5} href="#">
              <i className="fa fa-undo gly-rotate-80" aria-hidden="true"></i>
            </NavItem>
            <NavItem eventKey={6} href="#" className="verticleline"></NavItem>
            <NavItem eventKey={7} href="#">
              <i className="fa fa-search mginleft-27" aria-hidden="true"></i>
              <input type="text" placeholder="shipment ID/Invoice Number"/>
            </NavItem>
            <NavItem eventKey={8} href="#" className="verticleline"></NavItem>
            <NavItem eventKey={9} href="">
              <i className="fa fa-chevron-left mginleft-27" aria-hidden="true"></i>
              <span className="margin-left20">Last 24 hours</span>
            </NavItem>
            <NavItem eventKey={10} href="#">
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
              <span className="mgnleft15">June 12th 10:00 hrs to June 13th 10:00 hrs</span>
            </NavItem>
            <NavItem eventKey={11} href="#" className="verticleline"></NavItem>
            <NavItem eventKey={12} href="#"><i className="fa fa-file-image-o mginleft-27 " aria-hidden="true"></i></NavItem>
          
            <NavItem eventKey={13} href="#" className="verticleline"></NavItem>
            <NavItem eventKey={14} href="#">
              <i className="fa fa-share-alt " aria-hidden="true"></i>
            </NavItem>
            <NavItem eventKey={15} href="#">
              <i className="fa fa-th-list" aria-hidden="true"></i>
            </NavItem>
            <NavItem eventKey={16} href="#">
              <i className="fa fa-database db" aria-hidden="true"></i>
            </NavItem>
            </Nav>
        </Col>
      </Row>
    </Grid>
    </Navbar>
        
      </div>
      );
    }
  }
  
  export default Headerhp;
  