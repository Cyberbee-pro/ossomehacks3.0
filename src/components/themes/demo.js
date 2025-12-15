import React from 'react';
import Image from 'next/image';

const Themes = () => {
  const themes = [
    {
      id: 1,
      title: 'Ed-Tech',
      image: '/tracks/edtech.png',
    },
    {
      id: 2,
      title: 'Agritech',
      image: '/tracks/Agritech.png',
    },
    {
      id: 3,
      title: 'Fintech',
      image: '/tracks/fintech.png',
    },
    {
      id: 4,
      title: 'Healthtech',
      image: '/tracks/healthtech.png',
    },
    {
      id: 5,
      title: 'Open Innovation',
      image: '/tracks/openinovation.png',
    },
    {
      id: 6,
      title: 'Web3 & Crypto',
      image: '/tracks/web3.png',
    },
  ];

  return (
    <section className="bg-[#1A6953] py-20 px-6 md:px-10 lg:px-16 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-bold text-[#FFC627] text-center mb-12 md:mb-16 tracking-wide font-poppins">
          Themes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 justify-items-center">
          {themes.map((theme) => (
            <div
              key={theme.id}
              className="transition-transform duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer"
            >
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[26rem] lg:w-[22rem] lg:h-[28rem]">
                <Image
                  src="/tracks/stampLast.png"
                  alt="stamp border outer"
                  width={262}
                  height={369}
                  className="absolute inset-0 object-cover z-20 scale-[1.05]"
                />

                <Image
                  src="/tracks/stampPenultimate.png"
                  alt="stamp border middle"
                  width={220}
                  height={310}
                  className="absolute inset-4 sm:inset-5 md:inset-6 lg:inset-7 object-cover z-30"
                />

                <div className="absolute inset-0 flex items-start justify-center pt-12 sm:pt-16 md:pt-20 z-50 pointer-events-none">
                  <span
                    className="text-3xl leading-tight sm:text-4xl md:text-5xl font-semibold text-center drop-shadow mt-2 sm:mt-1 md:-mt-2"
                    style={{ color: '#ffffff' }}
                  >
                    {theme.id === 6 ? (
                      <>
                        Web3 &
                        <br />
                        Crypto
                      </>
                    ) : (
                      theme.title
                    )}
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center z-40">
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-56 lg:h-56">
                    <Image
                      src={theme.image}
                      alt={theme.title}
                      width={200}
                      height={200}
                      className="object-contain drop-shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Themes;
