import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Catalog from './Catalog';
import Submit from './Submit';
import MyPosts from './MyPosts';
import Details from './partials/Details';
import Edit from './partials/Edit';
import Welcome from '../Welcome';
import Logout from '../forms/Logout';

const MenuComponents = () => {
    return (
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/logout" component={Logout} />
            <Route path="/catalog" component={Catalog} />
            <Route path="/submit" component={Submit} />
            <Route path="/myposts" component={MyPosts} />
            <Route path="/details/:id" component={Details} />
            <Route path="/edit/:id" component={Edit} />
        </Switch>
    )
}

export default MenuComponents;
