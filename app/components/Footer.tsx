'use client'

import { useState } from 'react'

const fontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', interest: '', budget: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '505625ac-de77-4afc-8da0-3ebf5c632d45',
          ...formData,
          subject: `New Lead — ${formData.interest || 'General Inquiry'} — LNC Developers`,
        }),
      })
      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', phone: '', interest: '', budget: '' })
        setTimeout(() => setSubmitted(false), 4000)
      }
    } catch {
    }
    setIsSubmitting(false)
  }

  return (
    <>
      {/* CTA Section */}
      <section
        id="contact"
        style={{
          padding: '5rem 1.5rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(145deg, #0a1628 0%, #132744 30%, #1a3c5e 55%, #132744 80%, #0a1628 100%)',
        }}
      >
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 20% 20%, rgba(200,164,90,0.12) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 80% 80%, rgba(200,164,90,0.1) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 50% 50%, rgba(240,208,120,0.06) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'repeating-linear-gradient(135deg, rgba(200,164,90,0.03) 0px, rgba(200,164,90,0.03) 1px, transparent 1px, transparent 40px)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          top: '2rem',
          left: '2rem',
          width: '80px',
          height: '80px',
          borderTop: '2px solid rgba(200,164,90,0.25)',
          borderLeft: '2px solid rgba(200,164,90,0.25)',
          borderRadius: '4px 0 0 0',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          right: '2rem',
          width: '80px',
          height: '80px',
          borderBottom: '2px solid rgba(200,164,90,0.25)',
          borderRight: '2px solid rgba(200,164,90,0.25)',
          borderRadius: '0 0 4px 0',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 10%, #c8a45a 50%, transparent 90%)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 10%, #c8a45a 50%, transparent 90%)',
        }} />
        <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <p style={{
            fontSize: '0.8rem',
            fontFamily: fontStack,
            fontWeight: '600',
            color: '#f0d078',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>
            Get Started Today
          </p>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontFamily: fontStack,
            fontWeight: '700',
            color: 'white',
            marginBottom: '1rem',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
          }}>
            Let&apos;s Build Your Legacy Together
          </h2>
          <p style={{
            fontSize: '1.05rem',
            fontFamily: fontStack,
            fontWeight: '400',
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '2.5rem',
            lineHeight: 1.7,
            textShadow: '0 1px 4px rgba(0,0,0,0.2)',
          }}>
            Ready to invest in India&apos;s smartest city? Get in touch with our team today.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="tel:+919998068887"
              style={{
                fontSize: '0.95rem',
                fontFamily: fontStack,
                fontWeight: '600',
                color: '#1a3c5e',
                textDecoration: 'none',
                padding: '0.9rem 2.25rem',
                borderRadius: '6px',
                background: 'linear-gradient(135deg, #f0d078, #c8a45a)',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 15px rgba(200,164,90,0.4)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(200,164,90,0.5)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(200,164,90,0.4)'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              Call Now
            </a>
            <a
              href="https://wa.me/919998068887?text=Hi%2C%20I%20am%20interested%20in%20plots%20in%20Dholera%20Smart%20City"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '0.95rem',
                fontFamily: fontStack,
                fontWeight: '600',
                color: 'white',
                textDecoration: 'none',
                padding: '0.9rem 2.25rem',
                borderRadius: '6px',
                background: '#25D366',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 15px rgba(37,211,102,0.3)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(37,211,102,0.4)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(37,211,102,0.3)'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer style={{
        background: '#0f2a42',
        padding: '4rem 1.5rem 1.5rem',
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
        }}>
          <div className="footer-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'start',
          }}>

            <div>
              <div style={{
                fontSize: '2.2rem',
                fontWeight: '800',
                fontFamily: fontStack,
                marginBottom: '1rem',
                letterSpacing: '-0.5px',
              }}>
                <span style={{ color: '#f0d078' }}>LNC</span>{' '}
                <span style={{ color: 'white' }}>Developers</span>
              </div>

              <p style={{
                fontSize: '1rem',
                fontFamily: fontStack,
                fontWeight: '400',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.8,
                marginBottom: '2.5rem',
                maxWidth: '400px',
              }}>
                Turning Land into Legacy. Your trusted partner for plots and developments in Dholera Smart City.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8a45a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span style={{ fontSize: '0.95rem', fontFamily: fontStack, fontWeight: '500', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                    B4-518/519, Spaze ITECH Park,<br />Sector 49, Gurugram, Haryana 122018
                  </span>
                </div>
                <a href="tel:+919998068887" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8a45a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                  <span style={{ fontSize: '0.95rem', fontFamily: fontStack, fontWeight: '600', color: 'white' }}>+91 9998068887</span>
                </a>
                <a href="mailto:lncdholera@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8a45a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <span style={{ fontSize: '0.95rem', fontFamily: fontStack, fontWeight: '600', color: 'white' }}>lncdholera@gmail.com</span>
                </a>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {[
                  <svg key="fb" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
                  <svg key="ig" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
                  <svg key="li" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
                ].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    style={{
                      color: 'rgba(255,255,255,0.35)',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = '#f0d078'
                      e.currentTarget.style.borderColor = 'rgba(240,208,120,0.4)'
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.35)'
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                    }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            <div style={{
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '14px',
              padding: '2.25rem',
              border: '1px solid rgba(255,255,255,0.06)',
            }}>
              <p style={{
                fontSize: '1.25rem',
                fontFamily: fontStack,
                fontWeight: '700',
                color: 'white',
                marginBottom: '0.4rem',
              }}>
                Get a Free Consultation
              </p>
              <p style={{
                fontSize: '0.8rem',
                fontFamily: fontStack,
                color: 'rgba(255,255,255,0.4)',
                marginBottom: '1.75rem',
                lineHeight: 1.5,
              }}>
                Tell us what you&apos;re looking for — we&apos;ll call you back within 30 minutes.
              </p>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.05)',
                    color: 'white',
                    fontSize: '0.85rem',
                    fontFamily: fontStack,
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(200,164,90,0.5)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.05)',
                    color: 'white',
                    fontSize: '0.85rem',
                    fontFamily: fontStack,
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(200,164,90,0.5)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                />
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.05)',
                    color: formData.interest ? 'white' : 'rgba(255,255,255,0.35)',
                    fontSize: '0.85rem',
                    fontFamily: fontStack,
                    outline: 'none',
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='rgba(255,255,255,0.4)' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    transition: 'border-color 0.2s',
                    cursor: 'pointer',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(200,164,90,0.5)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                >
                  <option value="" disabled>Interested In</option>
                  <option value="Aashirwad Enclave">Aashirwad Enclave</option>
                  <option value="Soilscape">Soilscape</option>
                  <option value="Site Visit">Book a Site Visit</option>
                  <option value="Investment Consultation">Investment Consultation</option>
                  <option value="Other">Other</option>
                </select>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.05)',
                    color: formData.budget ? 'white' : 'rgba(255,255,255,0.35)',
                    fontSize: '0.85rem',
                    fontFamily: fontStack,
                    outline: 'none',
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='rgba(255,255,255,0.4)' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    transition: 'border-color 0.2s',
                    cursor: 'pointer',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(200,164,90,0.5)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                >
                  <option value="" disabled>Budget Range</option>
                  <option value="Under 10L">Under ₹10 Lakh</option>
                  <option value="10L - 25L">₹10 - 25 Lakh</option>
                  <option value="25L - 50L">₹25 - 50 Lakh</option>
                  <option value="50L - 1Cr">₹50 Lakh - 1 Crore</option>
                  <option value="Above 1Cr">Above ₹1 Crore</option>
                </select>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '0.9rem',
                    borderRadius: '6px',
                    border: 'none',
                    background: submitted ? '#2d8a4e' : 'linear-gradient(135deg, #f0d078, #c8a45a)',
                    color: submitted ? 'white' : '#1a3c5e',
                    fontSize: '0.95rem',
                    fontFamily: fontStack,
                    fontWeight: '700',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.5px',
                    marginTop: '0.25rem',
                    boxSizing: 'border-box',
                  }}
                  onMouseOver={(e) => {
                    if (!isSubmitting && !submitted) {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(200,164,90,0.3)'
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isSubmitting && !submitted) {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }
                  }}
                >
                  {submitted ? '✓ We\'ll Call You Shortly!' : isSubmitting ? 'Submitting...' : 'Request Callback →'}
                </button>
              </form>
            </div>
          </div>

          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            marginTop: '3rem',
            paddingTop: '1.25rem',
            textAlign: 'center',
          }}>
            <p style={{
              fontSize: '0.75rem',
              fontFamily: fontStack,
              color: 'rgba(255,255,255,0.25)',
            }}>
              &copy; {new Date().getFullYear()} LNC Developers. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
        input::placeholder, textarea::placeholder {
          color: rgba(255,255,255,0.3);
        }
        select option {
          background: #0f2a42;
          color: white;
        }
      `}</style>
    </>
  )
}

export default Footer
