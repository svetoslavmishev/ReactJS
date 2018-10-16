import React, { Component } from 'react';
import store from './chat/chatApp';

import MessageView from './components/MessageView';
import MessageInput from './components/MessageInput';


export default class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  render() {
    const messages = store.getState().messages;

    return (
      <div className='ui segment'>
        <MessageView messages={messages} />
        <MessageInput />
      </div>
    );
  }
}
