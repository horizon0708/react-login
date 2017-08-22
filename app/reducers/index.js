"use strict"

import {combineReducers} from 'redux';
import {userAccReducer} from './userAccReducer';

export default combineReducers({
    userAcc: userAccReducer,
});