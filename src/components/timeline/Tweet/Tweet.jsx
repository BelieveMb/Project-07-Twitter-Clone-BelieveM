import React, { useContext, useEffect, useState } from'react';
import TweetBody from "./TweetBody";
import TweetTitle from "./TweetTitle";
import TweetBottom from "./TweetBottom";
import TweetAvatar from "./TweetAvatar";
import { UsersList } from "../../data/Tweets";
// import { }
import { Link, useParams } from 'react-router-dom';
import TweetContext from '../../../context/tweetContext';


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

const TweetsMap =({dataTweets}) => {
    const Tweets = dataTweets.allData.tweets;
    return(
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
                                name={tweets.tweetTitle}
                                times={tweets.times}
                                hastag={tweets.hastag}
                            />
                        </Link>
                    </div>

                    <TweetBody content={tweets.content} />
                    {testImage(tweets.images, tweets.images)}
                
                    

                    <div className="tweet-body">
                        <TweetBottom 
                            comment={tweets.comment} 
                            share={tweets.retweet}
                            like={tweets.like}
                        />
                    </div>
                </div>
            </div>
            ))
        }
        </>
    )
}
const TweetsUser = ({dataTweets}) => {
    const { id } = useParams();
    const tweets = dataTweets.allData.tweets[id];
    return(
        <>
        {
            <div className="tweet" key={tweets.idUser}>
                <Link to={`/username/${tweets.idUser}`} >
                    <TweetAvatar  imageAvatar={tweets.avatar} />
                </Link>

                <div className="tweet-content" >
                    <div className="tweet-title ">
                        <Link to={`/username/${tweets.idUser}`} >
                            <TweetTitle 
                                name={tweets.tweetTitle}
                                times={tweets.times}
                                hastag={tweets.hastag}
                            />
                        </Link>
                    </div>

                    <TweetBody content={tweets.content} />
                    {testImage(tweets.images, tweets.images)}
                
                    

                    <div className="tweet-body">
                        <TweetBottom 
                            comment={tweets.comment} 
                            share={tweets.retweet}
                            like={tweets.like}
                        />
                    </div>
                </div>
            </div>
        }
        </>
    )
}


function Tweet(){
    const dataTweets = useContext(TweetContext);
    const userOnlineId = dataTweets.userOnline;
    const [ selectUrl, setSelectUrl] = useState('');
    useEffect(() => {
        const currentUrl = window.location.pathname;
        setSelectUrl(currentUrl);
        console.log('URL actuelle :', currentUrl);
      }, []);

    return (
        <>
        
        { selectUrl === '/' || selectUrl === ''
            ? <TweetsMap dataTweets={dataTweets} /> 
            : <TweetsUser dataTweets={dataTweets} /> 
        }
    </>
    )
}

export default Tweet;