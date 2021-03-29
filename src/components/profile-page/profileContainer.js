import React, {useEffect} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Profile from "./profile";
import {getProfile, setProfile} from "../../redux/profile-reducer";

function ProfileContainer(props) {
       useEffect(() => {
        let id = props.match.params.id;
        if (!id || id == props.myId && localStorage.getItem('myProfile')) {
            props.setProfile(JSON.parse(localStorage.getItem('myProfile')))
        } else {
            props.getProfile(id);
        }
    }, []);

       const myProfile = (!props.match.params.id || props.match.params.id == props.myId);

    return <Profile state={props.profile} myProfile={myProfile}/>
}

const mapStateToProps = state => ({
    profile: state.profile.profile,
    myId: state.auth.id
});

const ProfileContainerWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getProfile, setProfile})(ProfileContainerWithRouter);
