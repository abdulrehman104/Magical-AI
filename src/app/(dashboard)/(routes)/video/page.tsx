import Heading from "@/components/Heading";
import { VideoIcon } from "lucide-react";

const VideoGeneration = () => {
  return (
    <div>
      <Heading
        title="Video Generation"
        desc="Turn your prompt into video"
        Icon={VideoIcon}
        color="text-orange-700"
        bgColor="bg-orange-700/10"
      />
    </div>
  );
};

export default VideoGeneration;
