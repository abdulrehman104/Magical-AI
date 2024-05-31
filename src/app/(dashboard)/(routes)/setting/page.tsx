import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { SettingsIcon } from "lucide-react";

const Setting = () => {
  return (
    <div>
      <Heading
        title="Setting"
        desc="Our most advance conversation AI model"
        Icon={SettingsIcon}
        color="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm mt-4">
          You are currenlty in a pro plan{" "}
        </div>
        <Button className="bg-violet-500">Manage Subscription</Button>
      </div>
    </div>
  );
};

export default Setting;
