import { LayoutDashboard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
    color: "text-sky-500",
  },
];

const SideBar = () => {
  return (
    <div className=" space-y-4 p-4 flex flex-col h-full bg-gray-900 text-white">
      <div className="px-3 py-2 ">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="mr-4"
          />
          <h1 className="text-2xl font-bold">Logo</h1>
        </Link>
        <div className="space-y-4">
          {routes.map((route) => (
            <Link
              href={route.path}
              key={route.label}
              className="flex justify-start"
            >
              <div className="flex items-center ">
                <route.icon className={`'h-8 w-8 mr-5' ${route.color}`} />
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
