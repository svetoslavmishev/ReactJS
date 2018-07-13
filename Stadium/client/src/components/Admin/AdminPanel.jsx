import React, { Component } from 'react';
import { getStatistic, getAllUsers } from '../../api/remote';
import AdminRow from './AdminRow';
import Statistic from '../Users/Statistic';


export default class AdminPAnel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stadiums: '',
            count: '',
            users: []
        }
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        getStatistic()
            .then(stats => {
                getAllUsers()
                    .then(users => {
                        this.setState({
                            stadiums: stats.stadiums,
                            count: stats.users,
                            users: users.users
                        })
                    })
            })
    }

    render() {
        return (
            <div className="container">
                <h2>Site statistic</h2>
                <div className="container">
                    <Statistic count={this.state.count} stadiums={this.state.stadiums} />
                </div>
                <br />
                <h2>List of users</h2>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">id</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((user, index) => {
                            return <AdminRow key={user.id} id={user.id} name={user.name} email={user.email} index={++index} />
                        })}
                    </tbody>
                </table>
            </div >
        )
    }
}
