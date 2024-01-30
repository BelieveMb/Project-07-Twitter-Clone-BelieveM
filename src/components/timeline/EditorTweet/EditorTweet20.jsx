import React, { useContext, useState } from 'react';
import imageAvatar from '../../../images/profile-photo.png';
import imageMedia from "../../../images/Media.png";
import imageGif from "../../../images/Gif.png";
import imagePoll from "../../../images/Poll.png";
import imageSmile from "../../../images/Emoji.png";
import imageSchedule from "../../../images/Schedule.png";
import TweetContext from '../../../context/tweetContext';


function EditorTweet() {
  const TweetAdd  = useContext(TweetContext);
  const newTweet = TweetAdd.addNewTweets
  const idTweet  = TweetAdd.tweets
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTweet = () => {
    newTweet({
      id: idTweet.lenght + 1, 
      content: inputValue,
      // Autres propriétés du tweet
    });
    setInputValue('');
  };

  console.log(TweetContext);

  return (

    <div class="tweet-editor">
      <div className="avatar">
        <img src={imageAvatar} alt="image du profile" />
      </div>
      <div className="tweet-editor-form">
        <input type="text"  value={inputValue} onChange={handleInputChange} placeholder="What's happening" className="tweet-editor-input" />
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