import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import fetcher from '../../../utils/authFetcher';

export default class Delete extends Component {
    deletePost = (id) => {
        fetcher.deletePost(id)
            .then(res => console.log(res))
    }

    render() {
        let id = this.props.match.params.id;
        this.deletePost(id);
        return <Redirect to="/catalog" />
    }
}
