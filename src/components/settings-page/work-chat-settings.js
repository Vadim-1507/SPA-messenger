import React from "react";
import ChatSettings from "./chat-settings/chat-settings";
import {connect} from "react-redux";
import {changeWorkBackground, changeWorkMessageColor} from "../../redux/working-chat-reducer";

function WorkChatSettings({title, changeWorkBackground, changeWorkMessageColor}) {
    function backgroundHandler(color) {
        changeWorkBackground(color);
        localStorage.setItem('workBack', color);
    }

    function messageColorHandler(color) {
        changeWorkMessageColor(color);
        localStorage.setItem('workColor', color);
    }

    return <ChatSettings title={title} backgroundHandler={backgroundHandler} messageColorHandler={messageColorHandler}/>
}

const mapStateToProps = state => ({
    title: state.workSpace.title,
});

export default connect(mapStateToProps, {changeWorkBackground, changeWorkMessageColor})(WorkChatSettings);
