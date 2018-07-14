import React, { Component } from 'react';
import Stadium from './Stadium';

export default class StadiumsList extends Component {
    render() {
        return (
            <div className="stadiums-list">
                {this.props.stadiums.map(s => {
                    return <Stadium
                        allowUserDelete={s.creator === localStorage.getItem('userEmail')}
                        allowAdminDelete={localStorage.getItem('userEmail') === 'admin@admin.bg'}
                        remove={() => this.props.deleteStadium(s.id)}
                        key={s.id}
                        id={s.id}
                        name={s.name}
                        location={s.location}
                        seats={s.seats}
                        image={s.image} />
                })}
            </div>
        )
    }
}

