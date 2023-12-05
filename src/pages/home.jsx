import React from 'react';
import Timeline from '../components/timeline/Timeline';
import SideBar from '../components/sidebar/SideBar';


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