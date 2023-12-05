import React from 'react';
import EditorTweet from '../components/EditorTweet/EditorTweet';
import Header from '../components/Header/header';
import Tweet from '../components/Tweet/Tweet';

function Home() {
  return (
    <main className="timeline">
      <Header />
      <EditorTweet />
      <Tweet numberTweet={0} />
      <Tweet numberTweet={1} />
      <Tweet numberTweet={2} />
      <Tweet numberTweet={3} />
    </main>
  );
}

export default Home;