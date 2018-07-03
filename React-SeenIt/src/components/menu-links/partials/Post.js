import React from 'react';
import { Link } from 'react-router-dom';
import formatDate from '../../../utils/dateFormatting';

const Post = (props) => {
    return (
        <article className="post">
            <div className="col rank">
                <span></span>
            </div>
            <div className="col thumbnail">
                <a href={props.data.url}>
                    <img src={props.data.imageUrl} alt="" />
                </a>
            </div>
            <div className="post-content">
                <div className="title">
                    <a href={props.data.url}>
                        {props.data.title}
                    </a>
                </div>
                <div className="details">
                    <div className="info">
                        submitted {formatDate(props.data._kmd.lmt)} ago by {props.data.author}
                    </div>
                    <div className="controls">
                        <ul>
                            <li className="action"><Link className="commentsLink" to="#">comments</Link></li>
                            <li className="action"><Link className="editLink" to="#">edit</Link></li>
                            <li className="action"><Link className="deleteLink" to="#">delete</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
        </article>
    )
}

export default Post;