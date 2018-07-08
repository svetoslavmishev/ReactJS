import React, { Component } from 'react';

export default class Profile extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-6">
                        <div class="well well-sm">
                            <div class="row">
                                <div class="col-sm-6 col-md-4">
                                    <img src="http://placehold.it/150" alt="" class="img-circle img-responsive" />
                                </div>
                                <div class="col-sm-6 col-md-8">
                                    <h4><i class="glyphicon glyphicon-user"></i> <strong>Some Young Guy</strong></h4>
                                    <small>
                                        <cite title="City, ST">
                                            <i class="glyphicon glyphicon-map-marker"></i> City. ST
                                        </cite>
                                    </small>
                                    <p>
                                        <i class="glyphicon glyphicon-envelope"></i> <a href="#">you@domain.com</a><br />
                                        <i class="glyphicon glyphicon-globe"></i> <a href="#">http://domain.com</a>
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