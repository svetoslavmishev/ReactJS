import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Stadium extends Component {
    render() {
        return (
            <div className="stadium-box">
                <h4><b>{this.props.name}</b></h4>
                <p>Location:{this.props.location} | Capacity:{this.props.seats}</p>
                <div>
                    <img className="stadium-img" src={this.props.image} alt="stadium" />
                </div>
                <br />
                <Link to={'/stadium/details/' + Number(this.props.id)} className="btn btn-primary">Details</Link>

                {this.props.allowDelete && <Link className="btn btn-primary" to={'/stadium/edit/' + Number(this.props.id)}>Edit</Link>}
                {this.props.allowDelete && <a className="btn btn-primary" href='javascript:;' onClick={this.props.remove}>Delete</a>}
            </div >
        )
    }
}
