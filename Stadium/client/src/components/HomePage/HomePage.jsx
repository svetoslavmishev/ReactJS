import React, { Component } from 'react';

export default class HomePage extends Component {
    render() {
        return (
            <div className="welcome-box">
                <h1><b>Stadium Guide</b> </h1>
                <div>
                    <p>The Stadium Guide has been around for over a decade now and has grown from an obscure geocities page to one of the leading websites that cover the world of football stadiums.
                It has primarily been a one-man job, fuelled by a passion for football stadiums and worked on enthusiastically in the time left free by studies and work. Which also meant that when other responsibilities started to grow, it found itself with increasing lack of attention and large periods of inactivity.</p>
                    <img className="welcome-image" src={'https://i.ebayimg.com/images/i/131849350906-0-1/s-l1000.jpg'} alt="stadium" />
                </div>
            </div >
        );
    }
}