import React, { Component } from 'react';
import StadiumsList from '../Stadium/StadiumsList';
import { getPage, removeStadium } from '../../api/remote';
import toastr from 'toastr';

export default class StadiumPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stadiums: []
        }

        this.deleteStadium = this.deleteStadium.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        const page = this.props.match.params.page || 1;
        const res = await getPage(page);
        this.setState({ stadiums: res });
    }

    async deleteStadium(id) {
        const res = await removeStadium(id);
        if (res.success) {
            toastr.success(res.message);
        }
        this.getData();
    }

    render() {
        return (
            <div className="welcome-box">
                <h1><b>FIFA Stadiums</b></h1>
                <StadiumsList
                    stadiums={this.state.stadiums}
                    deleteStadium={this.deleteStadium} />

                {/* TODO PAGINATION */}

            </div >
        );
    }
}