import React, { Component } from 'react';

export default class Profile extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6">
                        <div className="well well-sm">
                            <div className="row">
                                <div className="col-sm-6 col-md-4">
                                    <img src="http://placehold.it/150" alt="" className="img-circle img-responsive" />
                                </div>
                                <div className="col-sm-6 col-md-8">
                                    <h4><i className="glyphicon glyphicon-user"></i> <strong>Some Young Guy</strong></h4>
                                    <small>
                                        <cite title="City, ST">
                                            <i className="glyphicon glyphicon-map-marker"></i> City. ST
                                        </cite>
                                    </small>
                                    <p>
                                        <i className="glyphicon glyphicon-envelope"></i> <a href="/">{this.props.username}</a><br />
                                        <i className="glyphicon glyphicon-globe"></i> <a href="/">{this.props.email}</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}