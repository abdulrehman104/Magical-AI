import Heading from "@/components/Heading"
import { SettingsIcon } from "lucide-react"

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
    </div>
  )
}

export default Setting