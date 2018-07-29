import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { getDetails } from '../../api/remote';
import ReviewPage from '../Review/ReviewPage';

export default class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stadium: ''
        }
    }

    componentDidMount() {
        getDetails(Number(this.props.match.params.id))
            .then(res => {
                this.setState({ stadium: res })
            })
    }

    render() {
        return (
            <div class="card w-75">
                <div class="card-body">
                    <h4 class="card-title"><b>{this.state.stadium.name}</b></h4>
                    <p>Location:<b>{this.state.stadium.location}</b> | Capacity:<b>{this.state.stadium.seats}</b> seats</p>
                    <div>
                        <img className="stadium-img" src={this.state.stadium.image} alt="stadium img" />
                    </div>
                    <p><b>Description: </b>{this.state.stadium.description}</p>
                    <p>Metro Line to stadium:<b>{this.state.stadium.metroLine}</b></p>

                    <ReviewPage stadiumId={this.props.match.params.id} />
                </div>
            </div>
        )
    }
}