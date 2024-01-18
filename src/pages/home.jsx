import React, { createContext } from 'react';
import Timeline from '../components/timeline/Timeline';
import SideBar from '../components/sidebar/SideBar';
import RightBar from '../components/rightbar/RightBar';
import UserConnexion from '../components/context/UserConnexion';


function Home() {
  const idUserOnline = 1;

  return (
    <UserConnexion.Provider value={idUserOnline}>
      <SideBar  />
      <main className="timeline">
        <Timeline />
      </main>
      <RightBar />

    </UserConnexion.Provider>
    
  );
}

export default Home;