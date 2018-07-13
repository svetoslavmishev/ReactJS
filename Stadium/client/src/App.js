import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/common/Header';
import RegisterPage from './components/Auth/RegisterPage';
import LoginPage from './components/Auth/LoginPage';
import StadiumPage from './components/Stadium/StadiumPage';
import CreateStadium from './components/Stadium/CreateStadium';
import HomePage from './components/HomePage/HomePage';
import Details from './components/Stadium/Details';
import PrivateRoute from './components/common/PrivateRoute';
import PageNotFound from './components/PageNotFound/PageNotFound';
import AdminPanel from './components/Admin/AdminPanel';
import MyStadiums from './components/Users/MyStadiums';
import EditStadium from './components/Stadium/EditStadium';

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
                    <PrivateRoute path="/stadium/details/:id" component={Details} />
                    <Route path="/stadium/mystadiums" component={MyStadiums} />
                    <Route path="/stadium/edit/:id" component={EditStadium} />
                    <Route path="/admin" component={AdminPanel} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);