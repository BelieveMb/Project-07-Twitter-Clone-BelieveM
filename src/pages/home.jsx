import React, { createContext } from 'react';
import Timeline from '../components/timeline/Timeline';
import SideBar from '../components/sidebar/SideBar';
import RightBar from '../components/rightbar/RightBar';
import UserConnexion from '../components/context/UserConnexion';
import { UsersList } from '../components/data/Tweets';


function Home() {
  const idUserOnline = 1;
  const userDataOnline = UsersList.find((userData) => userData.idUser === parseInt(idUserOnline));


  return (
    <UserConnexion.Provider value={userDataOnline}>
      <SideBar  />
      <main className="timeline">
        <Timeline />
      </main>
      <RightBar />

    </UserConnexion.Provider>
    
  );
}

export default Home;