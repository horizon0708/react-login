"use strict"

//reducer
export function userAccReducer(state = {curUrl:'/'}, action) {
    switch (action.type) {
        case "SAVE_CURRENT_URL":
            return {...state, curUrl: action.payload};
        case "USER_LOGIN":
            return {...state, }
    }
    return state
}
