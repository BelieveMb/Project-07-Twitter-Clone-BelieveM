import React, { useContext, useState } from'react';
import TweetBody from "./TweetBody";
import TweetTitle from "./TweetTitle";
import TweetBottom from "./TweetBottom";
import TweetAvatar from "./TweetAvatar";
import { UsersList } from "../../data/Tweets";
import { Link, useParams } from 'react-router-dom';
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

const ListAllTweets = () => {
    const takeURL = window.location.pathname;
    const takeURL2 = takeURL.split('/');
    const takeURLpart = parseInt(takeURL2[2]);
    console.log(takeURLpart);
    const tweets = UsersList.find((tweet) => tweet.idUser === takeURLpart);



    return (
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
    )
}

function Tweet(){

    const AllTweets = UsersList;

    const contentPublish = useContext(PublishContext);
    const userDataOnline = useContext(UserConnexion);

    const newTweets = localStorage.getItem('tweetContent');
    const newTweet = newTweets.split(',');

    const checkURL = window.location.pathname;
    const takeURL2 = checkURL.split('/');
    const takeURLpart = parseInt(takeURL2[2]);
    console.log(checkURL)

    return (
        <>
            { takeURLpart === 1 || checkURL === '/' ? 
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
                            <TweetBody content={newTweet[0]} />
                            <div className="tweet-body">
                                <TweetBottom 
                                    comment={newTweet[1]} 
                                    share={newTweet[2]}
                                    like={parseInt(newTweet[3])}
                                />
                            </div>
                        </div>
                </div> : null 
             } 

        {
            checkURL === `/username/${takeURLpart}` ?
              <ListAllTweets />
            : AllTweets.map((tweets) => (

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