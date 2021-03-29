import {profileApi} from "../API-service/service";

const initialState = {
    profile: {
        id: 1111,
        avatar: '',
        name: '',
        status: '',
        phoneNum: '',
        email: '',
        post: '',
        website: '',
        github: '',
        social: {
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            youtube: ''
        }
    }
};

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PROFILE':
            return {
                ...state,
                profile: action.data
            };
        case 'CHANGE_AVATAR':
            return {
                ...state,
                profile: {...state.profile, avatar: action.data}
            };
        case 'CHANGE_NAME':
            return {
                ...state,
                profile: {...state.profile, name: action.data}

            };
        case 'CHANGE_STATUS':
            return {
                ...state,
                profile: {...state.profile, status: action.data}
            };
        case 'CHANGE_PHONE_NUM':
            return {
                ...state,
                profile: {...state.profile, phoneNum: action.data}
            };
        case 'CHANGE_EMAIL':
            return {
                ...state,
                profile: {...state.profile, email: action.data}
            };
        case 'CHANGE_POST':
            return {
                ...state,
                profile: {...state.profile, post: action.data}
            };
        case 'CHANGE_WEBSITE':
            return {
                ...state,
                profile: {...state.profile, website: action.data}
            };
        case 'CHANGE_GITHUB':
            return {
                ...state,
                profile: {...state.profile, github: action.data}

            };
        case 'CHANGE_VK':
            return {
                ...state,
                profile: {...state.profile, social: {...state.profile.social, vk: action.data}}
            };
        case 'CHANGE_FACEBOOK':
            return {
                ...state,
                profile: {...state.profile, social: {...state.profile.social, facebook: action.data}}
            };
        case 'CHANGE_INSTAGRAM':
            return {
                ...state,
                profile: {...state.profile, social: {...state.profile.social, instagram: action.data}}
            };
        case 'CHANGE_TWITTER':
            return {
                ...state,
                profile: {...state.profile, social: {...state.profile.social, twitter: action.data}}
            };
        case 'CHANGE_YOUTUBE':
            return {
                ...state,
                profile: {...state.profile, social: {...state.profile.social, youtube: action.data}}
            };
        default:
            return state;
    }
}

export const setProfile = data => ({type: 'SET_PROFILE', data});
export const changeAvatar = data => ({type: 'CHANGE_AVATAR', data});
export const changeName = data => ({type: 'CHANGE_NAME', data});
export const changeStatus = data => ({type: 'CHANGE_STATUS', data});
export const changePhoneNum = data => ({type: 'CHANGE_PHONE_NUM', data});
export const changeEmail = data => ({type: 'CHANGE_EMAIL', data});
export const changePost = data => ({type: 'CHANGE_POST', data});
export const changeWebsite = data => ({type: 'CHANGE_WEBSITE', data});
export const changeGithub = data => ({type: 'CHANGE_GITHUB', data});
export const changeVK = data => ({type: 'CHANGE_VK', data});
export const changeFacebook = data => ({type: 'CHANGE_FACEBOOK', data});
export const changeInstagram = data => ({type: 'CHANGE_INSTAGRAM', data});
export const changeTwitter = data => ({type: 'CHANGE_TWITTER', data});
export const changeYoutube = data => ({type: 'CHANGE_YOUTUBE', data});

export const getProfile = (id) => (dispatch) => {
    profileApi.getProfile(id)
        .then(res => {
            dispatch(setProfile(res));
        })
}

export default ProfileReducer;
