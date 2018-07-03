import React, { Component } from 'react';
import {Table } from 'react-bootstrap';
import { committedDateNMessageAction } from '../../actions/zoom3Action';
import { connect } from 'react-redux';
import Header from '../commons/Header';import { Col, Grid, Row, Button, Glyphicon }   from 'react-bootstrap';
import browserHistory from '../../history';

class TableData extends Component {
    componentWillMount() {
        const repoName = this.props.match.params.repoName;
        const branch = this.props.match.params.branch;
        this.props.committedDateNMessageAction({repoName, branch});
      }
  render() {
    return (
        <div className="table-custom">
        <Header/>
        <Grid>
          <Row>
          <Col xs={12} md={4} className="margin-top">
          <Button className="butn-top" bsStyle="primary" onClick={() => browserHistory.push('/singleRepoNCommits/:repo')}><Glyphicon glyph="chevron-left" /> Back</Button>
          </Col>
          <Col xs={12} md={8}>
          <h4 className="header-color1">single user committedDate and Id </h4>
          </Col>
          </Row>
          <Row>
          <Col xs={12} md={12}>
        <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>commited date</th>
            <th>Message</th>
            <th>oid</th>
          </tr>
        </thead>
        <tbody>
        {this.props.table_data && this.props.table_data.map((obj, index) => {
            return(<tr key={index}>
            <td>{obj.committedDate}</td>
            <td>{obj.message}</td>
            <td>{obj.id}</td>
          </tr>)
        })}
        </tbody>
      </Table>
      </Col>
      </Row>
      </Grid>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    const { table_data } = state.zoom3;
    return { table_data };
}
  
  export default connect(mapStateToProps, { committedDateNMessageAction })(TableData);