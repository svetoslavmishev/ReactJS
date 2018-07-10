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
                {this.props.alowDelete && <Link to="" className="btn btn-primary" onClick={this.props.removeStadium}>Delete</Link>}

                {/* {loggedIn Link className="action" to="/edit/:id">edit</Link>}
                <Link className="action" to="/edit/:id">edit</Link>
                <Link className="action" to="/delete/:id">delete</Link> */}

            </div >
        )
    }
}
