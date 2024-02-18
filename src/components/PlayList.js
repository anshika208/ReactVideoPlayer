import React, { useContext, useEffect } from 'react'
import { videoContext } from '../context/appContext'
import PlayListCard from './PlayListCard'
export default function PlayList() {
  const {
    playList,
    setPlayList,
    selectedVideo,
    setSelectedVideo,
  } = useContext(videoContext)

  return (

    <div
      className={`md:block w-[240px] overflow-y-auto h-full py-4`}
    >
      {Array.isArray(playList) && playList?.length ? <div className="flex px-5 flex-col">
        {playList?.map((videos, index) => (
          <PlayListCard
            key={videos.id}
            videoDetails={videos}
            index={index}

          />
        ))}</div> : <div className='text-white text-2xl'>Not Found</div>}

    </div>
  )
}
