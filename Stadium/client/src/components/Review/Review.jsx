import React from 'react';

const Review = (props) => {
        let date = new Date(props.createdOn);

        return (
                <ul className="media-list">
                        <li className="media">
                                <div className="media-body">
                                        <span className="text-muted pull-right">
                                                <small>commented
                                                        <strong class="text-success"> by {props.user}
                                                        </strong> {date.toLocaleString()}
                                                </small>
                                        </span>
                                        <p>
                                                <em>{props.comment}</em>
                                        </p>
                                </div>
                        </li>
                </ul>
        )
}

export default Review;

