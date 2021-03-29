import React from "react";
import avatar from "../../../media-src/user.jfif"
import styles from "./incoming.module.css";
import {NavLink} from "react-router-dom";

function Incoming({state, messagesColor}) {
    const editor = state.edited ? 'visible' : 'hidden';

    let color;
    if (messagesColor === 'yellow') {
        color = styles.yellow;
    } else if (messagesColor === 'green') {
        color = styles.green;
    } else if (messagesColor === 'blue') {
        color = styles.blue;
    } else if (messagesColor === 'red') {
        color = styles.red;
    } else {
        color = undefined;
    }

    return (
        <div className={`${styles.incoming} ${color}`}>
            <div className={styles.info}>
                <div className={styles.avatar}>
                    <img src={state.sender.avatar || avatar} alt="avatar"/>
                </div>
                <div>
                    <div className={styles.name}><NavLink to={`/profile/${state.sender.userId}`}>{state.sender.name}</NavLink></div>
                    <div className={styles.time} style={{visibility: editor}}>edited</div>
                </div>
            </div>
            <div className={styles.message}>
                {state.message}
            </div>
        </div>

    );
}

export default Incoming;
