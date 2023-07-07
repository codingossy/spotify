"use client";

import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { FaUserAlt } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import avatar from "../../public/avatar.jpg";
import { Button } from "../ui/button";

interface HeaderProps {
  children: React.ReactNode;
}
const Header = ({ children }: HeaderProps) => {
  const router = useRouter();

  const profile = {
    user: "ossy",
    id: 44444,
    image:
      "https://th.bing.com/th/id/R.a0498d7322de9e637a2963bd4ffc966d?rik=4hjdXbad8SZ4%2fA&pid=ImgRaw&r=0",
  };

  return (
    <div className=" h-fit ">
      {/* back buttons */}
      <div className="w-full mb-7 items-center justify-between flex ">
        <div className="hidden  md:flex items-center gap-x-3">
          <button
            onClick={() => router.back()}
            className=" rounded-full bg-black/75 transition w-10 h-10 items-center justify-center flex cursor-pointer hover:opacity-70"
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className=" rounded-full bg-black/75 transition w-10 h-10 items-center justify-center flex cursor-pointer hover:opacity-70"
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>

        {/*mobile screen */}
        <div className=" flex md:hidden items-center gap-x-3">
          <button
            className=" rounded-full bg-black/75 transition w-10 h-10 items-center justify-center flex cursor-pointer hover:opacity-70"
            onClick={() => router.push("/")}
          >
            <HiHome className="text-neutral-300" size={20} />
          </button>
          <button
            className=" rounded-full bg-black/75 transition w-10 h-10 items-center justify-center flex cursor-pointer hover:opacity-70"
            onClick={() => router.push("/search")}
          >
            <BiSearch className="text-neutral-300" size={20} />
          </button>
        </div>

        {/* user */}
        <div className=" flex items-center gap-x-4">
          {profile ? (
            <div onClick={() => router.push("/account")}>
              <Image
                src={profile?.image || avatar}
                width={500}
                height={500}
                className="w-8 h-8 cursor-pointer object-cover rounded-full"
                alt="image"
              />
            </div>
          ) : (
            <div className="flex flex-row gap-x-2 items-center">
              <Button className=" capitalize">sign in</Button>
            </div>
          )}
        </div>
      </div>

      {/* inner  */}
      <div>{children}</div>
    </div>
  );
};

export default Header;
