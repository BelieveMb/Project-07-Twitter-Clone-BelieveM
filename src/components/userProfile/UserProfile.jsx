import React from 'react'
import TitleProfile from './titleProfile'
import BannerProfile from './bannerProfile'
import ContentProfile from './contentProfile'
import NavProfile from './navProfile'
import { useParams } from 'react-router-dom'

function UserProfile() {
  const { id } = useParams();

  return (
    <main className="timeline">
      <TitleProfile key={id}/>
      <BannerProfile />
      <ContentProfile />
      <NavProfile />
    </main>
  )
}

export default UserProfile