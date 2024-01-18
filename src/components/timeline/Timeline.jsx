import React, { useState } from 'react'
import Header from './Header/header'
import EditorTweet from './EditorTweet/EditorTweet'
import Tweet from './Tweet/Tweet'
import PublishContext from '../context/PublishContext';


function Timeline() {
  const [textTweet, setTextTweet] = useState("nothing");
  const addNewTweet = () =>{
    let  tweetContent = document.querySelector('#tweetContent');
    setTextTweet(tweetContent.value); 
    
    tweetContent.value = "";
  }
  const ContextValue = textTweet;


  return (
    <>
      <PublishContext.Provider value={ContextValue}> 
        <Header />
        <EditorTweet action={addNewTweet} />
        <Tweet />
      </PublishContext.Provider>

        
    </>
  )
}

export default Timeline