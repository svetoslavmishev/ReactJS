import React, { Component } from 'react';
import { createReview, getReviews } from '../../api/remote';
import Review from './Review';
import toastr from 'toastr';

export default class ReviewPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: '',
            reviews: []
        }

        this.onTextAreaChange = this.onTextAreaChange.bind(this);
        this.onTextAreaSubmit = this.onTextAreaSubmit.bind(this);
    }

    onTextAreaChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onTextAreaSubmit(e) {
        e.preventDefault();

        createReview(this.props.stadiumId, this.state.comment)
            .then(res => {
                this.setState({ comment: res.comment });
                toastr.success(res.message)

                this.setState((prevState) => {
                    prevState.reviews.push(res.reviews);
                    this.getData();
                });
            })

        this.setState({ comment: '' })

    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        getReviews(this.props.stadiumId)
            .then(res => {
                this.setState({ reviews: res })
            });
    }

    render() {
        return (
            <div className="details-box">
                <h4>Leave a review</h4>
                <form onSubmit={this.onTextAreaSubmit}>
                    <textarea
                        name="comment"
                        value={this.state.comment}
                        onChange={this.onTextAreaChange}
                        cols="38"
                        rows="3">
                    </textarea><br />
                    <input class="btn btn-primary" type="submit" value="Post" />
                </form>
                <br />
                {this.state.reviews.map((r, i) => {
                    return <Review key={i} comment={r.comment} user={r.user} createdOn={r.createdOn} />
                })}
            </div>
        )
    }
}