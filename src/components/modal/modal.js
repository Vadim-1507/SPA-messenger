import React from "react";
import logo from "../../media-src/logo.png";
import styles from "./modal.module.css";

function Modal () {
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
                            <input type="text" placeholder="Login..."/>
                        </label>
                    </div>

                    <div className={`${styles.field} ${styles.password}`}>
                        <label>
                            Password
                            <input type="password" placeholder="Password..."/>
                        </label>
                        <button style={{color: '#666666'}}><i className="fas fa-eye"/>
                            {/*<i class="fas fa-eye-slash"/>*/}
                        </button>
                    </div>
                    <div className={styles.error}><span>Error in login or password</span></div>
                    <button className={styles.btn_auth}>Enter</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
