import React from 'react';
import Timeline from '../components/timeline/Timeline';
import SideBar from '../components/sidebar/SideBar';
import RightBar from '../components/rightbar/RightBar';


function Home() {

  return (
    <>
      <SideBar  />
      <main className="timeline">
        <Timeline />
      </main>
      <RightBar />

    </>
    
  );
}

export default Home;