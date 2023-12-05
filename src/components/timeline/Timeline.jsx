import React from 'react'
import Header from './Header/header'
import EditorTweet from './EditorTweet/EditorTweet'
import Tweet from './Tweet/Tweet'


function Timeline() {
  return (
    <>
        <Header />
        <EditorTweet />
        <Tweet numberTweet={0} />
        <Tweet numberTweet={1} />
        <Tweet numberTweet={2} />
        <Tweet numberTweet={3} />
    </>
  )
}

export default Timeline