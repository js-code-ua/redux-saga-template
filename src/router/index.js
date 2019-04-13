import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../utils/history';

export default class MainRouter extends Component {

    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" component={() => <h1>Hello Alex</h1>} />
                </Switch>
            </Router>
        );
    }
}