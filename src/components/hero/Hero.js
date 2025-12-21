import Image from 'next/image';
import Timer from './Timer';
import HeroButtons from './HeroButtons';

export default function Hero() {
  return (
    <section 
      className="hero-section" 
      style={{
        position: 'relative',
        width: '100vw',
        minHeight: '100svh',
        backgroundColor: '#1a6953',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(10px,2vw,32px)'
      }}
    >
      {/* Background Layer */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: '#1a6953',
        zIndex: 0
      }} />

      {/* Cover Main Vector */}
      <div
        className="hero-tomb-bg"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh', 
          zIndex: 1,
          pointerEvents: 'none',
          overflow: 'hidden'
        }}
      >
        <Image
          src="/hero/hero-bg-ossome.svg"
          alt=""
          fill
          className="hero-tomb-img"
          style={{ objectFit: 'fill', objectPosition: 'top center' }}
          priority
          unoptimized
        />
      </div>

      {/* Left Elephant */}
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

      {/* Right Elephant */}
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

      {/* Main Content Container */}
      <div style={{
        position: 'relative',
        zIndex: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '1200px',
        width: '100%',
        marginTop: 'clamp(-120px, -16vw, -200px)'
      }}>
        {/* Main Title Text -OSSOME */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '0px',
            marginTop: 'clamp(10px, 7vw, 120px)', // more responsive
          }}
        >
          {/* OSSOME text */}
          <div style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(32px,8vw,96px)',
            fontWeight: 600,
            color: '#ffc627',
            textAlign: 'center',
            lineHeight: '0.77',
            WebkitTextStroke: 'clamp(2.5px,0.8vw,8px) #1f4047',
            paintOrder: 'stroke fill',
            position: 'relative',
            left: 'clamp(32px,8vw,96px)',
            top: '0',
            marginBottom: 'clamp(-14px,-2vw,2px)' // closest spacing yet
          }}>
            OSSOME
          </div>
          {/* hacks text */}
          <div style={{
            position: 'relative',
            display: 'inline-block',
          }}>
            <div style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(72px,19vw,232px)',
              fontWeight: 600,
              color: '#1f4047',
              textAlign: 'center',
              lineHeight: '1',
              WebkitTextStroke: 'clamp(2px,0.5vw,6px) #ffc627',
              paintOrder: 'stroke fill',
              marginTop: '0'
            }}>
              हैक्स
            </div>
            {/* Version Badge "3" */}
            <div style={{
              position: 'absolute',
              left: 'calc(100% + 4px)', 
              top: 'clamp(8px,2vw,24px)', 
              height: '100%',
              maxWidth: 'clamp(65px,8vw,95px)',
              width: 'auto',
              aspectRatio: '120/190',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
            }}>
              <Image
                src="/hero/hero-version-bg.svg"
                alt="3.0"
                fill
                style={{ objectFit: 'contain', height: '100%' }}
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <div style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 'clamp(12px,2vw,24px)',
          fontWeight: 600,
          color: '#1f4047',
          textAlign: 'center',
          marginBottom: 'clamp(6px,2vw,15px)',
          marginTop: 'clamp(12px,2vw,24px)', 
          maxWidth: '90vw',
          lineHeight: 'normal'
        }}>
          <span style={{ color: '#1f4047' }}>Empowering</span>
          {' Innovation, '}
          <span style={{ color: '#1f4047' }}>One</span>
          {' Awesome '}
          <span style={{ color: '#1f4047' }}>Hack</span>
          {' at '}
          <span style={{ color: '#1f4047' }}>a</span>
          {' Time!'}
        </div>

        {/* Buttons */}
        <HeroButtons />

        {/* Timer */}
        <div style={{ marginTop: '0px', marginBottom: '0px' }}>
          <Timer />
        </div>
      </div>
    </section>
  );
}
