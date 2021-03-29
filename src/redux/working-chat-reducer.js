import {workSpaceApi} from "../API-service/service";

const initialState = {
    title: 'Working',
    messages: [],
    edit: false,
    editID: null,
    messageText: '',
    background: null,
    messageColor: null,
};

const workingSpaceReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_WORK_MESSAGES':
            return {
                ...state,
                messages: action.data
            };
        case 'TEXT_WORK_MESSAGE':
            return {
                ...state,
                messageText: action.data
            };
        case 'SEND_WORK_MESSAGE':
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
        case 'CHANGED_WORK_MESSAGE':
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
        case 'EDITED_WORK':
            return {
                ...state,
                edit: true,
                editID: action.id,
                messageText: action.data
            };
        case 'EDITED_CANCEL_WORK':
            return {
                ...state,
                edit: false,
                editID: null,
                messageText: ''
            };
        case 'DELETE_WORK_MESSAGE':
            return {
                ...state,
                messages: [
                    ...state.messages.slice(0, action.data),
                    ...state.messages.slice(action.data + 1)
                ]
            };
        case 'BACKGROUND_WORK_CHANGE':
            return {
                ...state,
                background: action.data
            };
        case 'MESSAGE_COLOR_WORK_CHANGE':
            return {
                ...state,
                messageColor: action.data
            };
        case 'SET_WORK_COLOR':
            return {
                ...state,
                background: action.background,
                messageColor: action.color
            };
        default:
            return state;
    }
}

export const setWorkMessages = data => ({type: 'SET_WORK_MESSAGES', data});
export const textWorkMessage = data => ({type: 'TEXT_WORK_MESSAGE', data});
export const sendWorkMessage = data => ({type: 'SEND_WORK_MESSAGE', data});
export const changeWorkMessage = data => ({type: 'CHANGED_WORK_MESSAGE', data});
export const editWorkMessage = (id, data) => ({type: 'EDITED_WORK', id, data});
export const cancelWorkEdit = () => ({type: 'EDITED_CANCEL_WORK'});
export const deleteWorkMessage = data => ({type: 'DELETE_WORK_MESSAGE', data});
export const setWorkColor = (background, color) => ({type: 'SET_WORK_COLOR', background, color});
export const changeWorkBackground = data => ({type: 'BACKGROUND_WORK_CHANGE', data});
export const changeWorkMessageColor = data => ({type: 'MESSAGE_COLOR_WORK_CHANGE', data});

export const getWorkMessages = () => (dispatch) => {
    workSpaceApi.getMessage()
        .then(res => {
            dispatch(setWorkMessages(res));
        })
}

export default workingSpaceReducer;
