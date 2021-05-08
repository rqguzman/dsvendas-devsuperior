import React from 'react';
import Home from 'pages/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from 'pages/Dashboard/Dashboard';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path='/dashboard'>
                    <Dashboard />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;