import React, { Component } from 'react';
import { getStatistic, getAllUsers, removeUser } from '../../api/remote';
import AdminRow from './AdminRow';
import Statistic from '../Users/Statistic';
import toastr from 'toastr';

export default class AdminPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stadiums: '',
            count: '',
            users: []
        }

        this.deleteUser = this.deleteUser.bind(this);
    }

    componentDidMount() {
        this.getDataStatistic();
        this.getDataTable();
    }

    async getDataStatistic() {
        getStatistic()
            .then(stats => {
                this.setState({
                    stadiums: stats.stadiums,
                    count: stats.users
                })
            })
    }

    async getDataTable() {
        getAllUsers()
            .then(res => {
                this.setState({
                    users: res
                });
            });
    }

    async deleteUser(user) {
        const res = await removeUser(user);
        if (res.success) {
            toastr.success(res.message);
        }

        this.setState({
            users: res.records,
            count: res.records.length
        });
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
                            <th scope="col">userID</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(user => {
                            return <AdminRow
                                isAdmin={user.email !== 'admin@admin.bg'}
                                deleteUser={() => this.deleteUser(user)}
                                key={user.id}
                                id={user.id}
                                name={user.name}
                                email={user.email}
                            />
                        })}
                    </tbody>
                </table>
            </div >
        )
    }
}
