import React from 'react'
import Tweet from '../timeline/Tweet/Tweet'

function NavProfile({AllData}) {
  const userProfil = AllData;

  return (
    <>
      <div className='navProfile'>
        <a href="">Posts</a>
        <a href="">Affiliés</a>
        <a href="">Réponses</a>
        <a href="">Médias</a>
        <a href="">J'aime</a>
      </div>
      <div className="line"></div>

      {/* <Tweet /> */}
    </>
  )
}

export default NavProfile