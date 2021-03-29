import {freeSpaceApi} from "../API-service/service";

const initialState = {
    title: 'Free',
    messages: [],
    edit: false,
    editID: null,
    messageText: '',
    background: null,
    messageColor: null,
};

const freeSpaceReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FREE_MESSAGES':
            return {
                ...state,
                messages: action.data
            };
        case 'TEXT_FREE_MESSAGE':
            return {
                ...state,
                messageText: action.data
            };
        case 'SEND_FREE_MESSAGE':
            const newMessage = {
                id: state.messages.length + 2,
                sender: {
                    userId: action.data,
                },
                edited: false,
                message: state.messageText
            }
            return {
                ...state,
                messages: [
                    ...state.messages,
                    newMessage
                ],
                edit: false,
                messageText: ''
            };
        case 'CHANGED_FREE_MESSAGE':
            return {
                ...state,
                messages: state.messages.map(item => {
                    if (item.id === action.data) {
                        return {...item, edited: true, message: state.messageText}
                    }
                    return item;
                }),
                edit: false,
                messageText: ''
            };
        case 'EDITED_FREE':
            return {
                ...state,
                edit: true,
                editID: action.id,
                messageText: action.data
            };
        case 'EDITED_CANCEL_FREE':
            return {
                ...state,
                edit: false,
                editID: null,
                messageText: ''
            };
        case 'DELETE_FREE_MESSAGE':
            return {
                ...state,
                messages: [
                    ...state.messages.slice(0, action.data),
                    ...state.messages.slice(action.data + 1)
                ]
            };
        case 'BACKGROUND_FREE_CHANGE':
            return {
                ...state,
                background: action.data
            };
        case 'MESSAGE_COLOR_FREE_CHANGE':
            return {
                ...state,
                messageColor: action.data
            };
        case 'SET_FREE_COLOR':
            return {
                ...state,
                background: action.background,
                messageColor: action.color
            };
        default:
            return state;
    }
}

export const setFreeMessages = data => ({type: 'SET_FREE_MESSAGES', data});
export const textFreeMessage = data => ({type: 'TEXT_FREE_MESSAGE', data});
export const sendFreeMessage = data => ({type: 'SEND_FREE_MESSAGE', data});
export const changeFreeMessage = data => ({type: 'CHANGED_FREE_MESSAGE', data});
export const editFreeMessage = (id, data) => ({type: 'EDITED_FREE', id, data});
export const cancelFreeEdit = () => ({type: 'EDITED_CANCEL_FREE'});
export const deleteFreeMessage = data => ({type: 'DELETE_FREE_MESSAGE', data});
export const setFreeColor = (background, color) => ({type: 'SET_FREE_COLOR', background, color});
export const changeFreeBackground = data => ({type: 'BACKGROUND_FREE_CHANGE', data});
export const changeFreeMessageColor = data => ({type: 'MESSAGE_COLOR_FREE_CHANGE', data});

export const getFreeMessages = () => (dispatch) => {
    freeSpaceApi.getMessage()
        .then(res => {
            dispatch(setFreeMessages(res));
        })
}

export default freeSpaceReducer;
