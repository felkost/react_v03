import axios from 'axios'
const API_URL_LOGIN = 'https://hbpromo-operations-app-csharp.azurewebsites.net/api/Promo_Http_GenerateToken';
const API_URL_REGISTER = 'https://hbpromo-operations-app-csharp.azurewebsites.net/api/Promo_Http_RegisterUser';

export function callAPI_Login(mail, password) {
    return function (dispatch) {
        dispatch({type: 'SUBMIT_SENDING'})
        var data = {username: mail, pswd: password}
        axios.post(API_URL_LOGIN, {}, {headers: data}).then(
                    (resp) => {
                          dispatch({type: 'SUBMIT_API_LOGIN_ANSWERED', payload: resp})
                      }).catch((resp) => {
                        dispatch({type: 'SUBMIT_API_LOGIN_ANSWERED', payload: resp.response})
                    });
    }
};

export function callAPI_Register(mail, password, fullname) {
    return function (dispatch) {
        dispatch({type: 'SUBMIT_SENDING'})
        var data = {username: mail, pswd: password, fullname: fullname}
        axios.post(API_URL_REGISTER, {}, {headers: data}).then(
                    (resp) => {
                          dispatch({type: 'SUBMIT_API_REGISTER_ANSWERED', payload: resp})
                      });
    }
};