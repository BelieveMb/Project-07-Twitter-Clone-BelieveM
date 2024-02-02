import React from'react';

function TweetAvatar({imageAvatar}) {
    return (
        <div className="tweet-avatar">
            <img src={imageAvatar} className='w-[5rem] h-16 ' alt="avatar" />
        </div>
    )
}

export default TweetAvatar;