'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 51,
          background: '#1a3c5e',
          color: 'white',
          fontSize: '0.8rem',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          transition: 'transform 0.3s ease',
          transform: isScrolled ? 'translateY(-100%)' : 'translateY(0)',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0.5rem 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <a href="tel:+919998068887" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              +91 9998068887
            </a>
            <a href="mailto:lncdholera@gmail.com" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              lncdholera@gmail.com
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }} className="hidden-mobile">
            <a href="#" style={{ color: 'rgba(255,255,255,0.8)', transition: 'color 0.2s' }} onMouseOver={(e) => (e.currentTarget.style.color = 'white')} onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.8)', transition: 'color 0.2s' }} onMouseOver={(e) => (e.currentTarget.style.color = 'white')} onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.8)', transition: 'color 0.2s' }} onMouseOver={(e) => (e.currentTarget.style.color = 'white')} onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        style={{
          position: 'fixed',
          top: isScrolled ? 0 : '36px',
          left: 0,
          right: 0,
          zIndex: 50,
          background: isScrolled ? 'rgba(255,255,255,0.95)' : 'rgba(0,0,0,0.15)',
          backdropFilter: 'saturate(180%) blur(12px)',
          boxShadow: isScrolled ? '0 2px 12px rgba(0,0,0,0.08)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 1rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '72px',
              position: 'relative',
            }}
          >
            {/* Logo */}
            <div>
              <Link
                href="/"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  gap: '0.6rem',
                }}
                onClick={(e) => {
                  if (pathname === '/') {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease',
                  lineHeight: 1,
                }}>
                  <div style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    background: isScrolled
                      ? 'linear-gradient(135deg, #c8a45a, #f0d078)'
                      : 'linear-gradient(135deg, #f0d078, #c8a45a)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.3s ease',
                    boxShadow: isScrolled
                      ? '0 2px 8px rgba(200,164,90,0.3)'
                      : '0 2px 10px rgba(0,0,0,0.3)',
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a3c5e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
                      <path d="M9 21V13h6v8" />
                    </svg>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                    <span style={{
                      fontSize: '1.9rem',
                      fontWeight: '900',
                      fontFamily: 'Georgia, "Times New Roman", serif',
                      color: isScrolled ? '#c8a45a' : '#f0d078',
                      letterSpacing: '-1px',
                      textShadow: isScrolled ? 'none' : '0 2px 8px rgba(0,0,0,0.3)',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      top: '-1px',
                    }}>D</span>
                    <span style={{
                      fontSize: '1.05rem',
                      fontWeight: '300',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                      color: isScrolled ? '#1a3c5e' : 'white',
                      letterSpacing: '3px',
                      textTransform: 'lowercase',
                      transition: 'all 0.3s ease',
                      textShadow: isScrolled ? 'none' : '0 1px 6px rgba(0,0,0,0.2)',
                    }}>holera</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Investment Tag */}
            <p
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                margin: 0,
                fontSize: '0.95rem',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                fontWeight: '600',
                color: isScrolled ? '#c8a45a' : '#f0d078',
                letterSpacing: '0.5px',
                whiteSpace: 'nowrap',
                transition: 'all 0.3s ease',
              }}
              className="hidden-mobile"
            >
              Own your opportunity with an investment starting from just <span style={{ fontWeight: '800', fontSize: '1.05em', fontFamily: 'Georgia, "Times New Roman", serif' }}>₹5.5 Lakhs</span>
            </p>

            {/* Desktop Nav Links */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
              }}
              className="hidden-mobile"
            >
              <a
                href="/about"
                style={{
                  fontSize: '0.9rem',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontWeight: '600',
                  color: isScrolled ? '#1a3c5e' : 'white',
                  textDecoration: 'none',
                  padding: '0.55rem 1.6rem',
                  borderRadius: '6px',
                  border: isScrolled ? '2px solid rgba(200,164,90,0.5)' : '2px solid rgba(240,208,120,0.5)',
                  background: isScrolled ? 'rgba(200,164,90,0.08)' : 'rgba(240,208,120,0.1)',
                  transition: 'all 0.3s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = isScrolled ? '#c8a45a' : '#f0d078'
                  e.currentTarget.style.background = isScrolled ? 'rgba(200,164,90,0.15)' : 'rgba(240,208,120,0.2)'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = isScrolled ? 'rgba(200,164,90,0.5)' : 'rgba(240,208,120,0.5)'
                  e.currentTarget.style.background = isScrolled ? 'rgba(200,164,90,0.08)' : 'rgba(240,208,120,0.1)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Dholera
              </a>
              <a
                href="tel:+919998068887"
                style={{
                  fontSize: '0.85rem',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontWeight: '600',
                  color: 'white',
                  textDecoration: 'none',
                  padding: '0.6rem 1.4rem',
                  borderRadius: '6px',
                  background: '#c8a45a',
                  transition: 'all 0.3s ease',
                  letterSpacing: '0.3px',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#b8933f'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = '#c8a45a'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Book Site Visit
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="mobile-menu-button" style={{ display: 'none' }}>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                style={{
                  color: isScrolled ? '#111111' : 'white',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  transition: 'all 0.3s ease',
                  outline: 'none',
                  borderRadius: '6px',
                }}
              >
                <svg
                  style={{ height: '24px', width: '24px' }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div
              style={{
                position: 'absolute',
                top: '72px',
                left: 0,
                right: 0,
                background: 'rgba(255, 255, 255, 0.98)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
                zIndex: 1000,
              }}
              className="mobile-menu"
            >
              <a
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  fontSize: '0.9rem',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontWeight: '600',
                  color: '#1a3c5e',
                  textDecoration: 'none',
                  padding: '0.55rem 1.6rem',
                  borderRadius: '6px',
                  border: '2px solid rgba(200,164,90,0.5)',
                  background: 'rgba(200,164,90,0.08)',
                  transition: 'all 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  textAlign: 'center',
                  justifyContent: 'center',
                }}
              >
                Dholera
              </a>
              <a
                href="tel:+919998068887"
                style={{
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: 'white',
                  textDecoration: 'none',
                  padding: '0.7rem 1rem',
                  borderRadius: '6px',
                  background: '#c8a45a',
                  textAlign: 'center',
                  marginTop: '0.5rem',
                }}
              >
                Book Site Visit
              </a>
            </div>
          )}
        </div>
      </nav>

      <style jsx>{`
        @media (max-width: 768px) {
          .hidden-mobile {
            display: none !important;
          }
          .mobile-menu-button {
            display: block !important;
          }
        }
      `}</style>
    </>
  )
}

export default Navigation
