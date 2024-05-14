// Next.js Components
import Image from "next/image";

// Custom Components
import MobileSidebar from "@/components/Mobile-sidebar";


const Navbar = () => {
  return (
    <div className="flex items-center p-6 w-full ">
      <MobileSidebar />
      <div className="w-full flex justify-end ">
        <Image
          src="/logo.png"
          alt="User"
          width={30}
          height={30}
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Navbar;
