import React from "react";
import FreeChatSettings from "./free-chat-settings";
import WorkChatSettings from "./work-chat-settings";
import styles from "./settings.module.css";


function Settings({state, changeHandler, props, saveChangeProfile}) {

    return (
        <div className="content">
            <h3 className="title">Settings</h3>

            <div className={`${styles.settings}  scrolling`}>
                <div className="profile_settings">
                    <h3>Profile Settings</h3>

                    <div className={styles.option}>
                        <label> Avatar:
                            <input type="text" placeholder="Enter new avatar link" value={state.avatar}
                                   onChange={(e) => changeHandler(e, props.changeAvatar)}/>
                        </label>
                    </div>

                    <div className={styles.option}>
                        <label> Name:
                            <input type="text" placeholder="Enter your name" value={state.name}
                                   onChange={(e) => changeHandler(e, props.changeName)}/>
                        </label>
                    </div>

                    <div className={styles.option}>
                        <label> Status:
                            <input type="text" placeholder="Enter status" maxLength="75" value={state.status}
                                   onChange={(e) => changeHandler(e, props.changeStatus)}/>
                        </label>
                    </div>

                    <div className={styles.option}>
                        <label> Phone number:
                            <input type="text" placeholder="Enter phone number" value={state.phoneNum}
                                   onChange={(e) => changeHandler(e, props.changePhoneNum)}/>
                        </label>
                    </div>

                    <div className={styles.option}>
                        <label> Email:
                            <input type="text" placeholder="Enter your email" value={state.email}
                                   onChange={(e) => changeHandler(e, props.changeEmail)}/>
                        </label>
                    </div>

                    <div className={styles.option}>
                        <label> Post:
                            <input type="text" placeholder="Enter your post" value={state.post}
                                   onChange={(e) => changeHandler(e, props.changePost)}/>
                        </label>
                    </div>

                    <div className={styles.option}>
                        <label> Website:
                            <input type="text" placeholder="Enter your website link" value={state.website}
                                   onChange={(e) => changeHandler(e, props.changeWebsite)}/>
                        </label>
                    </div>

                    <div className={styles.option}>
                        <label> GitHub:
                            <input type="text" placeholder="Enter your github link" value={state.github}
                                   onChange={(e) => changeHandler(e, props.changeGithub)}/>
                        </label>
                    </div>

                    <div className={styles.social_fields}>
                        <div className={styles.social_option}>
                            VK
                            <input type="text" placeholder="Enter your VK link" value={state.social.vk}
                                   onChange={(e) => changeHandler(e, props.changeVK)}/>
                        </div>
                        <div className={styles.social_option}>
                            Facebook
                            <input type="text" placeholder="Enter your Facebook link" value={state.social.facebook}
                                   onChange={(e) => changeHandler(e, props.changeFacebook)}/>
                        </div>
                        <div className={styles.social_option}>
                            Instagram
                            <input type="text" placeholder="Enter your Instagram link" value={state.social.instagram}
                                   onChange={(e) => changeHandler(e, props.changeInstagram)}/>
                        </div>
                        <div className={styles.social_option}>
                            Twitter
                            <input type="text" placeholder="Enter your Twitter link" value={state.social.twitter}
                                   onChange={(e) => changeHandler(e, props.changeTwitter)}/>
                        </div>
                        <div className={styles.social_option}>
                            YouTube
                            <input type="text" placeholder="Enter your Youtube link" value={state.social.youtube}
                                   onChange={(e) => changeHandler(e, props.changeYoutube)}/>
                        </div>
                    </div>

                    <button className={styles.save} onClick={() => saveChangeProfile()}>Save</button>
                </div>

                <WorkChatSettings/>
                <FreeChatSettings/>
            </div>
        </div>
    );
}

export default Settings;
