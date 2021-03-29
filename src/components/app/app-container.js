import React, {useEffect} from "react";
import {connect} from "react-redux";
import Modal from "../modal/modal";
import App from "./app";
import {enterLogin, enterPassword, changeSeePassword, getAuthInfo, errorInData}
    from "../../redux/auth-reducer";


function AppContainer(props) {

    useEffect(() => {
        if(localStorage.getItem('token') === 'qwerweretwe214'){
            props.getAuthInfo();
        }
    }, []);

    function authHandler() {
        if (props.login === 'user' && props.password === 'password') {
            props.getAuthInfo();
        } else {
            props.errorInData();
        }
    }

    function changeHandler(e, func) {
        const text = e.target.value;
        func(text);
    }

    function seePasswordHandler() {
        props.changeSeePassword()
    }

    return props.isAuth ? <App/> : <Modal props={props} changeHandler={changeHandler} authHandler={authHandler}
                                          seePasswordHandler={seePasswordHandler}/>
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    password: state.auth.password,
    error: state.auth.error,
    see: state.auth.seePassword,
    token: state.auth.token,
});

export default connect(mapStateToProps, {
    enterLogin, enterPassword, changeSeePassword,
    getAuthInfo, errorInData
})(AppContainer);
