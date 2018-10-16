import React, { Component } from 'react';
import * as actionCreators from '../chat/actionCreators';
import store from '../chat/chatApp';

export default class MessageView extends Component {
  handleClick(index) {
    store.dispatch(actionCreators.deleteMessage(index));
  }

  render() {
    const messages = this.props.messages.map((message, index) => (
      <div
        className='comment'
        key={index}
      >
        {message}
        &emsp;
        <a href={null} >
          <span className="glyphicon glyphicon-trash" onClick={() => this.handleClick(index)}></span>
        </a>
      </div>
    ));

    return (
      <div className='ui comments' >
        {messages}
      </div>
    );
  }
}