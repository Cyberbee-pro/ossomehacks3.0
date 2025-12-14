import Image from 'next/image';

export default function HeroButtons() {
  return (
    <div className="hero-buttons" style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '15px',
      marginBottom: '25px',
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
          padding: '16px 32px',
          fontSize: '16px',
          fontWeight: 600,
          fontFamily: "'Poppins', sans-serif",
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
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
          padding: '16px 32px',
          fontSize: '16px',
          fontWeight: 600,
          fontFamily: "'Poppins', sans-serif",
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          position: 'relative',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.backgroundColor = '#262626';
          e.currentTarget.style.color = '#f5efe3';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = '#262626';
        }}
        onClick={() => {
          window.open('https://discord.com/invite/githubsrm', '_blank');
        }}
      >
        <div style={{
          position: 'relative',
          width: '20px',
          height: '20px'
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
