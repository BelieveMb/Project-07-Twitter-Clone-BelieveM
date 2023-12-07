import React from 'react'
import TitleProfile from './titleProfile'
import BannerProfile from './bannerProfile'
import ContentProfile from './contentProfile'

function UserProfile() {
  return (
    <main className="timeline">
      <TitleProfile />
      <BannerProfile />
      <ContentProfile />
    </main>
  )
}

export default UserProfile