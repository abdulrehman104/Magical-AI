"use client";
import TypewriterComponent from "typewriter-effect";
import Link from "next/link";

import { Button } from "./ui/button";

const LandingHero = () => {
  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The Best AI tool for </h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
          <TypewriterComponent
            options={{
              strings: [
                "Chatbot",
                "Image Generation",
                "Video Generation",
                "Music Generation",
                "Code Generation",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="font-light text-zinc-400 text-sm md:text-xl">
        Create content using AI 10X faster
      </div>
      <div>
        <Link href="/dashboard">
          <Button className="bg-gradient-to-r from-purple-400 to-pink-600 rounded-full font-semibold p-6 md:p-8 md:text-lg ">Start Generating for free</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingHero;
