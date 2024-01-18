import React, { useContext, useState } from'react';
import TweetBody from "./TweetBody";
import TweetTitle from "./TweetTitle";
import TweetBottom from "./TweetBottom";
import TweetAvatar from "./TweetAvatar";
import { UsersList } from "../../data/Tweets";
import { Link } from 'react-router-dom';
import PublishContext from '../../context/PublishContext';
import UserConnexion from '../../context/UserConnexion';


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
    const contentPublish = useContext(PublishContext);
    const userDataOnline = useContext(UserConnexion)


    return (
        <>
        <div className="tweet" >
            <Link to={`/username/${userDataOnline.idUser}`} >
                <TweetAvatar  imageAvatar={userDataOnline.avatar} />
            </Link>

            <div className="tweet-content" >
                <div className="tweet-title ">
                    <Link to={`/username/${userDataOnline.idUser}`} >
                        <TweetTitle 
                            name={userDataOnline.name}
                            times={userDataOnline.times}
                            hastag={userDataOnline.hastag}
                        />
                    </Link>
                </div>

                <TweetBody content={contentPublish} />
                {/* {testImage(tweets.images, tweets.images)} */}
            
                

                <div className="tweet-body">
                    <TweetBottom 
                        comment={userDataOnline.bottomAction.comment} 
                        share={userDataOnline.bottomAction.share}
                        like={userDataOnline.bottomAction.like}
                    />
                </div>
            </div>
        </div>
        {
            
            AllTweets.map((tweets) => (
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