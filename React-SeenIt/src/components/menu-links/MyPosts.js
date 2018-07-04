import React, { Component } from 'react';
import Post from './partials/Post';
import fetcher from '../../utils/authFetcher';

export default class MyPosts extends Component {
    constructor() {
        super();

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetcher.myPosts(this.state.posts.autor)
            .then(data => {
                this.setState({ posts: data });
            })
    }

    render() {
        return (
            <div className="posts">
                {this.state.posts.map(post => {
                    return <Post key={post._id} data={post} />
                })}
            </div>
        )
    }
}
