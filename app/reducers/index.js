"use strict"

import {combineReducers} from 'redux';
import {userAccReducer} from './userAccReducer';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
    userAcc: userAccReducer,
    routing: routerReducer
});