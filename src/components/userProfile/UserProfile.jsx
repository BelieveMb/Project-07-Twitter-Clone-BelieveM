import React from 'react'
import TitleProfile from './titleProfile'
import BannerProfile from './bannerProfile'
import ContentProfile from './contentProfile'
import NavProfile from './navProfile'
import { NavLink, useParams } from 'react-router-dom';
import { UsersList } from '../data/Tweets';



function UserProfile() {


  return (
    <main className="timeline">
      <TitleProfile />
      <BannerProfile />
      <ContentProfile />
      <NavProfile />
    </main>
  )
}

export default UserProfile