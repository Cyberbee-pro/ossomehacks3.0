
import Image from 'next/image';
import Timer from './Timer';
import HeroButtons from './HeroButtons';
import AnimatedHacks from './AnimatedHacks';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-2 sm:px-6 md:px-10 lg:px-0 bg-[#1a6953]">
      {/* Background Layer */}
    <div className="min-h-screen hero-tomb-bg bg-[url(/hero/hero-bg-ossomesm.svg)] bg-cover md:bg-[url(/hero/hero-bg-ossomemd2.svg)] md:bg-fill bg-local bg-center bg-auto absolute inset-0 w-full h-full z-1 pointer-events-none overflow-hidden" />

      <div className="absolute inset-0 bg-[#1a6953] z-0" />


    {/* old code  */}
      {/* Cover Main Vector */}
      {/* <div className="hero-tomb-bg absolute inset-0 w-full h-full z-1 pointer-events-none overflow-hidden">
        <Image
          src="/hero/hero-bg-ossome.svg"
          alt=""
          fill
          className="hero-tomb-img"
          priority
          unoptimized
        />
      </div> */}


      {/* Main Content Container */}
      <div className="relative z-3 flex flex-col items-center justify-center w-full max-w-5xl min-h-[60vh] flex-1 mx-auto px-2 sm:px-6 md:px-10">
        {/* Main Title Text - OSSOME */}
        <div className="relative flex flex-col items-center mt-[clamp(10px,7vw,120px)] mb-0 w-full">
          {/* OSSOME text */}
          <div
            className="font-poppins font-bold text-center text-[clamp(45px,8vw,96px)] leading-[0.77] text-[#ffc627]"
            style={{
              WebkitTextStroke: 'clamp(2.5px,0.8vw,8px) #1f4047',
              paintOrder: 'stroke fill',
              position: 'relative',
              left: '12px',
              marginBottom: 'clamp(-14px,-2vw,2px)'
            }}
          >
            OSSOME
          </div>


          <div className="relative flex items-start justify-center gap-[4px]">
            <div
              className="font-poppins font-bold text-center text-[clamp(97px,19vw,232px)] leading-[1] text-[#1f4047]"
              style={{
                WebkitTextStroke: 'clamp(2px,0.5vw,6px) #ffc627',
                paintOrder: 'stroke fill',
                marginTop: 0
              }}
            >
              हैक्स
            </div>
          <div
            className="relative flex items-start justify-start shrink-0"
            style={{
              marginTop: 'clamp(8px,2vw,24px)',
              height: 'clamp(72px,19vw,232px)',
              maxWidth: 'clamp(65px,8vw,95px)',
              width: 'auto',
              aspectRatio: '120/190',
            }}
          >
            <Image
              src="/hero/hero-version-bg.svg"
              alt="3.0"
              fill
              style={{ objectFit: 'contain' }}
              unoptimized
            />
          </div>
        </div>  
          {/* <AnimatedHacks /> */}
        </div>

        {/* Subtitle */}
        <div className="font-poppins font-semibold text-center text-[clamp(18px,2vw,24px)] text-[#1f4047] max-w-[90vw] leading-normal mt-[clamp(12px,2vw,24px)] mb-[clamp(6px,2vw,15px)]">
          <span className="text-[#1f4047]">Empowering</span>
          {' Innovation, '}
          <span className="text-[#1f4047]">One</span>
          {' Awesome '}
          <span className="text-[#1f4047]">Hack</span>
          {' at '}
          <span className="text-[#1f4047]">a</span>
          {' Time!'}
        </div>

        {/* Buttons */}
        <HeroButtons />

        {/* Timer */}
        <div className="mt-0 mb-0 w-full flex justify-center">
          <Timer />
        </div>
      </div>

      {/* Elephants Wrapper at bottom, above cream area */}
      <div className="hero-elephants-wrapper">
        <div className="hero-elephant hero-elephant-left">
          <Image
            src="/hero/hero-elephant.svg"
            alt="Decorative elephant"
            fill
            style={{ objectFit: 'contain' }}
            priority
            unoptimized
          />
        </div>
        <div className="hero-elephant hero-elephant-right">
          <Image
            src="/hero/hero-elephant.svg"
            alt="Decorative elephant"
            fill
            style={{ objectFit: 'contain' }}
            priority
            unoptimized
          />
        </div>
      </div>
    </section >
  );
}
