'use client'

import { useState, useEffect, useCallback } from 'react'

const fontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'

const testimonials = [
  {
    name: 'Rajesh Mehta',
    role: 'Investor, Mumbai',
    text: 'LNC Developers made my first land investment incredibly smooth. The documentation was transparent, the site visit was well-organized, and I felt confident about every step. Highly recommended for anyone looking at Dholera.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Investor, Delhi',
    text: 'What impressed me most was the legal verification process. Every document was clear and verified. The team was patient in answering all my questions. I have already recommended LNC to my colleagues.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    role: 'NRI Investor, USA',
    text: 'As an NRI, I was skeptical about investing in land remotely. LNC Developers handled everything professionally — from virtual site visits to documentation. The pricing was genuine with no hidden costs.',
    rating: 5,
  },
  {
    name: 'Sunita Reddy',
    role: 'Investor, Hyderabad',
    text: 'The Aashirwad Enclave project exceeded my expectations. Well-developed infrastructure, clear titles, and a very responsive team. Dholera is the future and LNC is the right partner for this journey.',
    rating: 5,
  },
  {
    name: 'Vikram Singh',
    role: 'Investor, Jaipur',
    text: 'I visited Dholera with the LNC team and was blown away by the development happening there. The plots are in a prime location and the pricing is very competitive. Great investment opportunity.',
    rating: 5,
  },
  {
    name: 'Neha Gupta',
    role: 'Investor, Pune',
    text: 'Transparent dealings, fair pricing, and excellent after-sales support. LNC Developers truly cares about their investors. My family and I are very happy with our purchase in Dholera Smart City.',
    rating: 5,
  },
]

const ClientReview = () => {
  const [page, setPage] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const cardsPerPage = 3
  const totalPages = Math.ceil(testimonials.length / cardsPerPage)

  const goNext = useCallback(() => {
    setPage((prev) => (prev + 1) % totalPages)
  }, [totalPages])

  const goPrev = useCallback(() => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages)
  }, [totalPages])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(goNext, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, goNext])

  const visibleCards = testimonials.slice(page * cardsPerPage, page * cardsPerPage + cardsPerPage)

  return (
    <section style={{
      padding: '6rem 1.5rem',
      background: '#f8f6f1',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{
            fontSize: '0.75rem',
            fontFamily: fontStack,
            fontWeight: '600',
            color: '#c8a45a',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>
            Testimonials
          </p>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontFamily: fontStack,
            fontWeight: '700',
            color: '#1a3c5e',
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}>
            What Our Investors Say
          </h2>
          <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #c8a45a, #f0d078)', margin: '0 auto' }} />
        </div>

        <div
          className="testimonial-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.75rem',
          }}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {visibleCards.map((t, i) => {
            const globalIndex = page * cardsPerPage + i
            const isHovered = hoveredCard === globalIndex
            return (
              <div
                key={globalIndex}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '2rem 1.75rem',
                  boxShadow: isHovered
                    ? '0 12px 40px rgba(0,0,0,0.1)'
                    : '0 2px 16px rgba(0,0,0,0.04)',
                  border: '1px solid rgba(200,164,90,0.12)',
                  transition: 'all 0.3s ease',
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
                onMouseOver={() => setHoveredCard(globalIndex)}
                onMouseOut={() => setHoveredCard(null)}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '24px',
                  right: '24px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #c8a45a, #f0d078)',
                  borderRadius: '0 0 3px 3px',
                }} />

                <div style={{
                  fontSize: '2.5rem',
                  fontFamily: 'Georgia, serif',
                  color: 'rgba(200,164,90,0.2)',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                }}>
                  &ldquo;
                </div>

                <div style={{ display: 'flex', gap: '0.15rem', marginBottom: '1rem' }}>
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <svg key={si} width="16" height="16" viewBox="0 0 24 24" fill="#c8a45a" stroke="none">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                <p style={{
                  fontSize: '0.92rem',
                  fontFamily: fontStack,
                  fontWeight: '400',
                  color: '#555',
                  lineHeight: 1.8,
                  marginBottom: '1.5rem',
                  flex: 1,
                }}>
                  {t.text}
                </p>

                <div style={{
                  borderTop: '1px solid rgba(0,0,0,0.06)',
                  paddingTop: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1a3c5e, #2a5f8f)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    fontFamily: fontStack,
                    fontWeight: '700',
                    color: '#ffffff',
                    flexShrink: 0,
                  }}>
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p style={{
                      fontSize: '0.9rem',
                      fontFamily: fontStack,
                      fontWeight: '600',
                      color: '#1a3c5e',
                      margin: 0,
                      marginBottom: '0.1rem',
                    }}>
                      {t.name}
                    </p>
                    <p style={{
                      fontSize: '0.75rem',
                      fontFamily: fontStack,
                      fontWeight: '400',
                      color: '#999',
                      margin: 0,
                    }}>
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.25rem',
          marginTop: '2.5rem',
        }}>
          <button
            onClick={goPrev}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'transparent',
              border: '1.5px solid rgba(26,60,94,0.2)',
              color: '#1a3c5e',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.1rem',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#1a3c5e'
              e.currentTarget.style.color = '#ffffff'
              e.currentTarget.style.borderColor = '#1a3c5e'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#1a3c5e'
              e.currentTarget.style.borderColor = 'rgba(26,60,94,0.2)'
            }}
            aria-label="Previous"
          >
            ‹
          </button>

          <div style={{ display: 'flex', gap: '0.4rem' }}>
            {Array.from({ length: totalPages }).map((_, i) => (
              <div
                key={i}
                onClick={() => setPage(i)}
                style={{
                  width: page === i ? '20px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: page === i ? '#c8a45a' : 'rgba(26,60,94,0.15)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'transparent',
              border: '1.5px solid rgba(26,60,94,0.2)',
              color: '#1a3c5e',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.1rem',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#1a3c5e'
              e.currentTarget.style.color = '#ffffff'
              e.currentTarget.style.borderColor = '#1a3c5e'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#1a3c5e'
              e.currentTarget.style.borderColor = 'rgba(26,60,94,0.2)'
            }}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .testimonial-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .testimonial-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

export default ClientReview
