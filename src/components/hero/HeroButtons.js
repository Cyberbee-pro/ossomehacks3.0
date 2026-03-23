import Image from "next/image";
import React from "react";
import { useWebHaptics } from "web-haptics/react";

export default function HeroButtons() {
  const { trigger } = useWebHaptics();

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className="mt-4 mb-8 flex flex-wrap items-center justify-center gap-4 font-poppins">

      {/* Register Button */}
      <button
        onClick={() => {
          trigger("heavy");
          window.open("https://unstop.com/hackathons/ossome-hacks-30-srm-institute-of-science-and-technology-kattankulathur-chennai-1663473", "_blank");
        }}
        className="group flex items-center justify-center gap-3 min-h-[48px] w-full sm:w-[220px] px-6 rounded-lg border-4 border-black-custom bg-black text-text font-semibold text-sm sm:text-base transition-all duration-200 hover:scale-105"
      >
        Register Now
      </button>

      {/* Discord Button */}
      <button
        onClick={() => {
          trigger("heavy");
          window.open("https://discord.gg/VBkKwAGKUU", "_blank");
        }}
        className="group flex items-center justify-center gap-3 min-h-[48px] w-full sm:w-[220px] px-6 rounded-lg border-4 border-black-custom bg-transparent text-black-custom font-semibold text-sm sm:text-base transition-all duration-200 hover:scale-105 hover:bg-black-custom hover:text-text"
      >
        <span className="relative h-5 w-5 transition-all duration-200 group-hover:invert">
          <Image
            src="/hero/hero-discord-icon.svg"
            alt=""
            width={20}
            height={20}
            className="object-contain hover:bg-text"
            unoptimized
          />
        </span>
        Discord Server
      </button>
    </div>
  );
}
