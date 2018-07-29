import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AdminTable extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.email}</td>
        {this.props.isAdmin ?
          <Link className="btn btn-secondary" to="#" onClick={this.props.deleteUser}>Delete</Link> :
          <Link className="btn btn-secondary" to="/register">Register</Link>}
        {this.props.isAdmin && <Link className="btn btn-secondary" to={`/user/details/${this.props.id}`}>Edit</Link>}
      </tr >
    )
  }
}
