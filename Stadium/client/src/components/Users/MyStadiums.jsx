import React, { Component } from 'react';
import { getMyStadiums, removeStadium } from '../../api/remote';
import Stadium from '../Stadium/Stadium';
import Profile from './Profile';
import toastr from 'toastr';

export default class MyStadiums extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stadiums: [],
            username: '',
            email: ''
        }

    }

    componentDidMount() {
        this.getData();
    }

    async getUserData() {
        //TODO STATISTIKA ZA LOGNAT USER V PRIFILA

    }

    async deleteStadium(id) {
        const res = await removeStadium(id);
        if (res.success) {
            toastr.success(res.message);
        }
        this.getData();
    }

    getData() {
        getMyStadiums()
            .then(res => {
                this.setState({ stadiums: res })
            })
    }

    render() {
        return (
            < div className="stadiums-list" >
                <Profile username={this.state.username} email={this.state.email} />
                {this.state.stadiums.map(s => {
                    return <Stadium
                        allowDelete={s.creator === localStorage.getItem('userEmail')}
                        remove={() => this.deleteStadium(s.id)}
                        key={s.id}
                        id={s.id}
                        name={s.name}
                        location={s.location}
                        seats={s.seats}
                        image={s.image} />
                })}
            </div >
        )
    }
}
