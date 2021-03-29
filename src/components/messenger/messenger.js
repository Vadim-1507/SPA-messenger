import React, {useEffect, useRef} from "react";
import styles from "./messenger.module.css";
import Incoming from "./incoming/incoming";
import Outgoing from "./outgoing/outgoing";

function Messenger({
                       title, messages, edit, messageText, MyId, messageHandler, clickHandler, editHandler, editCancel,
                       deleteHandler, background, messagesColor
                   }) {
    const editor = edit ? 'visible' : 'hidden';
    const disable = messageText ? false : true;

    const scroll = useRef(null);
    useEffect(() => {
        scroll.current.scrollTop = scroll.current.scrollHeight;
    })

    return (
        <div className={`content ${background}`}>
            <h3 className="title">{title} chat room</h3>

            <div className={`${styles.chat} scrolling`} ref={scroll}>
                {
                    messages.map((item, i) => {
                        if (item.sender.userId === MyId) {
                            return <Outgoing key={item.id} index={i} state={item} editHandler={editHandler}
                                             deleteHandler={deleteHandler} messagesColor={messagesColor}/>
                        } else {
                            return <Incoming key={item.id} state={item} messagesColor={messagesColor}/>
                        }
                    })
                }
            </div>

            <div className={styles.new_message}>
                <span style={{visibility: editor}}>Edit Message</span>
                <button style={{visibility: editor}} onClick={() => editCancel()}><i className="fas fa-times"/></button>
                <div className={styles.field}>
                    <textarea placeholder="message..." value={messageText} onChange={e => messageHandler(e)}/>
                    <button onClick={() => clickHandler()} disabled={disable}><i className="fas fa-paper-plane"/>
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Messenger;
