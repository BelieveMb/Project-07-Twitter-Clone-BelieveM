import React from 'react'
import SideBar from '../components/sidebar/SideBar'
import Layout from '../components/layout'
import RightBar from '../components/rightbar/RightBar'
import UserProfile from '../components/userProfile/UserProfile'
import UserConnexion from '../components/context/UserConnexion'
import { UsersList } from '../components/data/Tweets'

function UserName() {
  const idUserOnline = 1;
  const userDataOnline = UsersList.find((userData) => userData.idUser === parseInt(idUserOnline));

  return (
    <UserConnexion.Provider value={userDataOnline}>
      
      <SideBar />
      <Layout>
        <UserProfile />
      </Layout>
      <RightBar />

    </UserConnexion.Provider>
  )
}

export default UserName