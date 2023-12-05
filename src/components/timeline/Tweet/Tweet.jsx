import React, { useState } from'react';
import TweetBody from "./TweetBody";
import TweetTitle from "./TweetTitle";
import TweetBottom from "./TweetBottom";
import TweetAvatar from "./TweetAvatar";
import { UsersList } from "../../data/Tweets";


function testImage(images, imageTweet){
    if(images ){
        return (
            <div className="tweet-image">
                <img src={imageTweet} alt="Image du tweet" />
            </div>
        );
    }else{
        return null;
    }
}

function Tweet({numberTweet}){


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

                <TweetBody content={usersTweets.content} />
                {testImage(usersTweets.images, usersTweets.images)}
               
                

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

export default Tweet;