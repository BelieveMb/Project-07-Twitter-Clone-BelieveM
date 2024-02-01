import React from 'react'
import SideBar from '../components/sidebar/SideBar'
import RightBar from '../components/rightbar/RightBar'
import UserProfile from '../components/userProfile/UserProfile'
import Layout from '../components/Layout'

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