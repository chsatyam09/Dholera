'use client'

import { useState } from 'react'

const fontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'

export default function VisionMission() {
  const [hoveredCard, setHoveredCard] = useState<'vision' | 'mission' | null>(null)

  return (
    <section
      style={{
        padding: '6rem 1.5rem',
        background: '#f8f6f1',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute',
        top: '-100px',
        left: '-100px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        border: '1px solid rgba(200,164,90,0.1)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-80px',
        right: '-80px',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        border: '1px solid rgba(26,60,94,0.08)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{
            fontSize: '0.75rem',
            fontFamily: fontStack,
            fontWeight: '600',
            color: '#c8a45a',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>
            Our Purpose
          </p>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
            fontFamily: fontStack,
            fontWeight: '700',
            color: '#1a3c5e',
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}>
            Vision <span style={{ color: '#c8a45a', fontWeight: '300' }}>&</span> Mission
          </h2>
          <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #c8a45a, #f0d078)', margin: '0 auto' }} />
        </div>

        <div className="vm-cards" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          alignItems: 'start',
        }}>
          <div
            style={{
              position: 'relative',
              marginTop: '0',
            }}
            onMouseOver={() => setHoveredCard('vision')}
            onMouseOut={() => setHoveredCard(null)}
          >
            <div style={{
              position: 'absolute',
              top: '-30px',
              left: '-10px',
              fontSize: '8rem',
              fontFamily: fontStack,
              fontWeight: '800',
              color: 'rgba(200,164,90,0.06)',
              lineHeight: 1,
              pointerEvents: 'none',
              zIndex: 0,
              userSelect: 'none',
            }}>
              01
            </div>

            <div style={{
              position: 'relative',
              zIndex: 1,
              background: 'white',
              borderRadius: '20px',
              padding: '2.5rem 2rem',
              boxShadow: hoveredCard === 'vision'
                ? '0 20px 60px rgba(200,164,90,0.18)'
                : '0 4px 20px rgba(0,0,0,0.04)',
              border: '1px solid rgba(200,164,90,0.12)',
              transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              transform: hoveredCard === 'vision' ? 'translateY(-8px)' : 'translateY(0)',
            }}>
              <div style={{
                position: 'absolute',
                top: '24px',
                left: '0',
                width: '4px',
                height: '60px',
                background: 'linear-gradient(180deg, #c8a45a, #f0d078)',
                borderRadius: '0 4px 4px 0',
              }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #c8a45a, #e8c96a)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  boxShadow: '0 4px 15px rgba(200,164,90,0.3)',
                }}>
                  🎯
                </div>
                <div>
                  <span style={{
                    fontSize: '0.7rem',
                    fontFamily: fontStack,
                    fontWeight: '600',
                    color: '#c8a45a',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                  }}>
                    What we see
                  </span>
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontFamily: fontStack,
                    fontWeight: '700',
                    color: '#1a3c5e',
                    margin: 0,
                    lineHeight: 1.3,
                  }}>
                    Our Vision
                  </h3>
                </div>
              </div>

              <p style={{
                fontSize: '1rem',
                fontFamily: fontStack,
                fontWeight: '400',
                color: '#555',
                lineHeight: 1.85,
                marginBottom: '1rem',
              }}>
                To become the most trusted and respected name in Indian real estate by delivering
                future-ready developments that align with India&apos;s fastest-growing infrastructure
                zones — starting with <strong style={{ color: '#1a3c5e' }}>Dholera Smart City</strong>.
              </p>
              <p style={{
                fontSize: '1rem',
                fontFamily: fontStack,
                fontWeight: '400',
                color: '#555',
                lineHeight: 1.85,
                margin: 0,
              }}>
                We envision a world where every Indian family and investor can own a piece of
                India&apos;s smart future — accessible, affordable, and legally secure.
              </p>

              <div style={{
                marginTop: '1.5rem',
                padding: '0.85rem 1.25rem',
                background: 'linear-gradient(135deg, rgba(200,164,90,0.08), rgba(240,208,120,0.06))',
                borderRadius: '10px',
                borderLeft: '3px solid #c8a45a',
              }}>
                <p style={{
                  fontSize: '0.9rem',
                  fontFamily: fontStack,
                  fontWeight: '500',
                  color: '#1a3c5e',
                  margin: 0,
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                }}>
                  &ldquo;Bridging visionary urban planning with real investment opportunities for people across India and abroad.&rdquo;
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              position: 'relative',
              marginTop: '3rem',
            }}
            onMouseOver={() => setHoveredCard('mission')}
            onMouseOut={() => setHoveredCard(null)}
          >
            <div style={{
              position: 'absolute',
              top: '-30px',
              right: '-10px',
              fontSize: '8rem',
              fontFamily: fontStack,
              fontWeight: '800',
              color: 'rgba(26,60,94,0.05)',
              lineHeight: 1,
              pointerEvents: 'none',
              zIndex: 0,
              userSelect: 'none',
            }}>
              02
            </div>

            <div style={{
              position: 'relative',
              zIndex: 1,
              background: 'linear-gradient(135deg, #1a3c5e, #234d73)',
              borderRadius: '20px',
              padding: '2.5rem 2rem',
              boxShadow: hoveredCard === 'mission'
                ? '0 20px 60px rgba(26,60,94,0.3)'
                : '0 4px 20px rgba(26,60,94,0.15)',
              transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              transform: hoveredCard === 'mission' ? 'translateY(-8px)' : 'translateY(0)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}>
                  🚀
                </div>
                <div>
                  <span style={{
                    fontSize: '0.7rem',
                    fontFamily: fontStack,
                    fontWeight: '600',
                    color: '#c8a45a',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                  }}>
                    What we do
                  </span>
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontFamily: fontStack,
                    fontWeight: '700',
                    color: '#ffffff',
                    margin: 0,
                    lineHeight: 1.3,
                  }}>
                    Our Mission
                  </h3>
                </div>
              </div>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
              }}>
                {[
                  'Provide affordable, high-appreciation plots in India\'s most promising smart cities with early-mover advantage.',
                  'Maintain 100% transparency — from pricing and documentation to legal verification and post-sale support.',
                  'Help investors across India and abroad maximize ROI by developing premium land in emerging smart city zones.',
                  'Set new benchmarks in ethical real estate, making property investment trustworthy, simple, and accessible.',
                ].map((item, index) => (
                  <li key={index} style={{
                    fontSize: '0.95rem',
                    fontFamily: fontStack,
                    fontWeight: '400',
                    color: 'rgba(255,255,255,0.85)',
                    lineHeight: 1.75,
                    marginBottom: '0.85rem',
                    paddingLeft: '2rem',
                    position: 'relative',
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      top: '1px',
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      background: 'rgba(200,164,90,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.65rem',
                      color: '#c8a45a',
                      fontWeight: '700',
                    }}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div style={{
                marginTop: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#c8a45a',
                }} />
                <p style={{
                  fontSize: '0.8rem',
                  fontFamily: fontStack,
                  fontWeight: '500',
                  color: 'rgba(255,255,255,0.5)',
                  margin: 0,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                }}>
                  Building India&apos;s Smart Future
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .vm-cards {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .vm-cards > div:nth-child(2) {
            margin-top: 0 !important;
          }
        }
      `}</style>
    </section>
  )
}
