"use client";
import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
// tailwind merge
import { twMerge } from "tailwind-merge";
import Box from "../utils/Box";
import HomeScreen from "../home/HomeScreen";
import Library from "../library/Library";

interface SidebarProps {
  children: React.ReactNode;
}

//** */ data from layout
const Sidebar = ({ children }: SidebarProps) => {
  const pathname = usePathname();

  //** */ paths
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        href: "/search",
        active: pathname === "/search",
      },
    ],
    [pathname]
  );

  return (
    <nav className="flex h-full">
      <div className=" hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        {/* route params */}
          <div className="flex bg-neutral-900 rounded-lg h-fit flex-col gap-y-4 px-4 py-4">
            {routes.map((item) => (
              <HomeScreen key={item.label} {...item} />
            ))}
          </div>
 
        {/* music list */}
        <Box className=" overflow-y-auto bar-width h-full p-4">
          <Library />
        </Box>
      </div>

            {/*main homepages */}
      <main className="h-full flex-1">
        {children}
      </main>
    </nav>
  );
};

export default Sidebar;
