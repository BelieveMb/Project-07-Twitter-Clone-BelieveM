import React from 'react';
import Header from '../components/Header/header';
import TweetText from '../components/Tweet/TweetText/TweetText';
import EditorTweet from '../components/EditorTweet/EditorTweet';

function Home() {
  return (
    <main className="timeline">
      <Header />
      <EditorTweet />
      <TweetText />

    </main>
  );
}

export default Home;