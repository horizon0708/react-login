import axios from 'axios';

export function setRedirectUrl(){
    return dispatch=>axios.get('/')
}

export function userLogin(user){
    return dispatch=>axios.post('/login', user)
    .then(response=>{
        dispatch({type:"USER_LOGIN", payload: response.data});
    })
    .catch(err=>{
        dispatch({type: "USER_LOGIN_FAIL", payload: "USER LOGIN FAILED"});
    })
}

export function userSignup(user){
    console.log(user);
    return dispatch=>axios.post('/signup', user)
    .then(response=>{
        dispatch({type:"USER_SIGNUP", payload: response.data});
    })
    .catch(err=>{
        dispatch({type: "USER_SIGNUP_FAIL", payload: "USER SIGNUP FAILED"});
    })
}