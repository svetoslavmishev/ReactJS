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

  onInputChange = (propName) => (ev) => {
    const stadium = this.state.stadium;
    const newStadium = {
      ...stadium,
      [propName]: ev.target.value
    }

    this.setState({ stadium: newStadium });
  }

  onInputSubmit(ev) {
    ev.preventDefault();

    updateStadium(this.state.stadium, this.props.match.params.id)
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
        this.setState({ stadium: res })
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
            onChange={this.onInputChange('name')}
            value={this.state.stadium.name} />
          <Input
            className="form-control"
            name="location"
            label="Location"
            onChange={this.onInputChange('location')}
            value={this.state.stadium.location} />
          <label>Description</label>
          <textarea
            className="form-control"
            name="description"
            onChange={this.onInputChange('description')}
            value={this.state.stadium.description}>
          </textarea>
          <Input
            className="form-control"
            name="image"
            label="Image"
            onChange={this.onInputChange('image')}
            value={this.state.stadium.image} />
          <Input
            className="form-control"
            name="seats"
            type="number"
            label="Seats"
            onChange={this.onInputChange('seats')}
            value={this.state.stadium.seats} />
          <Input
            className="form-control"
            name="metroLine"
            type="number"
            label="Metro Line"
            onChange={this.onInputChange('metroLine')}
            value={this.state.stadium.metroLine} />
          <br />
          <input type="submit" className="btn btn-primary" value="Edit" />
        </form>
      </div>
    )
  }
}