import Image from 'next/image';

export default function HeroButtons() {
  return (
    <div className="hero-buttons" style={{
      display: 'flex',
      gap: 'clamp(2px,2vw,18px)',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: 'clamp(8px,2vw,20px)',
      marginBottom: 'clamp(12px,3vw,32px)',
      zIndex: 3
    }}>
      {/* Apply with Devfolio Button */}
      <button
        className="devfolio-button"
        style={{
          backgroundColor: '#262626',
          color: '#f5efe3',
          border: 'none',
          borderRadius: '10px',
          padding: 'clamp(4px,1vw,12px) clamp(10px,3vw,20px)',
          fontSize: 'clamp(10px,2.2vw,16px)',
          fontWeight: 600,
          fontFamily: "'Poppins', sans-serif",
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(2px,1.5vw,12px)',
          position: 'relative',
          overflow: 'hidden',
          transition: 'transform 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
        onClick={() => {
          window.open('https://devfolio.co', '_blank');
        }}
      >
        <div style={{
          position: 'relative',
          width: '20px',
          height: '20px'
        }}>
          <Image
            src="/hero/hero-devfolio-icon.svg"
            alt=""
            width={20}
            height={20}
            style={{ objectFit: 'contain' }}
            unoptimized
          />
        </div>
        Apply with Devfolio
      </button>

      {/* Discord Server Button */}
      <button
        className="discord-button"
        style={{
          backgroundColor: 'transparent',
          color: '#262626',
          border: '4px solid #262626',
          borderRadius: '10px',
          padding: 'clamp(4px,1vw,12px) clamp(10px,3vw,20px)',
          fontSize: 'clamp(10px,2.2vw,16px)',
          fontWeight: 600,
          fontFamily: "'Poppins', sans-serif",
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(2px,1.5vw,12px)',
          position: 'relative',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.backgroundColor = '#262626';
          e.currentTarget.style.color = '#f5efe3';
          const imgDiv = e.currentTarget.querySelector('div');
          if (imgDiv) imgDiv.style.filter = 'brightness(0) invert(1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = '#262626';
          const imgDiv = e.currentTarget.querySelector('div');
          if (imgDiv) imgDiv.style.filter = 'none';
        }}
        onClick={() => {
          window.open('https://discord.com/invite/githubsrm', '_blank');
        }}
      >
        <div style={{
          position: 'relative',
          width: '20px',
          height: '20px',
          transition: 'filter 0.2s ease'
        }}>
          <Image
            src="/hero/hero-discord-icon.svg"
            alt=""
            width={20}
            height={20}
            style={{ objectFit: 'contain' }}
            unoptimized
          />
        </div>
        Discord Server
      </button>
    </div>
  );
}
