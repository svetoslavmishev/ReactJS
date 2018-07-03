import React, { Component } from 'react';

export default class Details extends Component {
    render = () => (
        <section id="bio">
            <div className="image">
                <img src={this.props.url} alt="hero" />
            </div>
            <div className="info">
                <p>Name: <strong>{this.props.name}</strong></p>
                <p>Bio:</p>
                <p>{this.props.bio}</p>
            </div>
        </section>
    )
}