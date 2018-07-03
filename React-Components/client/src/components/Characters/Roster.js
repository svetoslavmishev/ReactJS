import React from 'react';

export default class Roster extends React.Component {
    render = () => {
        return (
            <img src={this.props.image} key={this.props.key} alt="hero" onClick={this.props.getBio}/>
        )
    }
}

