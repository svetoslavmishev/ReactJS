import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            description: ''
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onInputSubmit = this.onInputSubmit.bind(this);
    }

    onInputChange(ev) {
        this.setState({ [ev.target.name]: ev.target.value });
    }

    onInputSubmit(ev) {
        ev.preventDefault();
        fetcher.createPost(this.state)
            .then(post =>
                console.log(post)
            )
    }

    componentDidMount() {
        this.setState({ author: localStorage.getItem('username') });
    }

    render() {
        return (
            <section id="viewSubmit">
                <div className="submitArea">
                    <h1>Submit Link</h1>
                    <p>Please, fill out the form. A thumbnail image is not required.</p>
                </div>
                <div className="submitArea formContainer">
                    <form id="submitForm" className="submitForm" onSubmit={this.onInputSubmit}>
                        <label>Link URL:</label>
                        <input name="url" type="text" onChange={this.onInputChange} />
                        <label>Link Title:</label>
                        <input name="title" type="text" onChange={this.onInputChange} />
                        <label>Link Thumbnail Image (optional):</label>
                        <input name="imageUrl" type="text" onChange={this.onInputChange} />
                        <label>Comment (optional):</label>
                        <textarea name="description" onChange={this.onInputChange}></textarea>
                        <Link to="/myposts"><input id="btnSubmitPost" value="Submit" type="submit" /></Link>
                    </form>
                </div>
            </section >
        )
    }
}
