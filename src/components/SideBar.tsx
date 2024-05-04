"use client";

// cn library
import { cn } from "@/lib/utils";

// Lucid react icons
import {
  CodeIcon,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  MusicIcon,
  SettingsIcon,
  VideoIcon,
} from "lucide-react";

// Next.js Components
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    path: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Geeration",
    icon: ImageIcon,
    path: "/image",
    color: "text-pink-700",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    path: "/video",
    color: "text-orange-700",
  },
  {
    label: "Music Generation",
    icon: MusicIcon,
    path: "/music",
    color: "text-emerald-500",
  },
  {
    label: "Code Generation",
    icon: CodeIcon,
    path: "/code",
    color: "text-green-700",
  },
  {
    label: "Setting",
    icon: SettingsIcon,
    path: "/setting",
    color: "white",
  },
];

const SideBar = () => {
  const pathName = usePathname();
  return (
    <div className=" space-y-4 p-4 flex flex-col h-full bg-gray-900 text-white">
      <div className="px-3 py-2 flex-1 ">
        <Link href="/dashboard" className="flex items-center mb-14">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-lg mr-4"
          />
          <h1 className="text-2xl font-bold">Logo</h1>
        </Link>
        <div className="space-y-4">
          {routes.map((route) => (
            <Link
              href={route.path}
              key={route.label}
              className={cn(
                "text-sm p-3 w-full flex justify-start font-medium cursor-pointer rounded-lg hover:bg-gray-700 transition",
                pathName == route.path
                  ? "text-white bg-gray-700"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center  ">
                <route.icon className={cn("h-5 w-5 mr-2", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
