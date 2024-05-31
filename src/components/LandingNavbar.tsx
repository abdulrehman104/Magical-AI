import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const LandingNavbar = () => {
  return (
    <nav className="p-4 flex items-center justify-between bg-transparent">
      <Link href="/" className="flex items-center">
        <div className="w-[50px] h-[50px] relative mr-4 ">
          <Image src="/logo.jpg" alt="Logo" fill className="rounded-full" />
        </div>
        <h1 className="text-white text-2xl font-bold">Logo</h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href="/dashboard">
          <Button variant="outline" className="rounded-full">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default LandingNavbar;
