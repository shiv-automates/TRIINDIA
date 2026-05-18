import { useEffect, useRef, useState } from 'react';

/**
 * VideoHero — Full-bleed luxury video hero for TRIINDIA
 * Pure HTML/CSS/JS equivalent: see public/hero-video.html
 */
export default function VideoHero() {
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Trigger entrance animation after mount
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '600px',
        overflow: 'hidden',
        backgroundColor: '#0f0a04',
      }}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1,
        }}
      >
        <source
          src="https://videos.pexels.com/video-files/3214448/3214448-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
        {/* Fallback: your local video */}
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay Gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background:
            'linear-gradient(to bottom, rgba(15,10,4,0.3) 0%, rgba(15,10,4,0.7) 100%)',
        }}
      />

      {/* Centered Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          textAlign: 'center',
          padding: '0 24px',
        }}
      >
        {/* Section Label */}
        <span
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '10px',
            fontWeight: 400,
            letterSpacing: '5px',
            textTransform: 'uppercase',
            color: '#d4af37',
            lineHeight: 1.5,
            marginBottom: '1.5rem',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1s ease, transform 1s ease',
          }}
        >
          EST. 2005 · INDIA
        </span>

        {/* Main Headline */}
        <h1
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(42px, 6vw, 72px)',
            fontWeight: 400,
            color: '#f5ead0',
            lineHeight: 1.0,
            margin: 0,
            maxWidth: '900px',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 1.2s ease, transform 1.2s ease',
          }}
        >
          Where Heritage Meets
          <br />
          Unparalleled Luxury
        </h1>

        {/* Italic Subheading */}
        <p
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '22px',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'rgba(245,234,208,0.7)',
            lineHeight: 1.5,
            marginTop: '1.5rem',
            maxWidth: '560px',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 1s ease 0.3s, transform 1s ease 0.3s',
          }}
        >
          An ode to the art of Indian hospitality, where every stay
          becomes a cherished memory.
        </p>

        {/* Gold Divider */}
        <div
          style={{
            width: '60px',
            height: '1px',
            backgroundColor: '#d4af37',
            margin: '2rem auto',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'scaleX(1)' : 'scaleX(0)',
            transition: 'opacity 1s ease 0.4s, transform 1s ease 0.4s',
            transformOrigin: 'center',
          }}
        />

        {/* Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 1s ease 0.6s, transform 1s ease 0.6s',
          }}
        >
          {/* Primary — Gold Fill */}
          <a
            href="#rooms"
            style={{
              display: 'inline-block',
              backgroundColor: '#d4af37',
              color: '#0f0a04',
              border: '1px solid #d4af37',
              padding: '14px 36px',
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '12px',
              fontWeight: 400,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              lineHeight: 1,
              cursor: 'pointer',
              transition: 'background-color 0.4s ease, color 0.4s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#d4af37';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#d4af37';
              e.currentTarget.style.color = '#0f0a04';
            }}
          >
            Explore Property
          </a>

          {/* Secondary — Gold Outline */}
          <a
            href="#book"
            style={{
              display: 'inline-block',
              backgroundColor: 'transparent',
              color: '#d4af37',
              border: '1px solid #d4af37',
              padding: '14px 36px',
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '12px',
              fontWeight: 400,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              lineHeight: 1,
              cursor: 'pointer',
              transition: 'background-color 0.4s ease, color 0.4s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#d4af37';
              e.currentTarget.style.color = '#0f0a04';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#d4af37';
            }}
          >
            Book A Stay
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 1s ease 1s',
        }}
      >
        <span
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '10px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: 'rgba(245,234,208,0.5)',
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: '1px',
            height: '60px',
            backgroundColor: 'rgba(212,175,55,0.3)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: '1px',
              height: '16px',
              backgroundColor: '#d4af37',
              position: 'absolute',
              top: 0,
              left: 0,
              animation: 'scrollDot 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      {/* Keyframes for scroll dot */}
      <style>{`
        @keyframes scrollDot {
          0% {
            top: -16px;
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            top: 60px;
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
