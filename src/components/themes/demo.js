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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-10 justify-items-center">
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
                  className="absolute top-4 sm:top-5 sm:scale-105 md:top-5 md:scale-100 lg:top-6 left-4 sm:left-5 md:left-6 lg:left-5 right-0.5 sm:right-0 md:right-2 lg:right-7 bottom-0.5 sm:bottom-0 md:bottom-6 lg:bottom-7 object-cover z-30"
                />

                <div className={`absolute inset-0 flex items-start z-50 pointer-events-none ${theme.id === 5 ? 'pt-6 sm:pt-6 md:pt-12 lg:pt-12' : theme.id === 6 ? 'pt-6 sm:pt-6 md:pt-12 lg:pt-12' : 'pt-11 sm:pt-10 md:pt-12 lg:pt-12'} ${theme.id === 5 ? 'justify-center md:justify-center lg:justify-center' : theme.id === 6 ? 'justify-center sm:-translate-x-3 md:justify-center' : 'justify-center md:justify-start lg:justify-start'} ${theme.id === 1 ? 'md:pl-20 lg:pl-[4.75rem] sm:-translate-x-2' : theme.id === 2 ? 'md:pl-18 lg:pl-18 sm:-translate-x-2' : theme.id === 3 ? 'md:pl-22 lg:pl-[4.75rem] sm:-translate-x-2' : theme.id === 4 ? 'md:pl-14 lg:pl-14 sm:-translate-x-3' : theme.id === 5 ? 'md:-translate-x-6 lg:-translate-x-11 sm:-translate-x-3' : theme.id === 6 ? 'md:-translate-x-6 lg:-translate-x-12' : 'md:pl-18 lg:pl-16'}`}>
                  <span
                    className={`text-3xl leading-tight sm:text-4xl md:text-3xl font-semibold drop-shadow mt-2 sm:mt-1 md:-mt-2 lg:mt-0 ${theme.id === 6 ? 'md:text-3xl text-center md:text-center' : theme.id === 5 ? 'md:text-3xl text-center md:text-center lg:text-center' : 'md:text-4xl text-center md:text-left lg:text-left'}`}
                    style={{ color: '#ffffff' }}
                  >
                    {theme.id === 6 ? (
                      <>
                        Web3 &
                        <br />  
                        Crypto
                      </>
                    ) : theme.id === 5 ? (
                      <>
                        Open
                        <br />
                        Innovation
                      </>
                    ) : (
                      theme.title
                    )}
                  </span>
                </div>

                <div className={`absolute inset-0 flex items-center justify-center z-40 ${theme.id === 1 ? 'translate-y-2 sm:-translate-x-2 sm:-translate-y-2 md:-translate-x-4 md:-translate-y-9 lg:-translate-x-8 lg:-translate-y-10' : theme.id === 2 ? 'translate-y-[1.375rem] sm:-translate-x-2 sm:-translate-y-3 md:-translate-x-5 md:-translate-y-9 lg:-translate-x-8 lg:-translate-y-[2.375rem]' : theme.id === 3 ? 'translate-y-[1.375rem] sm:-translate-x-2 sm:-translate-y-3 md:-translate-x-5 md:-translate-y-9 lg:-translate-x-8 lg:-translate-y-[2.375rem]' : theme.id === 4 ? 'translate-y-2 -translate-x-1 sm:translate-x-2 sm:translate-y-1 md:-translate-x-5 md:-translate-y-9 scale-110 lg:-translate-x-10 lg:-translate-y-12' : theme.id === 5 ? 'translate-y-3 sm:-translate-x-2 sm:-translate-y-2 md:-translate-x-4 md:-translate-y-9 lg:-translate-x-8 lg:-translate-y-10' : theme.id === 6 ? 'translate-x-0.5 translate-y-14 sm:-translate-x-3 sm:translate-y-8 md:-translate-x-[18px] md:translate-y-2 lg:-translate-x-7.5 lg:translate-y-2' : ''}`}>
                  <div className={`relative ${theme.id === 1 ? 'w-48 h-48 sm:w-56 sm:h-56' : theme.id === 2 ? 'w-44 h-44 sm:w-52 sm:h-52' : theme.id === 3 ? 'w-44 h-44 sm:w-52 sm:h-52' : theme.id === 4 ? 'w-52 h-52 sm:w-64 sm:h-64' : theme.id === 5 ? 'w-44 h-44' : theme.id === 6 ? 'w-52 h-52' : 'w-36 h-36'} md:w-52 md:h-52 lg:w-56 lg:h-56`}>
                    <Image
                      src={theme.image}
                      alt={theme.title}
                      width={200}
                      height={200}
                      className={`object-contain drop-shadow-lg ${theme.id === 4 ? 'lg:scale-110' : theme.id === 5 ? 'md:scale-90 lg:scale-90' : ''}`}
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
