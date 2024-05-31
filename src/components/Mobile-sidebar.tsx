"use client";

// Lucid React Icon
import { MenuIcon } from "lucide-react";

// Shadcn Components
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Custom Components
import SideBar from "@/components/SideBar";

// React Hooks
import { useEffect, useState } from "react";

const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);
    
  useEffect(() => {
    setIsMounted(true);
  },[]);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" className=" md:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <SideBar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
