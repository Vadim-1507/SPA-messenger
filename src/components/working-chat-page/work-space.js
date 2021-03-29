import React, {useEffect} from "react";
import Messenger from "../messenger/messenger";
import {
    getWorkMessages, textWorkMessage, sendWorkMessage, deleteWorkMessage,
    editWorkMessage, cancelWorkEdit, changeWorkMessage, setWorkMessages, setWorkColor
} from "../../redux/working-chat-reducer";
import {connect} from "react-redux";

function WorkSpace({
                       getWorkMessages, textWorkMessage, sendWorkMessage, deleteWorkMessage, editWorkMessage,
                       cancelWorkEdit, changeWorkMessage, setWorkMessages, setWorkColor, title, messages, messageText,
                       edit, editID, background, messageColor, id, name, avatar
                   }) {

    useEffect(() => {
        if (localStorage.getItem('workSpace') && localStorage.getItem('workSpace').length > 0) {
            setWorkMessages(JSON.parse(localStorage.getItem('workSpace')));
        } else {
            getWorkMessages();
        }
        setWorkColor(localStorage.getItem('workBack'), localStorage.getItem('workColor'));
    }, []);

    function messageHandler(e) {
        const text = e.target.value;
        textWorkMessage(text);
    }

    function clickHandler() {
        if (edit) {
            changeWorkMessage(editID);
        } else {
            sendWorkMessage({id, name, avatar, edit});
        }
        saveInfo()
    }

    function editHandler(id, data) {
        editWorkMessage(id, data);
    }

    function editCancel() {
        cancelWorkEdit();
    }

    function deleteHandler(id) {
        deleteWorkMessage(id);
        saveInfo();
    }

    function saveInfo() {
        localStorage.setItem('workSpace', JSON.stringify(messages))
    }

    return <Messenger title={title} messages={messages} messageHandler={messageHandler} edit={edit} MyId={id}
                      messageText={messageText} clickHandler={clickHandler} editHandler={editHandler}
                      editCancel={editCancel} deleteHandler={deleteHandler} background={background}
                      messagesColor={messageColor}/>
}

const mapStateToProps = state => ({
    title: state.workSpace.title,
    messages: state.workSpace.messages,
    messageText: state.workSpace.messageText,
    edit: state.workSpace.edit,
    editID: state.workSpace.editID,
    background: state.workSpace.background,
    messageColor: state.workSpace.messageColor,
    id: state.auth.id,
    name: state.auth.name,
    avatar: state.auth.avatar
});

export default connect(mapStateToProps, {
    getWorkMessages, textWorkMessage, sendWorkMessage, deleteWorkMessage,
    editWorkMessage, cancelWorkEdit, changeWorkMessage, setWorkMessages, setWorkColor
})(WorkSpace)
