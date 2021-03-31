import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoginPage from '../views/Login';
import NewsPanel from '../views/NewsPanel';






export default function Routes() {
    return (
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route isPrivate exact path="/news" component={NewsPanel} />
      </Switch>
    )
};