import React, { useState } from 'react'
import TitleProfile from './titleProfile'
import BannerProfile from './bannerProfile'
import ContentProfile from './contentProfile'
import NavProfile from './navProfile'
import { NavLink, useParams } from 'react-router-dom';
import { UsersList } from '../data/Tweets';



function UserProfile() {
  const { id } = useParams();
  const usernames = UsersList.find((usernames) => usernames.idUser === parseInt(id));

  return (
    <main className="timeline">
      <TitleProfile  AllData={usernames} />
      <BannerProfile AllData={usernames} />
      <ContentProfile AllData={usernames} />
      <NavProfile />
    </main>
  )
}

export default UserProfile