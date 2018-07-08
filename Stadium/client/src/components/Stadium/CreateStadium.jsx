import React, { Component } from 'react';
import Input from '../common/Input';
import { createStadium } from '../../api/remote';
import toastr from 'toastr';

export default class CreateStadium extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            location: '',
            description: '',
            seats: '',
            image: '',
            metroLine: '',
            createdOn: new Date(),
            reviews: [],
            error: ''
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onInputSubmit = this.onInputSubmit.bind(this);
    }

    onInputChange(ev) {
        this.setState({ [ev.target.name]: ev.target.value })
    }

    onInputSubmit(ev) {
        ev.preventDefault();

        let stadium = {
            name: this.state.name,
            location: this.state.location,
            description: this.state.description,
            seats: Number(this.state.seats),
            image: this.state.image,
            metroLine: Number(this.state.metroLine)
        }

        createStadium(stadium)
            .then(res => {
                if (res.success) {
                    toastr.success(res.message);
                    console.log(res.stadium);
                } else {
                    toastr.error(res.message);
                }
            })
    }

    render() {
        return (
            <div className="create-stadium-form">
                <div><h2>Create Stadium</h2></div>
                <form onSubmit={this.onInputSubmit} className="form-group">
                    <label htmlFor={"new-email"} >{this.label}</label>
                    <Input
                        className="form-control"
                        name="name"
                        label="Name"
                        onChange={this.onInputChange}
                        value={this.state.name} />
                    <Input
                        className="form-control"
                        name="location"
                        label="Location"
                        onChange={this.onInputChange}
                        value={this.state.location} />
                    <label>Description</label>
                    <textarea
                        className="form-control"
                        name="description"
                        onChange={this.onInputChange}
                        value={this.state.description}>
                    </textarea>
                    <Input
                        className="form-control"
                        name="image"
                        label="Image"
                        onChange={this.onInputChange}
                        value={this.state.image} />
                    <Input
                        className="form-control"
                        name="seats"
                        type="number"
                        label="Seats"
                        onChange={this.onInputChange}
                        value={this.state.seats} />
                    <Input
                        className="form-control"
                        name="metroLine"
                        type="number"
                        label="Metro Line"
                        onChange={this.onInputChange}
                        value={this.state.metroLine} />
                    <br />
                    <input type="submit" className="btn btn-primary" value="Create" />
                </form>
            </div>
        )
    }
}