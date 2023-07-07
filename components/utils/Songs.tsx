import Image from "next/image";
import React from "react";

interface ItemProps {
  artist: string;
  coverImage: string;
  title: string;
  musicUrl: string;
  duration: string;
  genre: string;
  id: number;
}

interface SongsProps {
  item: ItemProps;
}

const Songs = ({ item }: SongsProps) => {
  return (
    <div className=" flex items-center  hover:bg-neutral-800/50  gap-x-3 w-full p-2 cursor-pointer rounded-md">
      <div className=" rounded-md">
        <Image
          src={item.coverImage}
          width={1000}
          height={1000}
          alt="cover image"
          className=" object-cover w-12 h-12 rounded-md"
        />
      </div>
      <div>
            <p className=" text-neutral-200 text-sm capitalize font-semibold line-clamp-1">{item.title}</p>
            <p className=" text-neutral-400 text-xs caption-top capitalize">{item.artist}</p>
      </div>
    </div>
  );
};

export default Songs;
