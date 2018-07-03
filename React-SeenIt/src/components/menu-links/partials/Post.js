import React from 'react';
import { Link } from 'react-router-dom';
import formatDate from '../../../utils/dateFormatting';

const Post = (props) => {   
    return (
        <article className="post">
            <div className="col rank">
                <span>{props.index + 1}</span>
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
                            <li className="action"><Link className="commentsLink" to={`/details/${props.data._id}`}>comments</Link></li>
                            <li className="action"><Link className="editLink" to={`/edit/${props.data._id}`}>edit</Link></li>
                            <li className="action"><Link className="deleteLink" to={`/deletepost/${props.data._id}`}>delete</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Post;