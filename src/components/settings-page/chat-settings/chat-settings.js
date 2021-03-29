import React from "react";
import styles from "./chat-settings.module.css";
import nature from "../../../media-src/nature.jpg"
import town from "../../../media-src/town.jpg"
import night from "../../../media-src/night.png"

function ChatSettings({title, backgroundHandler, messageColorHandler}) {
    return (
        <div className="chat_settings working">
            <h3>{title} chat room Settings</h3>

            <div className={styles.background_chat}>
                <span>Background style:</span>
                <button className={styles.classic} onClick={() => backgroundHandler(null)}/>
                <button onClick={() => backgroundHandler('nature')}>
                    <img src={nature} alt="nature"/>
                </button>
                <button onClick={() => backgroundHandler('town')}>
                    <img src={town} alt="town"/>
                </button>
                <button onClick={() => backgroundHandler('night')}>
                    <img src={night} alt="night"/>
                </button>
            </div>

            <div className={styles.message_background}>
                <span> Messages color:</span>
                <button className={styles.pale_blue} onClick={() => messageColorHandler(null)}/>
                <button className={styles.green} onClick={() => messageColorHandler('green')}/>
                <button className={styles.blue} onClick={() => messageColorHandler('blue')}/>
                <button className={styles.yellow} onClick={() => messageColorHandler('yellow')}/>
                <button className={styles.red} onClick={() => messageColorHandler('red')}/>
            </div>
        </div>
    );
}

export default ChatSettings;
