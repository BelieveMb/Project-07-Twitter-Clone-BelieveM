import React, { useContext, useEffect, useState } from 'react';
import imageAvatar from  '../../../../public/images/profile-photo.png';
import axios from 'axios'


import imageMedia from "../../../../public/images/Media.png";
import imageGif from "../../../../public/images/Gif.png";
import imagePoll from "../../../../public/images/Poll.png";
import imageSmile from "../../../../public/images/Emoji.png";
import imageSchedule from "../../../../public/images/Schedule.png";
import TweetContext from '../../../context/tweetContext';
import { useForm } from 'react-hook-form';


function EditorTweet() {
  const [apiData, setApiData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [formData, setFormData] = useState({
    messageTweet : ""
  });
  
  const {register, formState:{errors}, handleSubmit } = useForm();
  const onSubmitForm = (data) => {
    alert(data)
   }
   
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

  const handleAddTweet = (data) => {
    const messageTweetValue = data.messageTweet;
    let messageTweetInput = document.getElementById('messageTweetInput')
    
    // event.preventDefault()
    axios.post(baseURL, {
        id: apiData.length + 1,
        content: messageTweetValue,
        idUser: apiData.length + 1,
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
        alert("Ajouter")
      })
      .catch(function (error) {
        console.log(error);
      });
    // setInputValue(''); 
    messageTweetInput.value = ""
  

  };

  return (

    <div class="tweet-editor">
      <div className="avatar">
        <img src={imageAvatar} alt="image du profile" />
      </div>
      <form onSubmit={handleSubmit(handleAddTweet)}  className="tweet-editor-form">
        
        <input type="text" {...register('messageTweet', {
            minLength: { value: 3, message: "Votre tweet doit avoir plus de 3 caractères" },
            maxLength: { value: 20, message: "Votre doit avoir mois de 20 caractères" },
            required : "remplissez ce champs" })}
            placeholder="What's  happening" className="tweet-editor-input"   autoComplete='off'   id="messageTweetInput"         
        />
             {/* value={inputValue} onChange={handleInputChange}  */}
         <span className="animate-pulse">
            {errors.messageTweet && <span className="text-gray-50"> {errors.messageTweet.message} </span>}
        </span>
        
        <div className="tweet-editor-buttons">
          <div className="tweet-editor-actions">
            <img src={imageMedia} alt="image du media" />
            <img src={imageGif} alt="image du gif" />
            <img src={imagePoll} alt="image du poll" />
            <img src={imageSmile} alt="image du smile" />
            <img src={imageSchedule} alt="image du schedule" />
          </div>

          {/* <button className="button" onClick={handleAddTweet} type='submit'>Tweet</button> */}
          <button className="button"  type='submit'>Tweet</button>
        </div>
      </form>
    </div>
  )
}

export default EditorTweet;