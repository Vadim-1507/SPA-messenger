import {applyMiddleware, combineReducers, createStore} from "redux";
import ReduxThunk from 'redux-thunk';
import freeSpaceReducer from "./free-chat-reducer";
import authReducer from "./auth-reducer";
import workingSpaceReducer from "./working-chat-reducer";
import ProfileReducer from "./profile-reducer";

const reducers = combineReducers({
    auth: authReducer,
    freeSpace: freeSpaceReducer,
    workSpace: workingSpaceReducer,
    profile: ProfileReducer
});

const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default store;
