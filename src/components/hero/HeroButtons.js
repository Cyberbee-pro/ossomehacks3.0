import Image from "next/image";

export default function HeroButtons() {
  return (
    <div className="mt-4 mb-8 flex flex-wrap items-center justify-center gap-4 font-poppins">

      {/* Devfolio Button */}
      <button
        onClick={() => window.open("https://devfolio.co", "_blank")}
        className="
          flex items-center gap-3
          min-h-[48px]
          px-6
          rounded-lg
          bg-black-custom text-text font-semibold
          text-sm sm:text-base
          transition-transform duration-200
          hover:scale-105
        "
      >
        <span className="relative h-5 w-5">
          <Image
            src="/hero/hero-devfolio-icon.svg"
            alt=""
            width={20}
            height={20}
            className="object-contain"
            unoptimized
          />
        </span>
        Apply with Devfolio
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
