import Header from "@/components/header/Header";
import RecentMusicCards from "@/components/recentmusiccard/RecentMusicCards";
import SongsCard from "@/components/songscards/SongsCard";
import Time from "@/components/utils/Time";
import { recentdata } from "@/data/recentplayeddata";
import React from "react";

const Home = () => {
  return (
    <main className=" bg-gradient-to-b bg-neutral-950/75  md:from-fuchsia-700 w-full md:m-2 rounded-md p-4 overflow-hidden overflow-y-auto h-full">
      <>
        <Header>
          {/* time */}

          <Time />
          {/* recent songs */}

          <div className=" grid grid-cols-2 md:grid-cols-3 w-full gap-y-5 gap-x-4 place-items-center my-3">
            {recentdata.map((item) => (
              <RecentMusicCards key={item.id} item={item} />
            ))}
          </div>
        </Header>
      </>

      {/* songs cards */}
      <main className="mt-8">
        {/* replace here with user name */}
        <div className="flex items-center my-4 justify-between">
          <h1 className=" text-xl font-semibold capitalize">Made for Food</h1>
          <p className=" text-xs cursor-pointer hover:text-neutral-400 font-semibold capitalize">
            see all
          </p>
        </div>
        {/* all songs cards */}
        <div>
          <SongsCard />
        </div>
      </main>
    </main>
  );
};

export default Home;
