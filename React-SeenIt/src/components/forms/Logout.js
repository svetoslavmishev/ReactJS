import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import fetcher from '../../utils/authFetcher';

export default class Logout extends Component {
    logoutUser = () => {
        fetcher.logout
            .then(res => {
                sessionStorage.removeItem('token');
            })
    }

    render() {
        this.logoutUser();
        return < Redirect to="/" />
    }
}
