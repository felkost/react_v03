import { toast } from 'react-toastify';

var authReducer = (state = {}, action) => {
    //console.log(state)
    switch (action.type) {
        case 'SUBMIT_API_LOGIN_ANSWERED':
            if (action.payload.status === 200) {
                document.cookie = "AUTH_TOKEN=" + action.payload.data
                window.location.href="/"
            }
            else if (action.payload.status === 401){
                toast("wrong login and/or password", {type: 'error', position: 'top-right'})
            }
            else {
                console.log(action.payload)
                toast("server error. Please repeat later", {type: 'error', position: 'top-right'})
            }
            return state;
        case 'SUBMIT_API_REGISTER_ANSWERED':
        if (action.payload.status === 200) {
            toast("you are registered now and can log in", {
                type: 'success',
                position: 'top-center'
            })
        }
        else {
            console.log(action.payload)
            toast("something went wrong", {
                type: 'error',
                position: 'top-center'
            })
        }
        return state;
        case 'SUBMIT_FORM_INPUT':
            toast(action.msg, {type: 'error', position: 'top-right'})
        return state;
        default:
            return state;
    }
};

export default authReducer;