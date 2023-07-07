import React from "react";
//!icons
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import PlayListsandPodCasts from "../utils/PlayListsandPodCasts";
import Songs from "../utils/Songs";
import { songs } from "@/data/songs";

// ! components

// *** data from side bar
// **** here we first check if the user is registered
// **** also check if they aare subscribers
// **** then finally if they are both users and subscribers they can uploaid songs



const Library = () => {
  const OnPress = () => {};
  return (
    <main className=" flex flex-col ">
      {/* library */}
      <div className=" flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={20} />
          <p className=" text-sm capitalize font-semibold">your library</p>
        </div>
        <div className="flex items-center gap-x-3">
          <AiOutlinePlus
            onClick={OnPress}
            size={20}
            className="text-neutral-400 cursor-pointer hover:text-white 
            transition"
          />
          <AiOutlineArrowRight size={18} className=" text-neutral-400" />
        </div>
      </div>
      {/* playlists abd podcasts */}
      <div>
        <PlayListsandPodCasts />
      </div>
      {/* songs list */}
      <div className="flex flex-col gap-y-2 mt-4">
        {songs.map((item) => (
            <Songs item={item} key={item.id}  />
        ))}
      </div>
    </main>
  );
};

export default Library;
