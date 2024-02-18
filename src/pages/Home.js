import React from 'react'
import PlayList from '../components/PlayList'
import VideoPlayer from '../components/VideoPlayer'

export default function Home() {
  return (
    <div className="flex flex-row h-[calc(100%-56px)]" style={{width:'100%'}}>
      <PlayList/>
      <VideoPlayer/>
      </div>
  )
}
