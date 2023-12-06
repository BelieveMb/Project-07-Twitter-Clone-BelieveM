import React from 'react'
import SideBar from '../components/sidebar/SideBar'
import RightBar from '../components/rightbar/RightBar'
import Layout from '../components/layout'

function PageError() {
  return (
    <>
      <SideBar />
            <Layout>
              <h1>Le site est en construction</h1>
            </Layout>
      <RightBar />
    </>
  )
}

export default PageError