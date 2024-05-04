"use client";

// CN library
import { cn } from "@/lib/utils";

// lucid icons
import {
  ArrowRight,
  CodeIcon,
  ImageIcon,
  MessageSquare,
  MusicIcon,
  VideoIcon,
} from "lucide-react";

// Card Components
import { Card } from "@/components/ui/card";

// Next Hook
import { useRouter } from "next/navigation";


const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    path: "/conversation",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Image Geeration",
    icon: ImageIcon,
    path: "/image",
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    path: "/video",
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
  },
  {
    label: "Music Generation",
    icon: MusicIcon,
    path: "/music",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Code Generation",
    icon: CodeIcon,
    path: "/code",
    bgColor: "bg-green-700/10",
  },
];

const Dashboard = () => {
  const router = useRouter();
  return (
    <div>
      <div className="space-y-4 mb-14">
        <h2 className="text-4xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-center font-light text-muted-foreground">
          Chat with the smartest AI- Experience the power of AI
        </p>
      </div>
      <div className="px-8 space-y-6 md:px-20 lg:px-32">
        {tools.map((tool) => (
          <Card
            className="border-black/10 flex items-center justify-between p-4 hover:shadow-lg cursor-pointer"
            onClick={() => router.push(tool.path)}
          >
            <div className="flex items-center gap-x-2">
              <div className={cn("w-fit p-2 rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="text-lg font-bold">{tool.label}</div>
            </div>
            <ArrowRight className="w-6 h-6" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
