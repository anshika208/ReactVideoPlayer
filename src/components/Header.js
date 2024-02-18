import React, { useCallback, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import VideLogo from "../images/video-logo.png";

import { PlaylistVideos } from "../constants"
import { IoIosSearch } from "react-icons/io";
import Loader from "./Loader";
import { videoContext } from "../context/appContext"
import useDebounce from "../hooks/useDebouncedSearch";


const Header = () => {
    const { playList,
        setPlayList,
        selectedVideo,
        setSelectedVideo,
        search,
        setSearch,
        loading,
        setLoading } = useContext(videoContext);
    const { debounce } = useDebounce();


    const handlePlaylist = (searchValue) => {
        if (searchValue) {
            let filteredPlaylist = playList.filter((item) => typeof item?.title === 'string' && item?.title?.toUpperCase().split(" ")?.includes(searchValue?.toUpperCase()))
            setPlayList(filteredPlaylist)
        } else {
            setPlayList(PlaylistVideos)
        }
    }


    const handleSearch = useCallback(debounce(value => handlePlaylist(value), 500), [])

    return (
        <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-slate-800 dark:bg-black">
            {loading && <Loader />}

            <div className="flex h-5 items-center">
                <img
                    className="dark:md:block"
                    src={VideLogo}
                    alt="VidePlayer"
                    height="50px"
                    width="50px"
                />
                <span className="text-white text-2xl px-1">VideoPlayer</span> 
            </div>

            <div className="group flex items-center">
                <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-slate-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
                    <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
                        <IoIosSearch className="text-white text-xl" />
                    </div>
                    <input
                        type="text"
                        className="bg-transparent text-white outline-none pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
                        onChange={(e) => { handleSearch(e?.target?.value); setSearch(e?.target?.value) }}
                        placeholder="Search"
                        value={search}
                    />
                    <button
                        className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]"
                    >
                        <IoIosSearch className="text-white text-xl" />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Header;
