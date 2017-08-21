import React from 'react';
import { render } from 'react-dom';
import Header from './header';

import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import Login from './login';
import Profile from './profile';
import Signup from './signup';
import Main from './main';

const Routes = (
      <Router history={browserHistory}>
          <Route path="/" component={Main}>
              <IndexRoute component={Login} />
              <Route path="/profile" component={Profile} />
          </Route>
      </Router>
)


render(Routes, document.getElementById('app'));
export default Routes