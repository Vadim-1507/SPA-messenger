import React from "react";
import styles from "./outgoing.module.css";

function Outgoing({state, index, editHandler, deleteHandler, messagesColor}) {
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
        <div className={`${styles.outgoing} ${color}`}>
            <div className={styles.btn}>
                <button onClick={() => editHandler(state.id, state.message)}><i className="fas fa-edit"/></button>
                <button onClick={() => deleteHandler(index)}><i className="fas fa-trash"/></button>
            </div>
            <div>
                <div className={styles.time} style={{visibility: editor}}>edited</div>
                <div className={styles.message}>
                    {state.message}
                </div>
            </div>
        </div>
    );
}

export default Outgoing;
