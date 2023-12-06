import React from 'react'
import SideBar from '../components/sidebar/SideBar'
import Layout from '../components/layout'
import RightBar from '../components/rightbar/RightBar'

function UserName() {
  return (
    <>
      
      <SideBar />
      <Layout>
        <h2>Page profil</h2>
      </Layout>
      <RightBar />

    </>
  )
}

export default UserName