"use strict"

//reducer
export function userAccReducer(state = {curUrl:'/about', isLoggedIn: false}, action) {
    switch (action.type) {
        case "SAVE_URL":
            return {...state, curUrl: action.payload};
        case "USER_LOGIN":
            return {...state, isLoggedIn: true, user: action.payload.user};
        case "PUSH_FLASH":
            return {...state, flashMessage: action.payload};
        case "DELETE_FLASH":
            return {...state, flashMessage: null}
        case "USER_LOGOUT":
            return {...state, isLoggedIn: false, user: null}
        case "USER_SIGNUP":
            return {...state, isLoggedIn: true, user: action.payload.user}
    }
    return state
}
