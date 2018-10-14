import React, { Component } from 'react';

function createStore(reducer, initialState) {
  let state = initialState;
  const listeners = [];

  const getState = () => state;

  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(li => li());
  };

  const subscribe = listener => listeners.push(listener);

  return {
    getState,
    dispatch,
    subscribe
  };
}

function reducer(state, action) {
  if (action.type === 'ADD_MESSAGE') {
    return {
      messages: state.messages.concat(action.message)
    }
  } else if (action.type === 'DELETE_MESSAGE') {
    return {
      messages: [...state.messages.slice(0, action.index),
      ...state.messages.slice(action.index + 1, state.messages.length)]
    }
  }

  return state;
}

const initialState = { messages: [] };

//Initialize the store
const store = createStore(reducer, initialState);

class MessageView extends Component {
  handleClick(index) {
    store.dispatch({
      type: 'DELETE_MESSAGE',
      index
    });
  }

  render() {
    const messages = this.props.messages.map((message, index) => (
      <div
        className='comment'
        key={index}
        onClick={() => this.handleClick(index)}
      >
        {message}
      </div>
    ));

    return (
      <div className='ui comments' >
        {messages}
      </div>
    );
  }
}

class MessageInput extends Component {

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
    store.dispatch({
      type: 'ADD_MESSAGE',
      message: this.state.value
    });

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
