import React, { Component } from 'react';
import * as actionCreators from '../chat/actionCreators';
import store from '../chat/chatApp';

export default class MessageInput extends Component {

  state = {
    isValid: true,
    value: ''
  }

  onInputChange(event) {
    if (event.target.value !== '') {
      this.setState({
        isValid: false,
        value: event.target.value
      });
    }
  }

  onBtnSubmit = () => {
    store.dispatch(actionCreators.addMessage(this.state.value));

    this.setState({
      isValid: true,
      value: ''
    });
  }

  render() {
    return (
      <div className='ui input'>
        <input
          onChange={this.onInputChange.bind(this)}
          value={this.state.value}
          type='text'
        />
        <button
          onClick={this.onBtnSubmit.bind(this)}
          className='ui primary button'
          type='submit'
          disabled={this.state.isValid}
        >
          Submit
        </button>
      </div>
    )
  }
}