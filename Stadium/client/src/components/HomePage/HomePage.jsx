import React, { Component } from 'react';
import Carousel from './Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class HomePage extends Component {
    render() {
        return (
            <div className="welcome-box">
                <h1><b>Stadium Guide</b> </h1>
                <div>
                    <p>The Stadium Guide has been around for over a decade now and has grown from an obscure geocities
                        page to one of the leading websites that cover the world of football stadiums.</p>
                </div>
                <Carousel />
            </div >
        );
    }
}