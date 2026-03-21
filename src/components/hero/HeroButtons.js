import Image from "next/image";
import React from "react";

export default function HeroButtons() {
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

      {/* Devfolio Button
      <div 
        className="apply-button" 
        data-hackathon-slug="ossome-hacks" 
        data-button-theme="dark"
      ></div> */}
      {/* Discord Button */}
      <button
        onClick={() =>
          window.open("https://www.githubsrmist.in/", "_blank")
        }
        className="
          group flex items-center gap-3
          min-h-[48px]
          px-6
          rounded-lg
          border-4 border-black-custom
          bg-black text-text font-semibold
          text-sm sm:text-base
          transition-all duration-200
          hover:scale-105
        "
      >
        Register Now
      </button>

      {/* Discord Button */}
      <button
        onClick={() =>
          window.open("https://discord.com/invite/githubsrm", "_blank")
        }
        className="
          group flex items-center gap-3
          min-h-[48px]
          px-6
          rounded-lg
          border-4 border-black-custom
          bg-transparent text-black-custom font-semibold
          text-sm sm:text-base
          transition-all duration-200
          hover:scale-105 hover:bg-black-custom hover:text-text
        "
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
