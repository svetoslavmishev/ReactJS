import React, { Component } from 'react';

export default class AdminTable extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.email}</td>

        {/* {this.props.allowDelete && <Link className="btn btn-primary" to={'/stadium/edit/' + Number(this.props.id)}>Edit</Link>} */}
        {/* {props.isAdmin && < Link className="btn btn-primary" to={`/stats/delete/${props.id}`} onClick={props.deleteUser}>Delete</Link>} */}

        {this.props.isAdmin && <a className="btn btn-secondary" href="javascript:;" onClick={this.props.deleteUser}>Delete</a>}
        {/* {props.isAdmin && <Link className="btn btn-secondary" to='#' onClick={props.deleteUser}>Edit</Link>} */}
      </tr >
    )
  }
}
