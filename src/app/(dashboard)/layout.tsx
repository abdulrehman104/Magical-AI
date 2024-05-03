import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:flex-col md:w-72 md:fixed bg-gray-900">
        <SideBar/>
      </div>
      <div className="md:pl-72">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
