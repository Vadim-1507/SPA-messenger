import React from "react";
import logo from "../../media-src/logo.png";
import styles from "./modal.module.css";

function Modal({props, changeHandler, seePasswordHandler, authHandler}) {

    let disabled = false;
    if (props.login.length === 0 || props.password.length === 0) {
        disabled = true;
    }
    const error = props.error ? 'visible' : 'hidden';

    let type = props.see ? 'text' : 'password';
    let color = props.see ? '#1DA1F2' : '#666666';
    let icon = props.see ? <i className="fas fa-eye-slash"/> : <i className="fas fa-eye"/>;

    return (
        <div className={styles.wrapper}>
            <div className={styles.modal}>
                <div className={styles.logo}>
                    <img src={logo} alt="logo"/>
                    <span>Planctonics</span>
                </div>

                <div className={styles.form}>
                    <div className={styles.field}>
                        <label>
                            Login
                            <input type="text" placeholder="Login..." value={props.login}
                                   onChange={(e) => changeHandler(e, props.enterLogin)}/>
                        </label>
                    </div>

                    <div className={`${styles.field} ${styles.password}`}>
                        <label>
                            Password
                            <input type={type} placeholder="Password..." value={props.password}
                                   onChange={(e) => changeHandler(e, props.enterPassword)}/>

                        </label>
                        <button style={{color: color}} onClick={() => seePasswordHandler()}>{icon}
                            {/*<i class="fas fa-eye-slash"/>*/}
                        </button>
                    </div>
                    <div className={styles.error} style={{
                        visibility: error
                    }}><span>Error in login or password</span>
                    </div>
                    <button className={styles.btn_auth} disabled={disabled} onClick={() => authHandler()}>Enter</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
