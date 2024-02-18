import React, { useContext, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import bunny from "../images/bunny.png"
import moment from 'moment'
import { videoContext } from '../context/appContext'

const videoDuration = (time) => {
    const videoLengthInSeconds = moment()
        ?.startOf("day")
        ?.seconds(time)
        ?.format("H:mm:ss");

    return (
        <span className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">
            {videoLengthInSeconds}
        </span>
    )
}

export default function PlayListCard({ videoDetails, index }) {
    const dragItem = useRef(null);
    const dragOverItem = useRef(null);
    const { playList, setPlayList } = useContext(videoContext)

    const reorderPlaylist = () => {
        let playlistCopy = [...playList];
        const draggedItemContent = playlistCopy?.splice(dragItem.current, 1)[0];

        // Insert the dragged item at the new position
        if (dragOverItem.current == 0) {
            playlistCopy.unshift(draggedItemContent);
        } else {
            playlistCopy.splice(dragOverItem.current, 0, draggedItemContent);
        }

        setPlayList(playlistCopy);
        dragItem.current = null;
        dragOverItem.current = null;


    };

    useEffect(() => {
        //to make sure currnt value of dragOverItem ref is being taken
        reorderPlaylist()
    }, [dragOverItem.current])

    return (

        <Link to={`/${videoDetails?.id}`}>
            <div className="flex flex-col mb-8 hover:bg-blue-100 "
                draggable
                onDragStart={(e) => { dragItem.current = index }}
                onDragEnter={(e) => { dragOverItem.current = index; }}
                onDragEnd={reorderPlaylist}
                onDragOver={(e) => e.preventDefault()}
            >
                <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden hover:text-blue-400">
                    <img
                        className="h-full w-full object-cover"
                        src={videoDetails?.thumb}
                    />
                    {videoDetails?.time && videoDuration(videoDetails?.time)}
                </div>
                <div className="flex text-white mt-3">
                    <div className="flex flex-col ml-3 overflow-hidden">
                        <span className="text-sm font-bold line-clamp-2 text-white">
                            {videoDetails?.title}
                        </span>
                        <span className="text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">
                            {videoDetails?.subtitle}
                        </span>
                    </div>
                </div>
            </div>

        </Link>

    )
}
