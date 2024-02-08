import React, { useContext, useEffect, useState } from 'react';
import imageAvatar from  '../../../../public/images/profile-photo.png';
import axios from 'axios'


import imageMedia from "../../../../public/images/Media.png";
import imageGif from "../../../../public/images/Gif.png";
import imagePoll from "../../../../public/images/Poll.png";
import imageSmile from "../../../../public/images/Emoji.png";
import imageSchedule from "../../../../public/images/Schedule.png";
import TweetContext from '../../../context/tweetContext';


function EditorTweet() {
  // const {allData, setAllData} = useContext(TweetContext);
  const [apiData, setApiData] = useState([]);
  const [inputValue, setInputValue] = useState('');
   
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


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const baseURL =  'https://65c20c3ff7e6ea59682a7c59.mockapi.io/tweets/users'


  const handleAddTweet = () => {
    axios.post(baseURL, {
        id: apiData.length + 1,
        content: inputValue,
        idUser: 1,
        tweetTitle : "Brady Ortiz ",
        hastag: "@Brady Ortiz. ",
        avatar: imageAvatar,
        times: 'now',
        createdAt: new Date(),
        tweetId: 1,
        comment: 0,
        retweet: 0,
        like: 0,   
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setInputValue(''); 
  
    const newTweet = {
      id: allData.tweets.length + 1,
      content: inputValue,
      idUser: 1,
      tweetTitle : "Brady Ortiz ",
      hastag: "@Brady Ortiz. ",
      avatar: imageAvatar,
      times: 'now',
      createdAt: new Date(),
      tweetId: 1,
      comment: 0,
      retweet: 0,
      like: 0,
      isLike: false,
      haveImage: false
    };
    // const updatedTweets = [...allData.tweets];
    // updatedTweets.unshift(newTweet);
    // setApiData({...allData, tweets : updatedTweets});

  };

  return (

    <div class="tweet-editor">
      <div className="avatar">
        <img src={imageAvatar} alt="image du profile" />
      </div>
      <div className="tweet-editor-form">
        <input type="text"  value={inputValue} onChange={handleInputChange}  placeholder="What's happening" className="tweet-editor-input" />
        <div className="tweet-editor-buttons">
          <div className="tweet-editor-actions">
            <img src={imageMedia} alt="image du media" />
            <img src={imageGif} alt="image du gif" />
            <img src={imagePoll} alt="image du poll" />
            <img src={imageSmile} alt="image du smile" />
            <img src={imageSchedule} alt="image du schedule" />
          </div>
          <button className="button" onClick={handleAddTweet}>Tweet</button>
        </div>
      </div>
    </div>
  )
}

export default EditorTweet;