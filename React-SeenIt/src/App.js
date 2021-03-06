import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Menu from './components/common/Menu';
import Welcome from './components/Welcome';
import Notification from './components/common/Notification';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: ''
    }
  }

  componentDidMount() {
    if (sessionStorage.getItem('token')) {
      this.setState({ token: sessionStorage.getItem('token') });
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Notification />
          {this.state.token ? <Menu /> : <Welcome />}
          <Footer />
        </div>
      </BrowserRouter >
    )
  }
}

export default App;
