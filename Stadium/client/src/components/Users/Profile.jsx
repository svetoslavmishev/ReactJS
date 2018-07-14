import React, { Component } from 'react';
import { userDetails, updateUser } from '../../api/remote';
import Input from '../common/Input';
import toastr from 'toastr';

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    componentDidMount() {
        this.getDetails();
    }

    async getDetails() {
        const res = await userDetails(this.props.match.params.id);

        this.setState({
            user: res
        });
    }

    onChangeHandler = (propName) => (ev) => {
        const user = this.state.user;
        const newUser = {
            ...user,
            [propName]: ev.target.value
        }

        this.setState({ user: newUser });
    }

    onSubmitHandler(ev) {
        ev.preventDefault();

        updateUser(this.state.user, this.props.match.params.id)
            .then(res => {
                if (res.success) {
                    toastr.success(res.message);
                    this.props.history.push('/admin');
                } else {
                    toastr.error(res.message);
                }
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-15 col-sm-10 col-md-6">
                        <div className="well well-sm">
                            <div className="row">
                                <div className="col-sm-6 col-md-4">
                                    <img src="http://www.floridaaikikai.com/new/wp-content/uploads/2016/07/profile-icon-9-150x150.png" alt="" className="img-circle img-responsive" />
                                </div>
                                <div className="col-sm-6 col-md-8">
                                    <small>
                                        <cite title="City, ST">
                                            <i className="glyphicon glyphicon-map-marker"></i> Stadium Guide App
                                        </cite>
                                    </small>
                                    <h4><i className="glyphicon glyphicon-user"></i>Username: <strong>{this.state.user.username}</strong></h4>
                                    <p>
                                        <i className="glyphicon glyphicon-envelope"></i>userID: {this.state.user.id}<br />
                                        <i className="glyphicon glyphicon-envelope"></i>Password: {this.state.user.password}<br />
                                        <i className="glyphicon glyphicon-globe"></i>Email: {this.state.user.email}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <h4>Edit users</h4>
                    <form onSubmit={this.onSubmitHandler} className="form-group">
                        <Input
                            className="form-control"
                            name="name"
                            value={this.state.user.name}
                            onChange={this.onChangeHandler('name')}
                            label="Username"
                        />
                        <Input
                            className="form-control"
                            name="email"
                            value={this.state.user.email}
                            onChange={this.onChangeHandler('email')}
                            label="E-mail"
                        />
                        <Input
                            className="form-control"
                            name="password"
                            type="password"
                            value={this.state.user.password}
                            onChange={this.onChangeHandler('password')}
                            label="Password"
                        />
                        <br />
                        <input type="submit" className="btn btn-primary" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}