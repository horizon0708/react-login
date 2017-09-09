import axios from 'axios';


export function setRedirectUrl(url){
    return dispatch=> dispatch({type:"SAVE_URL", payload: url});
}

export function userLogin(user){
    return dispatch=>axios.post('/login', user)
    .then(response=>{
        localStorage.setItem('user_token', response.data.token);
        const logInMessage ={
            title: 'Hi there!',
            style: 'success',
            text : `${response.data.user.name ? response.data.user.name: null}, you have been successfully logged in!`
        }
        dispatch(pushFlashMessage(logInMessage));
        dispatch({type:"USER_LOGIN", payload: response.data});
    })
    .catch(err=>{
        dispatch({type: "USER_LOGIN_FAIL", payload: "USER LOGIN FAILED"});
    })
}

export function userSignup(user){
    return dispatch=>axios.post('/signup', user)
    .then(response=>{
        dispatch({type:"USER_SIGNUP", payload: response.data});
    })
    .catch(err=>{
        dispatch({type: "USER_SIGNUP_FAIL", payload: "USER SIGNUP FAILED"});
    })
}

export function userLogout(user){
    localStorage.removeItem('user_token');
    return dispatch=>dispatch({type: "USER_LOGOUT"});
}


export function pushFlashMessage(message){
    return dispatch=> {
        setTimeout(()=>dispatch(deleteFlashMessage()), 3000);
        dispatch({type:"PUSH_FLASH", payload: message});
    }
}

export function deleteFlashMessage(){
    return dispatch=> dispatch({type:"DELETE_FLASH"})
}