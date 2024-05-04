import Heading from "@/components/Heading";
import { CodeIcon } from "lucide-react";

const CodeGeneration = () => {
  return (
    <div>
      <Heading
        title="Code Generation"
        desc="Generate code using descriptive text"
        Icon={CodeIcon}
        color =""
        bgColor="bg-green-700/10"
      />
    </div>
  );
};

export default CodeGeneration;
