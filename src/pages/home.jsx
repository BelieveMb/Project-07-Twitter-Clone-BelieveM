import React from 'react';
import Timeline from '../components/timeline/Timeline';
import SideBar from '../components/sidebar/SideBar';


function Home() {
  return (
    <>
      <SideBar />
      <main className="timeline">
        <Timeline />
      </main>

    </>
    
  );
}

export default Home;