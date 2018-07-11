import React, { Component } from 'react';
import { getStatistic } from '../../api/remote';

export default class AdminPAnel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stadiums: '',
            users: ''
        }
    }

    componentDidMount() {
        getStatistic()
            .then(res => {
                this.setState({
                    stadiums: res.stadiums,
                    users: res.users
                })
            })
    }

    render() {
        return (
            <div className="table table-hover">
                {/* <h2>Lists of users</h2>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table> */}
                <div className="container">
                    <div className="row">
                        <div className="information-box">
                            <div className="information-left">
                                <span><strong>Users:</strong></span>
                                <span>{this.state.users}</span>
                            </div>
                            <div className="information-middle">
                                <span><strong>Stadiums:</strong></span>
                                <span>{this.state.stadiums}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
