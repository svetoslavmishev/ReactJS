import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/common/Header';
import RegisterPage from './components/Auth/RegisterPage';
import LoginPage from './components/Auth/LoginPage';
import StadiumPage from './components/Stadium/StadiumPage';
import CreateStadium from './components/Stadium/CreateStadium';
import HomePage from './components/HomePage/HomePage';
import Details from './components/Stadium/Details';
import Profile from './components/Users/Profile';
import AdminPAnel from './components/Users/AdminPanel';

class App extends Component {
    constructor(props) {
        super(props);

        this.onLogout = this.onLogout.bind(this);
    }

    onLogout() {
        localStorage.clear();
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="App">
                <Header loggedIn={localStorage.getItem('token') != null} onLogout={this.onLogout} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/create" component={CreateStadium} />
                    <Route path="/stadium/all" component={StadiumPage} />
                    <Route path="/stadium/details/:id" component={Details} />
                    <Route path="/mystadium" component={Details} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/admin" component={AdminPAnel} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);