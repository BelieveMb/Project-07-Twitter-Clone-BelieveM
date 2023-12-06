import React from 'react'
import SideBar from '../components/sidebar/SideBar'
import Layout from '../components/layout'
import RightBar from '../components/rightbar/RightBar'
import UserProfile from '../components/userProfile/UserProfile'

function UserName() {
  return (
    <>
      
      <SideBar />
      <Layout>
        <UserProfile />
      </Layout>
      <RightBar />

    </>
  )
}

export default UserName