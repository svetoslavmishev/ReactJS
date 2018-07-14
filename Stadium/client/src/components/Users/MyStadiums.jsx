import React, { Component } from 'react';
import { getMyStadiums, removeStadium } from '../../api/remote';
import Stadium from '../Stadium/Stadium';
import toastr from 'toastr';

export default class MyStadiums extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stadiums: [],
            username: '',
            email: ''
        };
    }

    componentDidMount() {
        this.getData();
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
            });
    }

    render() {
        return (
            < div className="stadiums-box" >
                {this.state.stadiums.map(s => {
                    return <Stadium
                        allowUserDelete={s.creator === localStorage.getItem('userEmail')}
                        allowAdminDelete={localStorage.getItem('userEmail') === 'admin@admin.bg'}
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
