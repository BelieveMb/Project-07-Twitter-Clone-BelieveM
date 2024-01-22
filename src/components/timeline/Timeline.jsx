import React, { useState } from 'react'
import Header from './Header/header'
import EditorTweet from './EditorTweet/EditorTweet'
import Tweet from './Tweet/Tweet'


function Timeline() {
  const [textTweet, setTextTweet] = useState(["",0,0,0]);
  const addNewTweet = () =>{
    let  tweetContent = document.querySelector('#tweetContent').value;
    
    setTextTweet([tweetContent,0,0,0]); 
    localStorage.setItem('tweetContent', textTweet);
    // tweetContent
  }


  return (
    <>
      <Header />
      <EditorTweet action={addNewTweet} />
      <Tweet />
    </>
  )
}

export default Timeline