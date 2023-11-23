import React, { useState } from "react";
import TweetTitle from "./TweetTitle";
import TweetBody from "./TweetBody";
import TweetBottom from "./TweetBottom";
import { UsersList } from "../../data/Tweets";
import TweetAvatar from "./TweetAvatar";


function TweetText({numberTweet}){

    const [index, setIndex] = useState({numberTweet});
    let usersTweets = UsersList[numberTweet];
    let bottomAction = usersTweets.bottomAction;

    return (
        <div className="tweet">
           <TweetAvatar  imageAvatar={usersTweets.avatar} />

            <div className="tweet-content">
                <div className="tweet-title">
                    <TweetTitle 
                        name={usersTweets.name}
                        times={usersTweets.times}
                        hastag={usersTweets.hastag}
                    />
                </div>
                <div className="tweet-body">
                    <div className="tweet-content">
                    
                        <TweetBody content={usersTweets.content} />
                        <TweetBottom 
                            comment={bottomAction.comment} 
                            share={bottomAction.share}
                            like={bottomAction.like}
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default TweetText;