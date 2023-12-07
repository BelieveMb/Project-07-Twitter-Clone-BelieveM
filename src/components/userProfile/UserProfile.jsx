import React from 'react'
import TitleProfile from './titleProfile'
import BannerProfile from './bannerProfile'
import ContentProfile from './contentProfile'
import NavProfile from './navProfile'
import { useParams } from 'react-router-dom'
import { UsersList } from '../data/Tweets';


function UserProfile() {
  const { id } = useParams();
  const key = id;
  const usernames = UsersList.find((usernames) => usernames.idUser === parseInt(key));


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