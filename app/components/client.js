import React from 'react';
import { render } from 'react-dom';
import Header from './header';

import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Login from './login';
import Profile from './profile';
import Signup from './signup';
import Main from './main';
import AuthContainer from './authContainer';
import Logout from './logout';
import About from './about';

// Redux
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from '../reducers/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import {syncHistoryWithStore, courterReducer} from 'react-router-redux';

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);
const history = syncHistoryWithStore(browserHistory, store)

const Routes = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Main}>
                <IndexRoute component={Login} />
                <Route component={AuthContainer}>
                    <Route path="profile" component={Profile} />
                    
                </Route>
                <Route path="logout" component={Logout} />
                <Route path="signup" component={Signup} />
                <Route path="login" component={Login} />
                <Route path="about" component={About} />
            </Route>
        </Router>
    </Provider>
)


render(Routes, document.getElementById('app'));
export default Routes;