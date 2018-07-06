import React, { Component } from 'react';
import LoginForm from './components/LoginForm.js';
import SignUpForm from './components/SignUpForm.js';
import PokemonForm from './components/LoggedIn/PokemonForm.js';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      switch: 'signup',
      username: '',
      token: ''
    }

    this.changeSwitchState = this.changeSwitchState.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.displayPages = this.displayPages.bind(this);
    this.logout = this.logout.bind(this);
  }

  changeSwitchState() {
    if (this.state.switch === 'login') {
      this.setState({ switch: 'signup' })
    } else if (this.state.switch === 'signup') {
      this.setState({ switch: 'login' })
    } else if (localStorage.getItem('token') !== undefined && this.state.switch === 'loggedIn') {
      this.setState({ switch: 'loggedIn' })
    }
  }

  authenticate(data) {
    if (data.success && data.token !== undefined) {
      this.setState({
        switch: 'loggedIn',
        username: data.user.name,
        token: data.token
      })

      localStorage.setItem('token', data.token);
    }
  }

  logout() {
    localStorage.clear();
    this.setState({
      switch: 'signup',
      username: '',
      token: ''
    })
  }

  displayPages() {
    if (this.state.switch === 'login') {
      return <LoginForm authenticate={this.authenticate} changeSwitchState={this.changeSwitchState} />
    } else if (this.state.switch === 'signup') {
      return <SignUpForm changeSwitchState={this.changeSwitchState} />
    } else if (localStorage.getItem('token') !== undefined && this.state.switch === 'loggedIn') {
      return (
        <div>
          <div>
            <button type="submit" onClick={this.logout} className="btn btn-secondary">Logout</button>
          </div>
          <PokemonForm />
        </div>
      )
    }
  }

  render() {
    return (
      <div className="App">
        {this.displayPages()}
      </div>
    );
  }
}

export default App;
