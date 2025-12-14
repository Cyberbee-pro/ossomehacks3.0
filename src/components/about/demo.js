import React from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-poppins',
});

export default function About() {
  return (
    <section className={`relative w-full max-w-7xl mx-auto py-20 px-4 md:px-24 overflow-hidden ${poppins.variable} font-sans`}>
      {/* Top Section: Title and Image */}
      <div className="flex flex-col lg:flex-row items-start justify-between mb-16 gap-8">
        
        {/* Title */}
        <div className="z-10 lg:w-5/12 relative">
           <h2 className="text-[#ffc627] text-5xl md:text-8xl font-bold leading-tight font-[family-name:var(--font-poppins)]">
            Unfolding the <br /> Experience
          </h2>
        </div>

        {/* Image Group */}
        <div className="relative lg:w-1/2 flex justify-end w-full">
           <div className="relative w-full max-w-[745px]">
              <div className="relative w-full aspect-[745/406] overflow-hidden rounded-lg">
                <Image 
                    src="/about/unfolding-experience.jpg" 
                    alt="Unfolding the Experience" 
                    fill
                    className="object-cover scale-[1.02]"
                    priority
                />
                {/* Decorative square from design */}
                <div className="absolute top-0 left-0 w-9 h-8 bg-[#1a6953] -translate-x-0 -translate-y-0"></div>
              </div>
           </div>
        </div>
      </div>

      {/* Bottom Section: Text */}
      <div className="w-full">
        <p className="text-[#e6dfc1] text-lg md:text-3xl font-medium leading-normal whitespace-pre-wrap font-[family-name:var(--font-poppins)]">
          OssomeHacks 3.0 builds upon the success of its previous editions, carrying forward a legacy of innovation, creativity, and collaboration. This 36-hour hackathon unites passionate tech enthusiasts to address real-world challenges with purpose and ingenuity. Designed to spark learning, problem-solving, and impactful innovation, OssomeHacks 3.0 goes beyond competition, celebrating the spirit of open-source development and empowering participants to create solutions that truly make a difference.
        </p>
      </div>
    </section>
  );
}
