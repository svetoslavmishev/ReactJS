import React, { Component } from 'react';
import './Submit.css';

export default class Submit extends Component {
    // constructor() {
    //     super();

    // }

    render() {
        return (
            <section id="viewSubmit">
                <div className="submitArea">
                    <h1>Submit Link</h1>
                    <p>Please, fill out the form. A thumbnail image is not required.</p>
                </div>
                <div className="submitArea formContainer">
                    <form id="submitForm" className="submitForm">
                        <label>Link URL:</label>
                        <input name="url" value="" type="text" />
                        <label>Link Title:</label>
                        <input name="title" value="" type="text" />
                        <label>Link Thumbnail Image (optional):</label>
                        <input name="image" value="" type="text" />
                        <label>Comment (optional):</label>
                        <textarea name="comment"></textarea>
                        <input id="btnSubmitPost" value="Submit" type="submit" />
                    </form>
                </div>
            </section>
        )
    }
}
