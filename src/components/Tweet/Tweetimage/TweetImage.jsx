import React, { useState } from "react";
import TweetBody from "../TweetText/TweetBody";
import TweetTitle from "../TweetText/TweetTitle";
import TweetBottom from "../TweetText/TweetBottom";
import TweetAvatar from "../TweetText/TweetAvatar";
import { UsersList } from "../../data/Tweets";

function TweetImage({numberTweet}){
    const imageTweet = require("../../../images/tweet-image.png");

    const [index, setIndex] = useState({numberTweet});
    let usersTweets = UsersList[numberTweet];
    let bottomAction = usersTweets.bottomAction;

    return (
        <div className="tweet">
           <TweetAvatar  imageAvatar={usersTweets.avatar} />

            <div className="tweet-content">
                <div className="tweet-title">
                    <TweetTitle name={usersTweets.name} times={usersTweets.times} />
                </div>

                <TweetBody content={usersTweets.content} />

                <div className="tweet-image">
                    <img src={imageTweet} alt="Image du tweet" />
                </div>
                <div className="tweet-body">
                    <TweetBottom 
                        comment={bottomAction.comment} 
                        share={bottomAction.share}
                        like={bottomAction.like}
                    />
                </div>

            </div>
        </div>
    )
}

export default TweetImage;