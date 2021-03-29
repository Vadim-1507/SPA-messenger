import {authApi} from "../API-service/service";

const initialState = {
    id: null,
    token: '',
    isAuth: false,
    login: '',
    password: '',
    error: false,
    seePassword: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_AUTH_INFO":
            return {
                ...state,
                id: action.data.id,
                token: action.data.token,
                isAuth: true,
                error: false
            };
        case "ERROR_DATA":
            return {
                ...state,
                error: true
            };
        case "CHANGE_LOGIN":
            return {
                ...state,
                login: action.data,
            };
        case "CHANGE_PASSWORD":
            return {
                ...state,
                password: action.data,
            };
        case "SEE_PASSWORD":
            return {
                ...state,
                seePassword: !state.seePassword
            };
        case "LOG_OUT":
            return {
                ...state,
                id: null,
                token: '',
                isAuth: false,
                login: '',
                password: '',
                error: false,
                seePassword: false
            };
        default:
            return state;
    }
}

export const setAuthInfo = data => ({type: "SET_AUTH_INFO", data});
export const errorInData = () => ({type: "ERROR_DATA"});
export const enterLogin = data => ({type: "CHANGE_LOGIN", data});
export const enterPassword = data => ({type: "CHANGE_PASSWORD", data});
export const changeSeePassword = () => ({type: "SEE_PASSWORD"});
export const logOut = () => ({type: "LOG_OUT"});

export const getAuthInfo = () => dispatch => {
    authApi.getAuthInfo()
        .then(res => {
            dispatch(setAuthInfo(res));
            localStorage.setItem('token', res.token);
        });
}

export default authReducer;
