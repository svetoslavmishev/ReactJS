import React, { Component } from 'react';
import Post from './partials/Post';
import fetcher from '../../utils/authFetcher';
import './Catalog.css';


export default class Catalog extends Component {
    constructor() {
        super();

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetcher.allPosts()
            .then(data => {
                this.setState({ posts: data })
            })
    }

    render() {
        return (
            <div className="posts">
                {this.state.posts.map((post, i) => {
                    return <Post key={post._id} data={post} index={++i} />
                })}
            </div>
        )
    }
}
