import React, { Component } from 'react';
import fetcher from '../../../utils/authFetcher';
import formatDate from '../../../utils/dateFormatting';
import { Link } from 'react-router-dom';

class Details extends Component {
    constructor() {
        super();

        this.state = {
            post: {},
            comments: []
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id;

        fetcher.getEditPost(id)
            .then(data => {
                this.setState({ post: data }, () => fetcher.getComments(id)
                    .then(data => {
                        this.setState({ comments: data });
                    }));
            })
    }

    render() {
        return (
            <section id="viewComments">
                <div className="post">
                    <div className="col thumbnail">
                        <a href="" >
                            <img src={this.state.post.imageUrl} alt="" />
                        </a>
                    </div>
                    <div className="post-content">
                        <div className="title">
                            <a href={this.state.post.url} >
                                {this.state.post.title}
                            </a>
                        </div>
                        <div className="details">
                            <p>{this.state.post.description}</p>
                            <div className="info">
                                submitted by {this.state.post.author}
                            </div>
                            <div className="controls">
                                <ul>
                                    <li className="action"><Link className="editLink" to="/edit/:id">edit</Link></li>
                                    <li className="action"><Link className="deleteLink" to="/delete/:id">delete</Link></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="post post-content">
                    <form id="commentForm">
                        <label>Comment</label>
                        <br />
                        <textarea name="content" type="text"></textarea>
                        <br />
                        <input value="Add Comment" id="btnPostComment" type="submit" />
                    </form>
                </div>

                {this.state.comments.map(comment => {
                    return <article className="post post-content" key={comment._id}>
                        <p>{comment.content}</p>
                        <div className="info">
                            submitted {formatDate(comment._kmd.lmt)} ago by {comment.author} | <Link href='/delete/:id' className="deleteLink">delete</Link>
                        </div>
                    </article>
                })}

            </section>
        )
    }
}

export default Details;