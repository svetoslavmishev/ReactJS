import React from 'react';

const Review = (props) => {
        let date = new Date(props.createdOn);

        return (
                <div className="container" key={props.id}>
                        <div className="row">
                                <div className="col-sm-8">
                                        <div className="panel panel-default" >
                                                <div className="panel-heading">
                                                        <strong>{props.user}</strong> <span className="text-muted">commented {date.toLocaleString()}</span>
                                                </div>
                                                <div className="panel-body">
                                                        <em>{props.comment}</em>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Review;


