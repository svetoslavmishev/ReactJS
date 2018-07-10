import React, { Component } from 'react';
import StadiumsList from '../Stadium/StadiumsList';
import { getPage, removeStadium } from '../../api/remote';

export default class StadiumPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stadiums: []
        }

        this.removeStadium = this.removeStadium.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        const res = await getPage(1);
        this.setState({ stadiums: res })
    }

     removeStadium(id) {
       removeStadium(id);
    }


    render() {
        return (
            <div className="welcome-box">
                <h1><b>FIFA Stadiums</b></h1>
                <StadiumsList stadiums={this.state.stadiums} removeStadium={this.removeStadium} />
                {/* TODO PAGINATION */}
            </div >
        );
    }
}