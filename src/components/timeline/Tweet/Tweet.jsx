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

function Tweet(){

    const AllTweets = UsersList;

    return (
        <>
        {
            
            AllTweets.map((tweets) => (
                <div className="tweet" key={tweets.idUser}>
                <TweetAvatar  imageAvatar={tweets.avatar} />

                <div className="tweet-content" >
                    <div className="tweet-title">
                        <TweetTitle 
                            name={tweets.name}
                            times={tweets.times}
                            hastag={tweets.hastag}
                            />
                    </div>

                    <TweetBody content={tweets.content} />
                    {testImage(tweets.images, tweets.images)}
                
                    

                    <div className="tweet-body">
                        <TweetBottom 
                            comment={tweets.bottomAction.comment} 
                            share={tweets.bottomAction.share}
                            like={tweets.bottomAction.like}
                        />
                    </div>
                </div>
             </div>
            ))
        }
    </>
    )
}

export default Tweet;