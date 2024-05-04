import Heading from "@/components/Heading"
import { MusicIcon } from "lucide-react"


const Music = () => {
  return (
      <div>
           <Heading
        title="Music Generation"
        desc="Turn your prompt into music"
        Icon={MusicIcon}
        color= "text-emerald-500"
        bgColor= "bg-emerald-500/10"
      />
    </div>
  )
}

export default Music