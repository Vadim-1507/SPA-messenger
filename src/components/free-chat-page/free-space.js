import React, {useEffect} from "react";
import Messenger from "../messenger/messenger";
import {
    cancelFreeEdit, editFreeMessage, getFreeMessages, sendFreeMessage, textFreeMessage, changeFreeMessage,
    deleteFreeMessage, setFreeMessages, setFreeColor
} from "../../redux/free-chat-reducer";
import {connect} from "react-redux";

function FreeSpace({
                       getFreeMessages, sendFreeMessage, textFreeMessage, title, messages, messageText, edit, id,
                       editFreeMessage, cancelFreeEdit, changeFreeMessage, deleteFreeMessage, editID,
                       setFreeMessages, background, messageColor, setFreeColor
                   }) {

    useEffect(() => {
        if (localStorage.getItem('freeSpace') && localStorage.getItem('freeSpace').length > 0) {
            setFreeMessages(JSON.parse(localStorage.getItem('freeSpace')));
        } else {
            getFreeMessages();
        }
        setFreeColor(localStorage.getItem('freeBack'), localStorage.getItem('freeColor'));
    }, []);

    function messageHandler(e) {
        const text = e.target.value;
        textFreeMessage(text);
    }

    function clickHandler() {
        if (edit) {
            changeFreeMessage(editID);
        } else {
            sendFreeMessage(id);
        }
        saveInfo()
    }

    function editHandler(id, data) {
        editFreeMessage(id, data);
    }

    function editCancel() {
        cancelFreeEdit();
    }

    function deleteHandler(id) {
        deleteFreeMessage(id);
        saveInfo();
    }

    function saveInfo() {
        localStorage.setItem('freeSpace', JSON.stringify(messages))
    }

    return <Messenger title={title} messages={messages} messageHandler={messageHandler} edit={edit} MyId={id}
                      messageText={messageText} clickHandler={clickHandler} editHandler={editHandler}
                      editCancel={editCancel} deleteHandler={deleteHandler} background={background}
                      messagesColor={messageColor}/>
}

const mapStateToProps = state => ({
    title: state.freeSpace.title,
    messages: state.freeSpace.messages,
    messageText: state.freeSpace.messageText,
    edit: state.freeSpace.edit,
    editID: state.freeSpace.editID,
    background: state.freeSpace.background,
    messageColor: state.freeSpace.messageColor,
    id: state.auth.id,
});

export default connect(mapStateToProps, {
    getFreeMessages, textFreeMessage, sendFreeMessage, deleteFreeMessage,
    editFreeMessage, cancelFreeEdit, changeFreeMessage, setFreeMessages, setFreeColor
})(FreeSpace)
