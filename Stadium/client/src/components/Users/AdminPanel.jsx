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
