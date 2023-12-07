import React from 'react'
import Tweet from '../timeline/Tweet/Tweet'

function NavProfile() {
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

      <h2>content à continuer</h2>
      <Tweet numberTweet={0}/>
    </>
  )
}

export default NavProfile