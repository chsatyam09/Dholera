'use client'

import { useState, useEffect } from 'react'

const heroImages = [
  'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=58',
  'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=59',
  'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=60',
]

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '600px',
        overflow: 'hidden',
      }}
    >
      {heroImages.map((img, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: currentSlide === index ? 1 : 0,
            transition: 'opacity 1.2s ease-in-out',
            transform: currentSlide === index ? 'scale(1.02)' : 'scale(1)',
          }}
        />
      ))}

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.8) 100%)',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 1.5rem',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        <p
          style={{
            fontSize: 'clamp(0.75rem, 1.2vw, 1rem)',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            fontWeight: '500',
            color: '#f0d078',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}
        >
          Turning Land into Legacy
        </p>

        <h1
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            fontWeight: '700',
            color: 'white',
            lineHeight: 1.15,
            marginBottom: '1.5rem',
            letterSpacing: '-0.5px',
          }}
        >
          Own Land Where the Future of India Is Rising — <span style={{ color: '#f0d078' }}>Dholera Smart City</span>
        </h1>

        <p
          style={{
            fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            fontWeight: '400',
            color: 'rgba(255,255,255,0.85)',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
            maxWidth: '700px',
          }}
        >
          Invest in India&apos;s first greenfield smart city. With world-class infrastructure,
          government backing, and rapid development — Dholera is where visionary investors
          are securing their future today.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
          <a
            href="/about"
            style={{
              fontSize: '1.1rem',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontWeight: '600',
              color: 'white',
              textDecoration: 'none',
              padding: '0.85rem 3rem',
              borderRadius: '6px',
              border: '2px solid rgba(240,208,120,0.5)',
              background: 'rgba(240,208,120,0.1)',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = '#f0d078'
              e.currentTarget.style.background = 'rgba(240,208,120,0.2)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(240,208,120,0.5)'
              e.currentTarget.style.background = 'rgba(240,208,120,0.1)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Dholera
          </a>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '2.5rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <a
            href="tel:+919998068887"
            style={{
              fontSize: '0.95rem',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontWeight: '600',
              color: '#1a3c5e',
              textDecoration: 'none',
              padding: '0.85rem 2rem',
              borderRadius: '6px',
              background: '#f0d078',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#e6c35a'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(240, 208, 120, 0.3)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = '#f0d078'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
            Book Site Visit
          </a>
          <a
            href="#"
            style={{
              fontSize: '0.95rem',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontWeight: '600',
              color: 'white',
              textDecoration: 'none',
              padding: '0.85rem 2rem',
              borderRadius: '6px',
              border: '2px solid rgba(255,255,255,0.4)',
              background: 'transparent',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'white'
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download Brochure
          </a>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '0.5rem',
          zIndex: 10,
        }}
      >
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: currentSlide === index ? '2rem' : '0.5rem',
              height: '0.5rem',
              borderRadius: '9999px',
              background: currentSlide === index ? '#f0d078' : 'rgba(255,255,255,0.5)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          section {
            min-height: 500px;
          }
        }
      `}</style>
    </section>
  )
}

export default Slideshow
