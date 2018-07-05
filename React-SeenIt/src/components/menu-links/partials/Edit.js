import React, { Component } from 'react';
import fetcher from '../../../utils/authFetcher';

class Edit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: {}
        }

        this.editPost = this.editPost.bind(this);
    }

    componentDidMount() {
        let id = this.props.match.params.id;

        fetcher.getEditPost(id)
            .then(res => {
                this.setState({ post: res })
            })
    }

    editPost() {
        let id = this.props.match.params.id;

        fetcher.editPost(id)
            .then(res => {
                this.setState({ post: res })
            })
    }

    render() {
        console.log(this.state.post);
        return (
            <section id="viewEdit">
                <div className="submitArea">
                    <h1>Edit Link</h1>
                    <p>Please, fill out the form. A thumbnail image/description is not required.</p>
                </div>s
                <div className="submitArea formContainer">
                    <form id="editPostForm" className="submitForm" onEditSubmit={this.editPost}>
                        <label>Link URL:</label>
                        <input name="url" value={this.state.post.url} type="text" />
                        <label>Link Title:</label>
                        <input name="title" value={this.state.post.title} type="text" />
                        <label>Link Thumbnail Image (optional):</label>
                        <input name="image" value={this.state.post.imageUrl} type="text" />
                        <label>Comment (optional):</label>
                        <textarea name="description" value={this.state.post.description}></textarea>
                        <input id="btnEditPost" value="Edit Post" type="submit" />
                    </form>
                </div>
            </section>
        )
    }
}

export default Edit;