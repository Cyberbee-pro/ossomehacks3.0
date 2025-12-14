import Image from 'next/image';
import Timer from './Timer';
import HeroButtons from './HeroButtons';

export default function Hero() {
  return (
    <section 
      className="hero-section" 
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#1a6953',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
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
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '105%',
        zIndex: 1,
        pointerEvents: 'none'
      }}>
        <Image
          src="/hero/hero-bg-ossome.svg"
          alt=""
          fill
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
          priority
          unoptimized
        />
      </div>

      {/* Left Elephant */}
      <div style={{
        position: 'absolute',
        bottom: '17%',
        left: '8%',
        width: '150px',
        height: '120px',
        zIndex: 2
      }}>
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
      <div style={{
        position: 'absolute',
        bottom: '17%',
        right: '8%',
        width: '150px',
        height: '120px',
        transform: 'scaleX(-1)',
        zIndex: 2
      }}>
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
        marginTop: '-80px'
      }}>
        {/* Main Title SVG - OSSOME hcks */}
        <div style={{
          position: 'relative',
          width: '800px',
          height: '320px',
          marginBottom: '0px'
        }}>
          <Image
            src="/hero/hero-text-overlay.svg"
            alt="OSSOME हैक्स"
            fill
            style={{ objectFit: 'contain' }}
            unoptimized
          />
          {/* Version Badge "3" */}
          <div style={{
            position: 'absolute',
            width: '120px',
            top: '170px',
            bottom: '0',
            right: '130px'
          }}>
            <Image
              src="/hero/hero-version-bg.svg"
              alt="3.0"
              fill
              style={{ objectFit: 'contain' }}
              unoptimized
            />
          </div>
        </div>

        {/* Subtitle */}
        <div style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '24px',
          fontWeight: 600,
          color: '#1f4047',
          textAlign: 'center',
          marginBottom: '15px',
          maxWidth: '600px',
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
        <Timer />
      </div>
    </section>
  );
}
