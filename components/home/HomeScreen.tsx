import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface HomeScreenProps {
  icon: IconType;
  label: string;
  active: boolean;
  href: string;
}

const HomeScreen = ({ icon: Icon, label, active, href }: HomeScreenProps) => {
  return (
    <Link
      className={`flex flex-row items-center gap-x-3 font-semibold capitalize cursor-pointer transition ${
        active ? " text-white" : " text-neutral-600"
      }`}
      href={href}
    >
      <Icon size={25} />
      <p>{label}</p>
    </Link>
  );
};

export default HomeScreen;
