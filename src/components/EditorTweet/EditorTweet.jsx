import React from 'react';

function EditorTweet() {
    const imageAvatar = require("../../images/profile-photo.png");
    const imageMedia = require("../../images/Media.png");
    const imageGif = require("../../images/Gif.png");
    const imagePoll = require("../../images/Poll.png");
    const imageSmile = require("../../images/Emoji.png");
    const imageSchedule = require("../../images/Schedule.png");
    return (
        
        <div class="tweet-editor">
            <div className="avatar">
                <img src={imageAvatar} alt="image du profile" />
            </div>
            <div className="tweet-editor-form">
                <input type="text" placeholder="What's happening" className="tweet-editor-input" />
                <div className="tweet-editor-buttons">
                    <div className="tweet-editor-actions">
                        <img src={imageMedia} alt="image du media" />
                        <img src={imageGif} alt="image du gif" />
                        <img src={imagePoll} alt="image du poll" />
                        <img src={imageSmile} alt="image du smile" />
                        <img src={imageSchedule} alt="image du schedule" />
                    </div>
                    <button className="button">Tweet</button>   
                    
                </div>
            </div>
        </div>
    )
}

export default EditorTweet;