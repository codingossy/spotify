"use client";

import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface RecentMusicCardProps {
  name: string;
  image: string | StaticImageData;
  href: string;
  id: number;
}

interface RecentMusicProps {
  item: RecentMusicCardProps;
}

const RecentMusicCards = ({ item }: RecentMusicProps) => {
  const router = useRouter();
  //!!!!! dummy
  const profile = {
    user: "ossy",
    id: 44444,
    image:
      "https://th.bing.com/th/id/R.a0498d7322de9e637a2963bd4ffc966d?rik=4hjdXbad8SZ4%2fA&pid=ImgRaw&r=0",
  };
  const onClick = () => {
    if (!profile) {
      console.warn("hello");
    }
    router.push(item.href);
  };

  return (
    <button onClick={onClick} className="flex cursor-pointer md:hover:bg-neutral-700 transition items-center gap-x-5 w-full h-20 rounded-md md:bg-neutral-800">
      <Image
        src={item.image}
        className=" w-12 h-12 md:w-20 md:h-20 rounded-tl-md rounded-bl-md  object-cover"
        width={500}
        height={500}
        alt="recent music image"
      />
      <p className=" text-xs md:text-base font-semibold ">{item.name}</p>
    </button>
  );
};

export default RecentMusicCards;
