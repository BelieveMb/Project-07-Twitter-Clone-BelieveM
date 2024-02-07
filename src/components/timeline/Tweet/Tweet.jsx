import React, { useContext, useEffect, useState } from'react';
import TweetBody from "./TweetBody";
import TweetTitle from "./TweetTitle";
import TweetBottom from "./TweetBottom";
import TweetAvatar from "./TweetAvatar";
import { Link, useParams } from 'react-router-dom';
import TweetContext from '../../../context/tweetContext';
import axios from 'axios'
import TwitterApi from 'twitter-v2';


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
    // const allTweets = dataTweets.tweets;
    const allTweets = dataTweets.tweets;
    return(
        <>
        {
            allTweets.map((tweets) => (
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
    const tweets = dataTweets.tweets[id];
    // const allTweets = dataTweets.tweets;

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
    const [apiData, setApiData] = useState([]);
    const baseURL =  'https://65c20c3ff7e6ea59682a7c59.mockapi.io/tweets/users'
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://65c20c3ff7e6ea59682a7c59.mockapi.io/tweets/users');
            setApiData(response.data);
          } catch (error) {
            console.error(error);
          }
        }
    
          fetchData();
        }, []);

        return(
            <>
            {
                apiData.map((tweets, index) => (
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

export default Tweet;