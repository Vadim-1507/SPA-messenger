import React from "react";
import Header from "../header/header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import ProfileContainerWithRouter from "../profile-page/profileContainer";
import SettingsContainer from "../settings-page/settingsContainer";
import FreeSpace from "../free-chat-page/free-space";
import WorkSpace from "../working-chat-page/work-space";
import Modal from "../modal/modal";
import "./app.css";


function App() {
    return (
        <Router>
            <Header/>
            <div className="container">
                <Route path={'/profile/:id?'} render={() => <ProfileContainerWithRouter/>}/>
                <Route exact path={'/'} render={() => <WorkSpace/>}/>
                <Route path={'/free-space'} render={() => <FreeSpace/>}/>
                <Route path={'/settings'} render={() => <SettingsContainer/>}/>
                <Route path={'/auth'} render={() => <Modal/>}/>
            </div>
        </Router>
    );
}

export default App;
