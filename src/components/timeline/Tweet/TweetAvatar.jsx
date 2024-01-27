import React from'react';

function TweetAvatar({imageAvatar}) {
    const photo = {imageAvatar};
    return (
        <div className="tweet-avatar">
            <img src={photo} alt="avatar" />
        </div>
    )
}

export default TweetAvatar;