import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 25,
    hours: 20,
    minutes: 44,
    seconds: 44
  });

  useEffect(() => {
    const targetDate = new Date('2026-02-08T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="timer-container" style={{
      position: 'relative',
      display: 'flex',
      gap: '36px',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '15px 40px',
      zIndex: 3
    }}>

      <div className="time-unit" style={{
        textAlign: 'center',
        fontFamily: "'Poppins', sans-serif",
        color: '#262626',
        letterSpacing: '-1.68px'
      }}>
        <div style={{
          fontSize: '24px',
          fontWeight: 800,
          lineHeight: '36px',
          marginBottom: '0'
        }}>
          {String(timeLeft.days).padStart(2, '0')}
        </div>
        <div style={{
          fontSize: '20px',
          fontWeight: 500,
          lineHeight: '36px'
        }}>
          DAYS
        </div>
      </div>

      <div className="time-unit" style={{
        textAlign: 'center',
        fontFamily: "'Poppins', sans-serif",
        color: '#262626',
        letterSpacing: '-1.68px'
      }}>
        <div style={{
          fontSize: '24px',
          fontWeight: 800,
          lineHeight: '36px',
          marginBottom: '0'
        }}>
          {String(timeLeft.hours).padStart(2, '0')}
        </div>
        <div style={{
          fontSize: '20px',
          fontWeight: 500,
          lineHeight: '36px'
        }}>
          HOURS
        </div>
      </div>

      <div className="time-unit" style={{
        textAlign: 'center',
        fontFamily: "'Poppins', sans-serif",
        color: '#262626',
        letterSpacing: '-1.68px'
      }}>
        <div style={{
          fontSize: '24px',
          fontWeight: 800,
          lineHeight: '36px',
          marginBottom: '0'
        }}>
          {String(timeLeft.minutes).padStart(2, '0')}
        </div>
        <div style={{
          fontSize: '20px',
          fontWeight: 500,
          lineHeight: '36px'
        }}>
          MINUTES
        </div>
      </div>

      <div className="time-unit" style={{
        textAlign: 'center',
        fontFamily: "'Poppins', sans-serif",
        color: '#262626',
        letterSpacing: '-1.68px'
      }}>
        <div style={{
          fontSize: '24px',
          fontWeight: 800,
          lineHeight: '36px',
          marginBottom: '0'
        }}>
          {String(timeLeft.seconds).padStart(2, '0')}
        </div>
        <div style={{
          fontSize: '20px',
          fontWeight: 500,
          lineHeight: '36px'
        }}>
          SECONDS
        </div>
      </div>
    </div>
  );
}
