'use client'

import { useState, useEffect } from 'react'

const fontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'

const aboutImages = [
  'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=58',
  'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=59',
  'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=60',
  'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=61',
  'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=79',
  'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=103',
  'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=6',
  'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=74',
]

const dreamCityFeatures = [
  'Wide internal roads with smart lighting',
  'Underground utility ducting & fiber optics',
  'Rainwater harvesting & green landscaping',
  'Gated entry with 24/7 security',
  'Proximity to Dholera International Airport',
  'Clear title plots with NA/NOC approval',
  'Excellent connectivity to Ahmedabad Expressway',
  'High appreciation potential in SIR zone',
]

const ContentSections = () => {
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImg((prev) => (prev + 1) % aboutImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {/* ========== ABOUT US SECTION ========== */}
      <section
        id="about"
        style={{
          padding: '6rem 1.5rem',
          background: 'white',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="about-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}>
            <div>
              <p style={{
                fontSize: '0.8rem',
                fontFamily: fontStack,
                fontWeight: '600',
                color: '#c8a45a',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}>
                Dholera Smart City
              </p>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                fontFamily: fontStack,
                fontWeight: '700',
                color: '#1a3c5e',
                lineHeight: 1.2,
                marginBottom: '1.5rem',
              }}>
                India&apos;s First Greenfield Smart City
              </h2>
              <div style={{
                width: '60px',
                height: '3px',
                background: 'linear-gradient(90deg, #c8a45a, #f0d078)',
                marginBottom: '1.5rem',
              }} />
              <p style={{
                fontSize: '1.05rem',
                fontFamily: fontStack,
                fontWeight: '400',
                color: '#555',
                lineHeight: 1.9,
                marginBottom: '1rem',
              }}>
                <strong style={{ color: '#1a3c5e' }}>Dholera Special Investment Region (SIR)</strong> is a 920 sq km
                mega smart city being built from scratch in Gujarat — the flagship node of the ambitious
                <strong style={{ color: '#1a3c5e' }}> Delhi-Mumbai Industrial Corridor (DMIC)</strong>, a $90 billion
                infrastructure project backed by the Government of India.
              </p>
              <p style={{
                fontSize: '1.05rem',
                fontFamily: fontStack,
                fontWeight: '400',
                color: '#555',
                lineHeight: 1.9,
                marginBottom: '1rem',
              }}>
                With an <strong style={{ color: '#1a3c5e' }}>international airport under construction</strong>, a six-lane
                expressway nearing completion, proposed metro rail connectivity, and one of the world&apos;s
                largest solar parks (5000 MW) — Dholera is designed to rival global smart cities with
                100% underground utilities and 8-lane internal roads.
              </p>
              <p style={{
                fontSize: '1.05rem',
                fontFamily: fontStack,
                fontWeight: '400',
                color: '#555',
                lineHeight: 1.9,
                marginBottom: '2rem',
              }}>
                The activation zone is already operational with industries moving in, making this
                the <strong style={{ color: '#1a3c5e' }}>golden window for early investors</strong> to secure plots
                in what will become India&apos;s most advanced urban centre.
              </p>
              <a
                href="/about"
                style={{
                  fontSize: '0.95rem',
                  fontFamily: fontStack,
                  fontWeight: '600',
                  color: 'white',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem 2rem',
                  borderRadius: '6px',
                  background: '#1a3c5e',
                  transition: 'all 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#2a5580'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(26,60,94,0.3)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = '#1a3c5e'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                Explore Dholera Details
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
            <div style={{
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.12)',
              aspectRatio: '4/3',
              position: 'relative',
            }}>
              {aboutImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Dholera Smart City ${i + 1}`}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: activeImg === i ? 1 : 0,
                    transition: 'opacity 1s ease',
                  }}
                />
              ))}
              <button
                onClick={() => setActiveImg((prev) => (prev - 1 + aboutImages.length) % aboutImages.length)}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '0.75rem',
                  transform: 'translateY(-50%)',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(26,60,94,0.6)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: 'white',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                  transition: 'all 0.2s ease',
                  backdropFilter: 'blur(4px)',
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(26,60,94,0.85)' }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(26,60,94,0.6)' }}
              >
                &#8249;
              </button>
              <button
                onClick={() => setActiveImg((prev) => (prev + 1) % aboutImages.length)}
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '0.75rem',
                  transform: 'translateY(-50%)',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(26,60,94,0.6)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: 'white',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                  transition: 'all 0.2s ease',
                  backdropFilter: 'blur(4px)',
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(26,60,94,0.85)' }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(26,60,94,0.6)' }}
              >
                &#8250;
              </button>
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                padding: '2rem 1.5rem 1.5rem',
                background: 'linear-gradient(transparent, rgba(26,60,94,0.9))',
              }}>
                <p style={{
                  fontSize: '0.95rem',
                  fontFamily: fontStack,
                  fontWeight: '600',
                  color: 'white',
                  margin: 0,
                }}>
                  Twice the Size of Delhi — 920 sq km of Future-Ready Infrastructure
                </p>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            .about-grid {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
          }
        `}</style>
      </section>



      {/* ========== DREAM CITY DHOLERA - FLAGSHIP SECTION ========== */}
      <section
        style={{
          padding: '6rem 1.5rem',
          background: 'white',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="dream-city-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}>
            {/* Image Side */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(0,0,0,0.15)',
              }}>
                <img
                  src="https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=65"
                  alt="Dream City Dholera - Premium Plotted Development"
                  style={{
                    width: '100%',
                    height: '450px',
                    objectFit: 'cover',
                  }}
                />
              </div>
              {/* Floating Stats Card */}
              <div style={{
                position: 'absolute',
                bottom: '-2rem',
                right: '-1.5rem',
                background: 'linear-gradient(135deg, #1a3c5e, #2a5580)',
                borderRadius: '14px',
                padding: '1.5rem 2rem',
                boxShadow: '0 15px 40px rgba(26,60,94,0.35)',
                color: 'white',
                zIndex: 2,
              }}>
                <p style={{
                  fontSize: '2rem',
                  fontFamily: fontStack,
                  fontWeight: '800',
                  color: '#f0d078',
                  marginBottom: '0.25rem',
                  lineHeight: 1,
                }}>
                  500+
                </p>
                <p style={{
                  fontSize: '0.8rem',
                  fontFamily: fontStack,
                  fontWeight: '500',
                  color: 'rgba(255,255,255,0.8)',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                }}>
                  Happy Investors
                </p>
              </div>
            </div>

            {/* Content Side */}
            <div>
              <p style={{
                fontSize: '0.8rem',
                fontFamily: fontStack,
                fontWeight: '600',
                color: '#c8a45a',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}>
                Our Flagship Focus
              </p>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                fontFamily: fontStack,
                fontWeight: '700',
                color: '#1a3c5e',
                lineHeight: 1.2,
                marginBottom: '1.5rem',
              }}>
                Dream City Dholera
              </h2>
              <div style={{
                width: '60px',
                height: '3px',
                background: 'linear-gradient(90deg, #c8a45a, #f0d078)',
                marginBottom: '1.5rem',
              }} />
              <p style={{
                fontSize: '1.05rem',
                fontFamily: fontStack,
                fontWeight: '400',
                color: '#555',
                lineHeight: 1.9,
                marginBottom: '1rem',
              }}>
                A premium plotted development crafted exclusively for modern investors and future
                homeowners. Dream City Dholera combines strategic location, world-class planned
                infrastructure, and the early-mover advantage of India&apos;s most ambitious smart
                city project.
              </p>
              <p style={{
                fontSize: '1.05rem',
                fontFamily: fontStack,
                fontWeight: '400',
                color: '#555',
                lineHeight: 1.9,
                marginBottom: '2rem',
              }}>
                With excellent connectivity to the Dholera International Airport, Ahmedabad-Dholera
                Expressway, and the DMIC corridor, every plot is positioned for maximum appreciation
                and long-term value creation. Invest today, reap the rewards of tomorrow.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem',
                marginBottom: '2.5rem',
              }}>
                {dreamCityFeatures.map((feature, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c8a45a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="20 6 9 17 4 12"/></svg>
                    <span style={{
                      fontSize: '0.88rem',
                      fontFamily: fontStack,
                      fontWeight: '500',
                      color: '#555',
                      lineHeight: 1.4,
                    }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href="tel:+919998068887"
                  style={{
                    fontSize: '0.95rem',
                    fontFamily: fontStack,
                    fontWeight: '600',
                    color: 'white',
                    textDecoration: 'none',
                    padding: '0.85rem 2rem',
                    borderRadius: '6px',
                    background: '#1a3c5e',
                    transition: 'all 0.3s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#2a5580'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(26,60,94,0.3)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = '#1a3c5e'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  Book Site Visit
                </a>
                <a
                  href="#contact"
                  style={{
                    fontSize: '0.95rem',
                    fontFamily: fontStack,
                    fontWeight: '600',
                    color: '#1a3c5e',
                    textDecoration: 'none',
                    padding: '0.85rem 2rem',
                    borderRadius: '6px',
                    background: 'transparent',
                    border: '2px solid #c8a45a',
                    transition: 'all 0.3s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#c8a45a'
                    e.currentTarget.style.color = 'white'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = '#1a3c5e'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  Get Brochure
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                </a>
                <a
                  href="/about"
                  style={{
                    fontSize: '0.95rem',
                    fontFamily: fontStack,
                    fontWeight: '600',
                    color: '#1a3c5e',
                    textDecoration: 'none',
                    padding: '0.85rem 2rem',
                    borderRadius: '6px',
                    border: '2px solid rgba(200,164,90,0.5)',
                    background: 'rgba(200,164,90,0.08)',
                    transition: 'all 0.3s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = '#c8a45a'
                    e.currentTarget.style.background = 'rgba(200,164,90,0.15)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(200,164,90,0.5)'
                    e.currentTarget.style.background = 'rgba(200,164,90,0.08)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  Dholera
                </a>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            .dream-city-grid {
              grid-template-columns: 1fr !important;
              gap: 3rem !important;
            }
          }
        `}</style>
      </section>
    </>
  )
}

export default ContentSections