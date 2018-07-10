import React from 'react';

const Review = ({ user, comment, createdOn }) => {

        let date = new Date(createdOn);

        // return (
        //         < article className="article-box" >
        //                 <header>posted by <b>{user} - {date.toLocaleString()}</b></header>
        //                 <p>{comment}</p>
        //         </article >
        // )

        return (
                <div className="container">
                        <div className="row">
                                <div className="col-sm-5">
                                        <div className="panel panel-default">
                                                <div className="panel-heading">
                                                        <strong>{user}</strong> <span className="text-muted">commented {date.toLocaleString()}</span>
                                                </div>
                                                <div className="panel-body">
                                                        {comment}
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Review;


