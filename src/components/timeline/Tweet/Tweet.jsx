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
const baseURL =  "https://jsonplaceholder.typicode.com/users/9";
const baseURL2 =  'https://65c20c3ff7e6ea59682a7c59.mockapi.io/tweets/users'
    axios.get(baseURL2)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });

    // axios.post(baseURL2, {
    //         tweetTitle: 'Fred',
    //         like: 20
    //       })
    //       .then(function (response) {
    //         console.log(response);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
   



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
    const {allData } = useContext(TweetContext);

    const userOnlineId = allData.userOnline;
    const [ selectUrl, setSelectUrl] = useState('');
    useEffect(() => {
        const currentUrl = window.location.pathname;
        setSelectUrl(currentUrl);
      }, []);

    return (
        <>
        
        { selectUrl === '/' || selectUrl === ''
            ? <TweetsMap dataTweets={allData} /> 
            : <TweetsUser dataTweets={allData} /> 
        }
    </>
    )
}

export default Tweet;