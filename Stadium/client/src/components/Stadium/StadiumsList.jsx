import React, { Component } from 'react';
import Stadium from './Stadium';

export default class StadiumsList extends Component {
    render() {
        return (
            <div className="stadiums-list">
                {this.props.stadiums.map(s => {
                    return <Stadium
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

