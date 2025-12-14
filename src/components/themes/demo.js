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
    <section className="bg-gradient-to-br from-teal-700 to-teal-600 py-20 px-6 md:px-10 lg:px-16 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-bold text-yellow-400 text-center mb-12 md:mb-16 tracking-wide font-poppins">
          Themes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 justify-items-center">
          {themes.map((theme) => (
            <div
              key={theme.id}
              className="transition-transform duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer"
            >
              {/* Outermost stamp layer */}
              <div className="relative w-64 h-80">
                <Image
                  src="/tracks/stampLast.png"
                  alt="stamp border outer"
                  width={262}
                  height={369}
                  className="absolute inset-0 object-cover z-20"
                />
                
                {/* Second stamp layer */}
                <Image
                  src="/tracks/stampPenultimate.png"
                  alt="stamp border middle"
                  width={220}
                  height={310}
                  className="absolute object-cover z-30"
                  style={{ right: '17px', top: '53.5%', transform: 'translateY(-50%)' }}
                />

                {/* Title overlay layer */}
                <div className="absolute inset-0 flex items-start justify-center pt-12 z-50 pointer-events-none">
                  <span
                    className="text-4xl md:text-5xl font-semibold text-center drop-shadow"
                    style={{ color: '#ffffff', marginTop: '-20px' }}
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

                {/* Content inside */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-40">
                  <div 
                    className={`relative ${theme.id === 4 ? 'w-80 h-80 md:w-[26rem] md:h-[26rem]' : 'w-52 h-52 md:w-56 md:h-56'}`}
                    style={{
                      marginTop: theme.id === 1 ? '20px' : theme.id === 2 ? '28px' : theme.id === 4 ? '120px' : theme.id === 5 ? '-8px' : theme.id === 6 ? '112px' : theme.id === 3 ? '24px' : '28px',
                      marginLeft: theme.id === 4 ? '120px' : theme.id === 6 ? '48px' : '0px'
                    }}
                  >
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
