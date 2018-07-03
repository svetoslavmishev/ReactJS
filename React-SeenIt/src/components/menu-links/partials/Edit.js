import React, { Component } from 'react';

class Edit extends Component {

    render() {
        return (
            <section id="viewEdit">
                <div className="submitArea">
                    <h1>Edit Link</h1>
                    <p>Please, fill out the form. A thumbnail image/description is not required.</p>
                </div>s
                <div className="submitArea formContainer">
                    <form id="editPostForm" className="submitForm">
                        <label>Link URL:</label>
                        <input name="url" value="https://www.cnbc.com/2017/06/28/progress-buys-mobile-backend-start-up-kinvey-for-49-million.html" type="text" />
                        <label>Link Title:</label>
                        <input name="title" value="Progress Software buys Kinvey" type="text" />
                        <label>Link Thumbnail Image (optional):</label>
                        <input name="image" value="https://pbs.twimg.com/profile_images/464099715865276417/nXvsGPVO.png" type="text" />
                        <label>Comment (optional):</label>
                        <textarea name="description">No desc</textarea>
                        <input id="btnEditPost" value="Edit Post" type="submit" />
                    </form>
                </div>
            </section>
        )
    }
}

export default Edit;