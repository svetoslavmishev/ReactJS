import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import fetcher from '../../utils/authFetcher';
import './Submit.css';

export default class Submit extends Component {
    constructor() {
        super();

        this.state = {
            author: '',
            url: '',
            title: '',
            imageUrl: '',
            description: '',
            redirect: false
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.createPost = this.createPost.bind(this);
    }

    onInputChange(ev) {
        this.setState({ [ev.target.name]: ev.target.value });
    }

    createPost(ev) {
        ev.preventDefault();

        fetcher.createPost(this.state)
            .then(newPost => {
                console.log(newPost);
                this.setState({ redirect: true })
            })
    }

    componentDidMount() {
        this.setState({ author: localStorage.getItem('username') });
    }

    render() {
        if (this.props.redirect) {
            return <Redirect to='/myposts' />;
        }
        return (
            <section id="viewSubmit">
                <div className="submitArea">
                    <h1>Submit Link</h1>
                    <p>Please, fill out the form. A thumbnail image is not required.</p>
                </div>
                <div className="submitArea formContainer">
                    <form id="submitForm" className="submitForm" onSubmit={this.createPost}>
                        <label>Link URL:</label>
                        <input name="url" type="text" onChange={this.onInputChange} />
                        <label>Link Title:</label>
                        <input name="title" type="text" onChange={this.onInputChange} />
                        <label>Link Thumbnail Image (optional):</label>
                        <input name="imageUrl" type="text" onChange={this.onInputChange} />
                        <label>Comment (optional):</label>
                        <textarea name="description" onChange={this.onInputChange}></textarea>
                        <input id="btnSubmitPost" value="Submit" type="submit" />
                    </form>
                </div>
                {(this.state.redirect) ? <Redirect to="/myposts" /> : ''}
            </section >
        )
    }
}
