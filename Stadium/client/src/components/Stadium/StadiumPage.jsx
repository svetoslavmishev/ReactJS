import React, { Component } from 'react';
import StadiumsList from '../Stadium/StadiumsList';
import { getPage } from '../../api/remote';

export default class StadiumPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stadiums: []
        }
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        const res = await getPage(1);
        this.setState({ stadiums: res })
    }

    render() {
        return (
            <div className="welcome-box">
                <h1><b>FIFA Stadiums</b></h1>
                <StadiumsList stadiums={this.state.stadiums} />
                {/* TODO PAGINATION */}
            </div >
        );
    }
}