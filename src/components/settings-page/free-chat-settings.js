import React from "react";
import ChatSettings from "./chat-settings/chat-settings";
import {connect} from "react-redux";
import {changeFreeBackground, changeFreeMessageColor} from "../../redux/free-chat-reducer";

function FreeChatSettings({title, changeFreeBackground, changeFreeMessageColor}) {
    function backgroundHandler(color) {
        changeFreeBackground(color);
        localStorage.setItem('freeBack', color);
    }

    function messageColorHandler(color) {
        changeFreeMessageColor(color);
        localStorage.setItem('freeColor', color);
    }

    return <ChatSettings title={title} backgroundHandler={backgroundHandler} messageColorHandler={messageColorHandler}/>
}

const mapStateToProps = state => ({
    title: state.freeSpace.title,
});

export default connect(mapStateToProps, {changeFreeBackground, changeFreeMessageColor})(FreeChatSettings);
