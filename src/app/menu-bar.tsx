"use client";
import { Icons } from "@/components/icons";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const menu = [
  {
    name: "Home",
    icon: Icons.home,
    path: "/",
  },
  {
    name: "Chat",
    icon: Icons.chat,
    path: "/chat",
  },
  {
    name: "Task",
    icon: Icons.task,
    path: "/task",
  },
  {
    name: "Search",
    icon: Icons.search,
    path: "/search",
  },
  {
    name: "Schedule",
    icon: Icons.schedule,
    path: "/schedule",
  },
];
const MenuBar = () => {
  const pathName = usePathname();
  const isActive = (path: string) => {
    return pathName === path;
  };

  return (
    <div className="w-20 h-screen  px-4 pt-4 pb-6 bg-white shadow flex-col justify-between items-center inline-flex">
      <div className="flex-col justify-center items-center gap-12 flex">
        <div className="w-14 h-14 py-3 bg-slate-500 rounded-2xl justify-center items-center inline-flex">
          <div className="w-4 h-8 text-white text-xl font-bold leading-loose">
            T
          </div>
        </div>
        <div className="w-full flex-col justify-center items-center gap-8 flex">
          {menu.map((item) => (
            <Link
              href={item.path}
              className="w-full h-10 flex justify-center items-center"
            >
              <item.icon
                className="w-6 h-6 relative"
                fill={isActive(item.path) ? "#4D9189" : "none"}
              />
            </Link>
          ))}
          <div
            onClick={() => signOut()}
            className="cursor-pointer w-full h-10 flex justify-center items-center"
          >
            <Icons.signOut className="w-6 h-6 relative" />
          </div>
        </div>
      </div>
      <div className="w-6 h-6 relative" />
    </div>
  );
};

export default MenuBar;
