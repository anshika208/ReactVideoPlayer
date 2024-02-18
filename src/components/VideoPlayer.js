import React, { useContext, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { videoContext } from '../context/appContext';
import Loader from "./Loader"
export default function VideoPlayer() {
    const { id } = useParams();
    const {
        playList,
        loading,
        setLoading,
        selectedVideo,
        setSelectedVideo,
    } = useContext(videoContext);

    useEffect(() => {
        if (id) {
            let selecetdDetails = playList?.filter((video) => Number(video.id) === Number(id))
            setSelectedVideo(selecetdDetails?.[0])
        }

    }, [id])
    return (
        <div className="flex text-white justify-center flex-row  w-[calc(100%-270px)] h-[calc(100%-56px)] mt-10 px-10 overflow-auto">
            <div className="w-full max-w-[1280px] items-center flex flex-col lg:flex-row">
                <div className="flex flex-col px-4 py-3 lg:py-6 overflow-y-auto">
                    <div className="h-[200px] md:h-[400px]  xl:h-[550px] ml-[-16px]  mr-[-16px] lg:mr-0">
                        {selectedVideo ? <ReactPlayer
                            url={selectedVideo?.sources?.[0]}
                            controls
                            width="100%"
                            height="100%"
                            style={{ backgroundColor: "#000000" }}
                            playing={true}
                        /> : <><Loader /> </>}
                    </div>
                    <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
                        {selectedVideo?.description ?? <div className='text-white text-3xl'>No content selected</div>}
                    </div>
                </div>
            </div>
        </div>

    )
}
