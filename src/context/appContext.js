import React, { createContext, useEffect, useState } from "react";
import { PlaylistVideos } from "../constants";
export const videoContext = createContext();

export const AppContext = (props) => {
    const [playList, setPlayList] = useState(PlaylistVideos);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    return (
        <videoContext.Provider
            value={{
                playList,
                setPlayList,
                selectedVideo,
                setSelectedVideo,
                search,
                setSearch,
                loading,
                setLoading
            }}
        >
            {props.children}
        </videoContext.Provider>
    )
}