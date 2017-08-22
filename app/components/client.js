import React from 'react';
import { render } from 'react-dom';
import Header from './header';

import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Login from './login';
import Profile from './profile';
import Signup from './signup';
import Main from './main';
import AuthContainer from './authContainer';

// Redux
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from '../reducers/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);

const Routes = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={Login} />
                <Route component={AuthContainer}>
                    <Route path="profile" component={Profile} />
                    
                </Route>
                <Route path="login" component={Login} />
                <Route path="signup" component={Signup} />

            </Route>
        </Router>
    </Provider>
)


render(Routes, document.getElementById('app'));
export default Routes