import React from "react";
import logo from "../../media-src/logo.png";
import styles from "./header.module.css";
import {NavLink} from "react-router-dom";


function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={logo} alt="logo"/>
                    <span>Planctonics</span>
                </div>

                <div className={styles.menu}>
                    <div className={styles.menu_item}>
                        <NavLink to={'/profile'} activeClassName={styles.active}>Profile</NavLink>
                    </div>
                    <div className={styles.menu_item} >
                        <NavLink exact to={'/'} activeClassName={styles.active}>Working <span>chat room</span></NavLink>
                    </div>
                    <div className={styles.menu_item} >
                        <NavLink to={'/free-space'} activeClassName={styles.active} >Free <span>chat room</span></NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
