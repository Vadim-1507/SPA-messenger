import React from "react";
import avatar from "../../media-src/user.jfif"
import styles from "./profile.module.css";
import {NavLink} from "react-router-dom";

function Profile({state, myProfile, logOutHandler}) {

    const visible = myProfile ? 'visible' : 'hidden';
    const vk = state.social.vk ? <a href={state.social.vk} className={styles.vk}><i className="fab fa-vk"/></a> : undefined;
    const fb = state.social.facebook ? <a href={state.social.facebook} className={styles.fb}><i className="fab fa-facebook-square"/></a> : undefined;
    const inst = state.social.instagram ? <a href={state.social.instagram} className={styles.inst}><i className="fab fa-instagram"/></a> : undefined;
    const twit = state.social.twitter ? <a href={state.social.twitter} className={styles.twit}><i className="fab fa-twitter"/></a> : undefined;
    const yt = state.social.youtube ? <a href={state.social.youtube} className={styles.yt}><i className="fab fa-youtube"/></a> : undefined;

    return (
        <div className="content">
            <div className={styles.header}>
                <h3 className="title">Profile</h3>
                <NavLink to={'/settings'} style={{visibility: visible}}><i className="fas fa-cog"/> Settings</NavLink>
            </div>

            <div className={`${styles.profile} scrolling`}>
                <div className={styles.about_user}>
                    <div className={styles.avatar}>
                        <img src={state.avatar || avatar} alt="avatar"/>
                    </div>
                    <div className={styles.user_info}>
                        <h3>{state.name}</h3>

                        <div className={styles.item}>Status: <span>{state.status}</span></div>
                        <div className={styles.item}>Phone number: <span>{state.phoneNum}</span></div>
                        <div className={styles.item}>Email: <span>{state.email}</span></div>
                        <div className={styles.item}>Post: <span>{state.post}</span></div>
                    </div>
                </div>

                <div className={styles.more_info}>
                    <h3>More Information</h3>

                    <div className={styles.item}>Website: <a href={state.website}>{state.website}</a></div>
                    <div className={styles.item}>GitHub: <a href={state.github}>{state.github}</a></div>
                    <div className={styles.item}>MySocial:
                        <div className={styles.social}>
                            {vk} {fb} {inst} {twit} {yt}
                        </div>
                    </div>
                </div>
                <button className={styles.btn_logOut} style={{visibility: visible}} onClick={() => logOutHandler()}><i className="fas fa-sign-out-alt"/>Log out</button>
            </div>
        </div>
    );
}

export default Profile;
