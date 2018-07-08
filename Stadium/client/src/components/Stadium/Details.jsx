import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getDetails } from '../../api/remote';
import Review from '../Review/Reviev';

export default class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stadium: false
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
            <div className="details-box">
                <h4><b>{this.state.stadium.name}</b></h4>
                <p>Location:{this.state.stadium.location} | Capacity:{this.state.stadium.seats}</p>
                <div>
                    <img className="stadium-img" src={this.state.stadium.image} alt="stadium img" />
                </div>
                <p>Description:{this.state.stadium.description}</p>
                <p>Metro Line to stadium: <b>{this.state.stadium.metroLine} </b></p>

                {/* IF USER IS ADMIN EDIT AND DELETE BUTTONS ARE ACTIVE  */}
                {/* <p><Link className="btn btn-primary" to="/" >Edit</Link> <Link className="btn btn-primary" to="/" >Delete</Link></p>     */}


                <Review />
            </div >
        )
    }
}