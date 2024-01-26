import React, { useState } from'react';
import TweetBody from "./TweetBody";
import TweetTitle from "./TweetTitle";
import TweetBottom from "./TweetBottom";
import TweetAvatar from "./TweetAvatar";
import { UsersList } from "../../data/Tweets";
// import { }
import { Link } from 'react-router-dom';


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

function Tweet({filterUser}){
    // const Tweets = UsersList;
    const Tweets = UsersList;
    {filterUser !== 0  ?
        Tweets
        : Tweets.filter((tweet) => tweet.idUser === filterUser)
    }

    // console.log(filterUser);
    return (
        <>
        {
            Tweets.map((tweets) => (
                <div className="tweet" key={tweets.idUser}>
                    <Link to={`/username/${tweets.idUser}`} >
                        <TweetAvatar  imageAvatar={tweets.avatar} />
                    </Link>

                    <div className="tweet-content" >
                        <div className="tweet-title ">
                            <Link to={`/username/${tweets.idUser}`} >
                                <TweetTitle 
                                    name={tweets.name}
                                    times={tweets.times}
                                    hastag={tweets.hastag}
                                />
                            </Link>
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