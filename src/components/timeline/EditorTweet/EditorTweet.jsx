import React, { useContext, useState } from 'react';
import imageAvatar from  '../../../images/profile-photo.png';


import imageMedia from "../../../images/Media.png";
import imageGif from "../../../images/Gif.png";
import imagePoll from "../../../images/Poll.png";
import imageSmile from "../../../images/Emoji.png";
import imageSchedule from "../../../images/Schedule.png";
import TweetContext from '../../../context/tweetContext';


function EditorTweet() {
  const {allData, setAllData} = useContext(TweetContext);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTweet = () => {
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
      urlretweet: "M11 19.638H10.986C8.40295 19.59 0.949951 12.856 0.949951 6.478C0.949951 3.414 3.47495 0.723999 6.35295 0.723999C8.64295 0.723999 10.183 2.304 10.999 3.454C11.813 2.306 13.353 0.723999 15.644 0.723999C18.524 0.723999 21.048 3.414 21.048 6.479C21.048 12.855 13.594 19.589 11.011 19.636H11V19.638ZM6.35395 2.225C4.27395 2.225 2.45095 4.213 2.45095 6.48C2.45095 12.22 9.48495 18.076 11.001 18.138C12.519 18.076 19.551 12.221 19.551 6.48C19.551 4.213 17.728 2.225 15.648 2.225C13.12 2.225 11.708 5.161 11.696 5.19C11.466 5.752 10.54 5.752 10.309 5.19C10.295 5.16 8.88395 2.225 6.35495 2.225H6.35395Z",
      urllikedRed: "#6E767D",
      isLike: false,
      haveImage: false
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