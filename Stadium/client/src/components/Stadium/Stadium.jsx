import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Stadium extends Component {
    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={this.props.image} alt="Card cap"/>
                <div className="card-body">
                    <h4><b>{this.props.name}</b></h4>
                    <p>Location:{this.props.location} | Capacity:{this.props.seats}</p>
                    <Link to={'/stadium/details/' + Number(this.props.id)} className="btn btn-primary">Details</Link>&nbsp;
                    {(this.props.allowUserDelete || this.props.allowAdminDelete) && <Link className="btn btn-primary" to={'/stadium/edit/' + Number(this.props.id)}>Edit</Link>}&nbsp; 
                    {(this.props.allowUserDelete || this.props.allowAdminDelete) && <a className="btn btn-primary" href='javascript:;' onClick={this.props.remove}>Delete</a>}
                </div>
            </div>
        )
    }
}
