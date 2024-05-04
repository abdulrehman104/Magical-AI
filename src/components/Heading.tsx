import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface IHeading {
  title: string;
  desc: string;
  Icon: LucideIcon;
  color: string;
  bgColor: string;
}

const Heading = ({ title, desc, Icon, color, bgColor }: IHeading) => {
  return (
    <div className="flex items-center gap-x-3 px-4 lg:px-8">
      <div className={cn("p-2 w-fit rounded-md", bgColor)}>
        <Icon className={cn("w-10 h-10", color)} />
      </div>
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
};

export default Heading;
