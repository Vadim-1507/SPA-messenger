import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux/store";
import {Provider} from "react-redux";
import AppContainer from "./components/app/app-container";
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
