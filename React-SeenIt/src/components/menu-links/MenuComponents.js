import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Catalog from './Catalog';
import Submit from './Submit';
import MyPosts from './MyPosts';

const MenuComponents = () => {
    return (
        <Switch>
            <Route exact path="/" component={Catalog} />
            <Route path="/catalog" component={Catalog} />
            <Route path="/submit" component={Submit} />
            <Route path="/myposts" component={MyPosts} />
        </Switch>
    )
}

export default MenuComponents;
