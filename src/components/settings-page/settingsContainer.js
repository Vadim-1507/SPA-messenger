import React, {useEffect} from "react";
import Settings from "./settings";
import {connect} from "react-redux";
import {
    getProfile, changeAvatar, changeName, changeStatus, changePhoneNum, changeEmail, changePost, changeWebsite,
    changeGithub, changeVK, changeFacebook, changeInstagram, changeTwitter, changeYoutube
} from "../../redux/profile-reducer";


function SettingsContainer(props) {
    const {profile, myId, getProfile} = props;

    useEffect(() => {
        getProfile(myId);
    }, []);

    function changeHandler(e, func) {
        const text = e.target.value;
        func(text)
    }

    function saveChangeProfile () {
        localStorage.setItem('myProfile', JSON.stringify(profile));
    }

    return <Settings props={props} state={profile} changeHandler={changeHandler} saveChangeProfile={saveChangeProfile}/>
}

const mapStateToProps = state => ({
    profile: state.profile.profile,
    myId: state.auth.id
});

export default connect(mapStateToProps, {
    getProfile, changeAvatar, changeName, changeStatus, changePhoneNum, changeEmail, changePost, changeWebsite,
    changeGithub, changeVK, changeFacebook, changeInstagram, changeTwitter, changeYoutube
})(SettingsContainer);
