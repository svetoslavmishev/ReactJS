import React, { Component } from 'react';
import Input from '../common/Input';
import { getDetails, updateStadium } from '../../api/remote';
import toastr from 'toastr';

export default class EditStadium extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stadium: {}
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onInputSubmit = this.onInputSubmit.bind(this);
  }

  onInputChange(ev) {
    this.setState({ value: ev.target.value })
  }

  onInputSubmit(ev) {
    ev.preventDefault();

    let stadium = {
      name: this.state.value.name,
      location: this.state.value.location,
      description: this.state.value.description,
      seats: Number(this.state.value.seats),
      image: this.state.value.image,
      metroLine: Number(this.state.value.metroLine)
    }

    updateStadium(stadium)
      .then(res => {
        if (res.success) {
          toastr.success(res.message);
          this.props.history.push('/stadium/all');
        } else {
          toastr.error(res.message);
        }
      })
  }

  componentDidMount() {
    getDetails(this.props.match.params.id)
      .then(res => {
        console.log(res);
        this.setState({ value: res })
      })
  }

  render() {
    return (
      <div className="create-stadium-form">
        <div><h2>Edit Stadium</h2></div>
        <form onSubmit={this.onInputSubmit} className="form-group">
          <label htmlFor={"new-email"} >{this.label}</label>
          <Input
            className="form-control"
            name="name"
            label="Name"
            onChange={this.onInputChange}
            value={this.state.value.name} />
          <Input
            className="form-control"
            name="location"
            label="Location"
            onChange={this.onInputChange}
            value={this.state.value.location} />
          <label>Description</label>
          <textarea
            className="form-control"
            name="description"
            onChange={this.onInputChange}
            value={this.state.value.description}>
          </textarea>
          <Input
            className="form-control"
            name="image"
            label="Image"
            onChange={this.onInputChange}
            value={this.state.value.image} />
          <Input
            className="form-control"
            name="seats"
            type="number"
            label="Seats"
            onChange={this.onInputChange}
            value={this.state.value.seats} />
          <Input
            className="form-control"
            name="metroLine"
            type="number"
            label="Metro Line"
            onChange={this.onInputChange}
            value={this.state.value.metroLine} />
          <br />
          <input type="submit" className="btn btn-primary" value="Edit" />
        </form>
      </div>
    )
  }
}