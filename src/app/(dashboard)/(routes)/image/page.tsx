import Heading from "@/components/Heading";
import { ImageIcon } from "lucide-react";

const ImageGeneration = () => {
  return (
    <div>
      <Heading
        title="Image Generation"
        desc="Turn your prompt into a image"
        Icon={ImageIcon}
        color="text-pink-700"
        bgColor="bg-pink-700/10"
      />
    </div>
  );
};

export default ImageGeneration;
