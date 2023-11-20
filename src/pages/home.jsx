import React from 'react';
import Header from '../components/Header/header';
import TweetText from '../components/Tweet/TweetText/TweetText';
import EditorTweet from '../components/EditorTweet/EditorTweet';
import TweetImage from '../components/Tweet/Tweetimage/TweetImage';

function Home() {
  return (
    <main className="timeline">
      {/* <Header /> */}
      {/*
      <EditorTweet />
      <TweetText />
      <TweetImage />
      <TweetText />
      */}
       <TweetText />
    </main>
  );
}

export default Home;