import React, { useContext, useState } from 'react';
import imageAvatar from  '../../../../public/images/profile-photo.png';


import imageMedia from "../../../../public/images/Media.png";
import imageGif from "../../../../public/images/Gif.png";
import imagePoll from "../../../../public/images/Poll.png";
import imageSmile from "../../../../public/images/Emoji.png";
import imageSchedule from "../../../../public/images/Schedule.png";
import TweetContext from '../../../context/tweetContext';


function EditorTweet() {
  const {allData, setAllData} = useContext(TweetContext);
  const [inputValue, setInputValue] = useState('');
  // const [tweets, setTweets] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTweet = () => {
    const newTweet = {
      id: allData.tweets.length + 1,
      content: inputValue,
    };
    console.log("id  : ", newTweet.id)
    const updatedTweets = [...allData.tweets];
    updatedTweets.unshift(newTweet);
    setAllData({...allData, tweets : updatedTweets});
    setInputValue(''); // Effacez le contenu de l'input après l'ajout du tweet
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