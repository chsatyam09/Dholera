'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const fontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'

const infraItems = [
  {
    icon: '✈️',
    title: 'Dholera International Airport',
    desc: 'A greenfield international airport is being built to connect Dholera to the world. Phase 1 runway work is already underway, making this one of the biggest catalysts for the region.',
    image: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=79',
  },
  {
    icon: '🛣️',
    title: 'Ahmedabad-Dholera Expressway',
    desc: 'A 110-km six-lane expressway connecting Ahmedabad to Dholera, cutting travel time to under 1 hour. Construction is in advanced stages with partial sections already operational.',
    image: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=6',
  },
  {
    icon: '🚇',
    title: 'High-Speed Metro Rail',
    desc: 'A proposed metro rail link will provide seamless connectivity between Dholera SIR, Ahmedabad, and the airport. This will transform daily commute and boost property values.',
    image: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=74',
  },
  {
    icon: '☀️',
    title: 'Solar Power Park (5000 MW)',
    desc: 'One of the world\'s largest solar parks is being developed in Dholera with 5000 MW capacity, ensuring clean energy supply and attracting green-tech industries.',
    image: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=99',
  },
  {
    icon: '🏭',
    title: 'DMIC Industrial Corridor',
    desc: 'Dholera is part of the ambitious Delhi-Mumbai Industrial Corridor (DMIC) — a $90 billion mega infrastructure project that will make it a global manufacturing hub.',
    image: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=65',
  },
  {
    icon: '🏢',
    title: 'ABCD Building & Smart Governance',
    desc: 'The Administration, Business, Convention & Data Centre (ABCD) building serves as the nerve centre of Dholera SIR, housing smart city operations and governance.',
    image: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=58',
  },
]

const galleryImages = [
  { src: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=58', caption: 'ABCD Building' },
  { src: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=59', caption: 'ABCD Building Interior' },
  { src: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=60', caption: 'ABCD Building Aerial' },
  { src: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=61', caption: 'Smart City Infrastructure' },
  { src: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=6', caption: 'Sewage Treatment Plant' },
  { src: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=65', caption: 'CETP Facility' },
  { src: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=99', caption: 'Water Treatment Plant' },
  { src: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=104', caption: 'WTP Infrastructure' },
]

const keyFeatures = [
  { stat: '920', unit: 'sq km', label: 'Total SIR Area', desc: 'Dholera SIR spans 920 sq km — twice the size of Delhi, making it India\'s largest planned smart city.' },
  { stat: '22+', unit: '', label: 'Smart Villages', desc: 'Over 22 villages integrated into the master plan with modern infrastructure, roads, and utilities.' },
  { stat: '6', unit: 'Lane', label: 'Expressway', desc: '110 km six-lane Ahmedabad-Dholera Expressway with service roads on both sides.' },
  { stat: '5000', unit: 'MW', label: 'Solar Capacity', desc: 'One of the world\'s largest solar parks providing clean, sustainable energy to the region.' },
  { stat: '100%', unit: '', label: 'Underground Utilities', desc: 'All electrical, telecom, water and sewage lines run underground for a clean, modern cityscape.' },
  { stat: '8', unit: 'Lane', label: 'Internal Roads', desc: 'World-class 8-lane and 6-lane internal roads with dedicated cycling tracks and green corridors.' },
]

const faqs = [
  {
    q: 'Why should I invest in Dholera Smart City?',
    a: 'Dholera is India\'s first smart city being built from scratch — with world-class roads, planned zones, metro, and its own international airport. It\'s part of the Delhi-Mumbai Industrial Corridor (DMIC), and work is already in advanced stages. Early investors stand to gain the most as infrastructure rapidly develops.',
  },
  {
    q: 'What makes residential plots in Dholera SIR a smart choice?',
    a: 'Unlike crowded cities, Dholera gives you space and a fresh start. It\'s planned with proper roads, dedicated zones (residential, commercial, industrial), and world-class infrastructure — built for what\'s coming next. Prices are still accessible compared to established cities.',
  },
  {
    q: 'Is 2026 a good time to buy property in Dholera?',
    a: 'Yes — and you\'re still early. A lot of groundwork like roads, utilities, and the activation area is already functional. Major developers are entering the scene. 2025-2030 is expected to be the golden window before prices shoot up significantly.',
  },
  {
    q: 'How do I book a plot in Dholera Smart City?',
    a: 'Booking is straightforward. You can contact us directly for assistance with site visits, documentation, and approvals. Most projects accept booking with a 10% upfront payment. We handle the entire process end-to-end for a hassle-free experience.',
  },
  {
    q: 'Are these plots government approved?',
    a: 'Yes — all our plots come with proper approvals from Dholera Industrial City Development Ltd. (DICDL) and Gujarat Town Planning Department. We ensure clear titles, RERA compliance, and complete documentation for every project.',
  },
  {
    q: 'What does the future of Dholera real estate look like?',
    a: 'The city\'s growth is backed by massive government funding, global interest, and big-ticket infrastructure projects. Real estate values are expected to rise steadily as the city becomes operational zone by zone. Early investors in similar smart cities (like Navi Mumbai, Gurugram) saw 10-20x returns.',
  },
  {
    q: 'What\'s the difference between Dholera SIR and Dholera City?',
    a: 'Dholera SIR (Special Investment Region) is the main planned development area spanning 920 sq km — designed for industries, smart infrastructure, and planned housing. Dholera City refers more broadly to nearby zones and residential pockets around the SIR.',
  },
  {
    q: 'Can NRIs invest in Dholera Smart City plots?',
    a: 'Absolutely. Dholera is open to NRI investment and many overseas Indians have already invested here. Follow RBI guidelines and use formal banking channels. We also assist with remote booking and Power of Attorney if needed.',
  },
  {
    q: 'Is this the right time to invest in Dholera?',
    a: 'If you\'re waiting for the "right time," this is it. Prices are still reasonable, government work is progressing steadily, and the early mover advantage is real. Once infrastructure is fully operational, prices will likely climb fast — just like they did in Navi Mumbai or Gurugram.',
  },
]

const milestones = [
  { year: '2018', title: 'Company Founded', desc: 'LNC Developers was established with a mission to bring transparency and trust to Indian real estate.' },
  { year: '2019', title: 'Dholera Entry', desc: 'Identified Dholera SIR as the future of urban India and began strategic land acquisition.' },
  { year: '2021', title: 'Aashirwad Enclave Launch', desc: 'Launched our flagship plotted development — RERA approved, fully developed, and ready for possession.' },
  { year: '2023', title: '500+ Happy Investors', desc: 'Crossed 500 satisfied investors from across India, building a community of trust.' },
  { year: '2024', title: 'Soilscape Announced', desc: 'Unveiled our upcoming premium project, expanding our footprint in Dholera Smart City.' },
  { year: '2025', title: 'Expanding Horizons', desc: 'New projects in pipeline. Continuing to deliver genuine value to investors and homebuyers alike.' },
]

const values = [
  { icon: '🛡️', title: 'Integrity First', desc: 'Clear titles, complete documentation, zero hidden charges on every plot.' },
  { icon: '🤝', title: 'Investor Trust', desc: '500+ investors across India trust us with their Dholera investments.' },
  { icon: '📋', title: 'Full Transparency', desc: 'RERA approved projects, open communication, no surprises.' },
  { icon: '🏗️', title: 'Development Expertise', desc: 'Land acquisition to infrastructure — we handle everything.' },
  { icon: '📍', title: 'Prime Locations', desc: 'Near Dholera Airport, Expressway, and DMIC Corridor.' },
  { icon: '💰', title: 'Genuine Pricing', desc: 'Direct from developer — no broker commissions.' },
]

export default function AboutPage() {
  const router = useRouter()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)

  return (
    <div style={{ minHeight: '100vh', background: '#fafafa' }}>
      {/* Sticky Header */}
      <div className="about-header" style={{
        background: '#1a3c5e',
        padding: '0.75rem 1rem',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <button
            onClick={() => router.push('/')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'none',
              border: 'none',
              color: 'white',
              fontFamily: fontStack,
              fontWeight: '500',
              fontSize: '0.85rem',
              cursor: 'pointer',
              padding: '0.4rem 0',
              flexShrink: 0,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            <span className="back-text">Back to Home</span>
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '6px',
              background: 'linear-gradient(135deg, #f0d078, #c8a45a)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a3c5e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
                <path d="M9 21V13h6v8" />
              </svg>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
              <span style={{
                fontSize: '1.4rem',
                fontWeight: '900',
                fontFamily: 'Georgia, "Times New Roman", serif',
                color: '#f0d078',
                letterSpacing: '-1px',
                lineHeight: 1,
              }}>D</span>
              <span style={{
                fontSize: '0.8rem',
                fontWeight: '300',
                fontFamily: fontStack,
                color: 'white',
                letterSpacing: '2px',
                textTransform: 'lowercase',
                lineHeight: 1,
              }}>holera</span>
            </div>
          </div>
          <a
            href="tel:+919998068887"
            style={{
              padding: '0.45rem 1rem',
              borderRadius: '5px',
              background: 'linear-gradient(135deg, #f0d078, #c8a45a)',
              color: '#1a3c5e',
              fontFamily: fontStack,
              fontWeight: '600',
              fontSize: '0.75rem',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              flexShrink: 0,
              whiteSpace: 'nowrap',
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
            <span className="call-text">Call Now</span>
          </a>
        </div>
      </div>

      {/* Hero Banner */}
      <section style={{
        position: 'relative',
        height: '55vh',
        minHeight: '420px',
        overflow: 'hidden',
      }}>
        <img
          src="https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=61"
          alt="Dholera Smart City"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(transparent 10%, rgba(26,60,94,0.9) 100%)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '3.5rem',
          left: '1.5rem',
          right: '1.5rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.7rem',
            fontFamily: fontStack,
            fontWeight: '700',
            color: 'white',
            padding: '0.35rem 1rem',
            borderRadius: '4px',
            background: '#c8a45a',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>
            About Dholera & LNC Developers
          </span>
          <h1 style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontFamily: fontStack,
            fontWeight: '800',
            color: 'white',
            marginBottom: '0.5rem',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            lineHeight: 1.2,
          }}>
            India&apos;s First Greenfield Smart City
          </h1>
          <p style={{
            fontSize: '1.05rem',
            fontFamily: fontStack,
            fontWeight: '400',
            color: 'rgba(255,255,255,0.9)',
            textShadow: '0 1px 4px rgba(0,0,0,0.3)',
            maxWidth: '650px',
            lineHeight: 1.6,
          }}>
            Dholera Special Investment Region — 920 sq km of future-ready infrastructure under the Delhi-Mumbai Industrial Corridor
          </p>
        </div>
      </section>

      {/* ===== SECTION 1: About Dholera SIR ===== */}
      <section style={{ padding: '5rem 1.5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              fontSize: '0.75rem',
              fontFamily: fontStack,
              fontWeight: '700',
              color: '#c8a45a',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}>
              About Dholera SIR
            </span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
              fontFamily: fontStack,
              fontWeight: '800',
              color: '#1a3c5e',
              margin: '0.5rem 0',
            }}>
              The Future of Urban India
            </h2>
            <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #c8a45a, #f0d078)', margin: '0.75rem auto 0' }} />
          </div>

          <div className="about-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '3rem',
            alignItems: 'center',
          }}>
            <div>
              <p style={{
                fontSize: '1rem',
                fontFamily: fontStack,
                fontWeight: '400',
                color: '#444',
                lineHeight: 2,
                marginBottom: '1.25rem',
              }}>
                <strong style={{ color: '#1a3c5e' }}>Dholera Special Investment Region (SIR)</strong> is India&apos;s first and largest greenfield smart city, envisioned by Prime Minister Narendra Modi. Spanning an impressive 920 sq km — twice the size of Delhi — it is being developed as the flagship node of the ambitious <strong style={{ color: '#1a3c5e' }}>Delhi-Mumbai Industrial Corridor (DMIC)</strong>.
              </p>
              <p style={{
                fontSize: '1rem',
                fontFamily: fontStack,
                fontWeight: '400',
                color: '#444',
                lineHeight: 2,
                marginBottom: '1.25rem',
              }}>
                Located in Ahmedabad district, Gujarat, Dholera is strategically positioned to become a global manufacturing, logistics, and innovation hub. The city features well-defined zones — residential, commercial, financial, industrial, entertainment, and institutional — all powered by world-class infrastructure including underground utilities, smart governance, and sustainable energy systems.
              </p>
              <p style={{
                fontSize: '1rem',
                fontFamily: fontStack,
                fontWeight: '400',
                color: '#444',
                lineHeight: 2,
              }}>
                With an international airport under construction, a six-lane expressway nearing completion, proposed metro connectivity, and one of the world&apos;s largest solar parks — Dholera is not just a city being planned, it&apos;s a city being built. The activation zone is already operational, roads are laid, and industries are moving in.
              </p>
            </div>
            <div style={{ position: 'relative' }}>
              <img
                src="https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=103"
                alt="Dholera Smart City Development"
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-20px',
                background: '#1a3c5e',
                borderRadius: '12px',
                padding: '1.25rem 1.75rem',
                boxShadow: '0 10px 30px rgba(26,60,94,0.3)',
              }}>
                <div style={{ fontSize: '2rem', fontFamily: fontStack, fontWeight: '800', color: '#f0d078', lineHeight: 1 }}>920</div>
                <div style={{ fontSize: '0.75rem', fontFamily: fontStack, fontWeight: '500', color: 'rgba(255,255,255,0.7)', marginTop: '0.25rem' }}>sq km SIR Area</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: Key Features / Stats ===== */}
      <section style={{ padding: '5rem 1.5rem', background: '#1a3c5e', marginTop: '5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              fontSize: '0.75rem',
              fontFamily: fontStack,
              fontWeight: '700',
              color: '#f0d078',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}>
              Key Highlights
            </span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
              fontFamily: fontStack,
              fontWeight: '800',
              color: 'white',
              margin: '0.5rem 0',
            }}>
              Dholera by the Numbers
            </h2>
            <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #c8a45a, #f0d078)', margin: '0.75rem auto 0' }} />
          </div>

          <div className="stats-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}>
            {keyFeatures.map((item, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '14px',
                  padding: '2rem',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.2)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '2.5rem', fontFamily: fontStack, fontWeight: '800', color: '#f0d078', lineHeight: 1 }}>{item.stat}</span>
                  {item.unit && <span style={{ fontSize: '1rem', fontFamily: fontStack, fontWeight: '600', color: '#c8a45a' }}>{item.unit}</span>}
                </div>
                <h4 style={{ fontSize: '1rem', fontFamily: fontStack, fontWeight: '700', color: 'white', marginBottom: '0.5rem' }}>
                  {item.label}
                </h4>
                <p style={{ fontSize: '0.85rem', fontFamily: fontStack, fontWeight: '400', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: Infrastructure ===== */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              fontSize: '0.75rem',
              fontFamily: fontStack,
              fontWeight: '700',
              color: '#c8a45a',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}>
              Infrastructure
            </span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
              fontFamily: fontStack,
              fontWeight: '800',
              color: '#1a3c5e',
              margin: '0.5rem 0',
            }}>
              World-Class Infrastructure Development
            </h2>
            <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #c8a45a, #f0d078)', margin: '0.75rem auto 0' }} />
            <p style={{
              fontSize: '1rem',
              fontFamily: fontStack,
              fontWeight: '400',
              color: '#666',
              maxWidth: '700px',
              margin: '1rem auto 0',
              lineHeight: 1.7,
            }}>
              Dholera is being built with infrastructure that rivals the best cities globally — from international connectivity to sustainable energy
            </p>
          </div>

          <div className="infra-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}>
            {infraItems.map((item, i) => (
              <div
                key={i}
                style={{
                  borderRadius: '14px',
                  overflow: 'hidden',
                  background: 'white',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = '0 16px 50px rgba(0,0,0,0.12)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'
                }}
              >
                <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.05)' }}
                    onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '0.75rem',
                    left: '0.75rem',
                    background: 'rgba(26,60,94,0.85)',
                    borderRadius: '8px',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    backdropFilter: 'blur(4px)',
                  }}>
                    {item.icon}
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{
                    fontSize: '1.05rem',
                    fontFamily: fontStack,
                    fontWeight: '700',
                    color: '#1a3c5e',
                    marginBottom: '0.6rem',
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '0.88rem',
                    fontFamily: fontStack,
                    fontWeight: '400',
                    color: '#666',
                    lineHeight: 1.7,
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: Gallery ===== */}
      <section style={{ padding: '4rem 1.5rem', background: '#f8f6f1' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              fontSize: '0.75rem',
              fontFamily: fontStack,
              fontWeight: '700',
              color: '#c8a45a',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}>
              Gallery
            </span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
              fontFamily: fontStack,
              fontWeight: '800',
              color: '#1a3c5e',
              margin: '0.5rem 0',
            }}>
              Dholera Smart City in Pictures
            </h2>
            <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #c8a45a, #f0d078)', margin: '0.75rem auto 0' }} />
          </div>

          <div className="gallery-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
          }}>
            {galleryImages.map((img, i) => (
              <div
                key={i}
                style={{
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  aspectRatio: i === 0 || i === 5 ? '1.5/1' : '1/1',
                  gridColumn: i === 0 ? 'span 2' : i === 5 ? 'span 2' : 'span 1',
                }}
                onClick={() => setLightboxIdx(i)}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.05)' }}
                  onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(transparent 50%, rgba(0,0,0,0.6) 100%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '1rem',
                }}
                  onMouseOver={(e) => { e.currentTarget.style.opacity = '1' }}
                  onMouseOut={(e) => { e.currentTarget.style.opacity = '0' }}
                >
                  <span style={{
                    fontSize: '0.85rem',
                    fontFamily: fontStack,
                    fontWeight: '600',
                    color: 'white',
                  }}>
                    {img.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Lightbox ===== */}
      {lightboxIdx !== null && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.92)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}
          onClick={() => setLightboxIdx(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIdx(null) }}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '2rem',
              cursor: 'pointer',
              fontFamily: fontStack,
              lineHeight: 1,
            }}
          >
            &times;
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIdx(lightboxIdx > 0 ? lightboxIdx - 1 : galleryImages.length - 1) }}
            style={{
              position: 'absolute',
              left: '1.5rem',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.3)',
              color: 'white',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              fontSize: '1.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            &#8249;
          </button>
          <img
            src={galleryImages[lightboxIdx].src.replace('w=800', 'w=1400')}
            alt={galleryImages[lightboxIdx].caption}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90%',
              maxHeight: '85vh',
              objectFit: 'contain',
              borderRadius: '8px',
            }}
          />
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIdx(lightboxIdx < galleryImages.length - 1 ? lightboxIdx + 1 : 0) }}
            style={{
              position: 'absolute',
              right: '1.5rem',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.3)',
              color: 'white',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              fontSize: '1.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            &#8250;
          </button>
          <div style={{
            position: 'absolute',
            bottom: '2rem',
            textAlign: 'center',
            color: 'white',
            fontFamily: fontStack,
          }}>
            <p style={{ fontSize: '0.95rem', fontWeight: '500', marginBottom: '0.25rem' }}>{galleryImages[lightboxIdx].caption}</p>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>{lightboxIdx + 1} / {galleryImages.length}</p>
          </div>
        </div>
      )}

      {/* ===== SECTION 4B: Our Projects ===== */}
      <section style={{ padding: '5rem 1.5rem', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              fontSize: '0.75rem',
              fontFamily: fontStack,
              fontWeight: '700',
              color: '#c8a45a',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}>
              Our Projects
            </span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
              fontFamily: fontStack,
              fontWeight: '800',
              color: '#1a3c5e',
              margin: '0.5rem 0',
            }}>
              Property in Dholera Smart City
            </h2>
            <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #c8a45a, #f0d078)', margin: '0.75rem auto 0' }} />
          </div>

          <div className="projects-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.75rem',
          }}>
            {[
              {
                name: 'WestWyn County',
                location: 'Fedra–Pipli Highway, Dholera',
                desc: 'WestWyn County – Residential Project in Dholera',
                image: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=58',
                tag: 'New Launch',
              },
              {
                name: 'Paradise 2',
                location: 'Dholera SIR Zone',
                desc: 'Paradise 2 – Premium Residential Plots in Dholera Smart City',
                image: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=59',
                tag: 'Premium',
              },
              {
                name: 'Orchid Township',
                location: 'Dholera Smart City',
                desc: 'Orchid Township – Residential Plots in Dholera Smart City',
                image: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=60',
                tag: 'Township',
              },
              {
                name: 'Paradise',
                location: 'Dholera SIR Zone',
                desc: 'Paradise – Premium Residential Plots Dholera',
                image: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=61',
                tag: 'Popular',
              },
              {
                name: 'Maple Garden',
                location: 'Maple Garden, Dholera',
                desc: 'Maple Garden – Peaceful Living & Smart Investment',
                image: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=79',
                tag: 'Garden Living',
              },
              {
                name: 'Marina Bay',
                location: 'Marina Bay, Dholera',
                desc: 'Marina Bay – Premium Plots in Dholera Smart City',
                image: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=103',
                tag: 'Waterfront',
              },
            ].map((project, i) => (
              <div
                key={i}
                style={{
                  background: 'white',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(0,0,0,0.05)',
                  cursor: 'pointer',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'
                }}
              >
                <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                  <img
                    src={project.image}
                    alt={project.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.05)' }}
                    onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
                  />
                  <span style={{
                    position: 'absolute',
                    top: '0.75rem',
                    left: '0.75rem',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '20px',
                    background: 'linear-gradient(135deg, #c8a45a, #f0d078)',
                    color: '#1a3c5e',
                    fontSize: '0.65rem',
                    fontFamily: fontStack,
                    fontWeight: '700',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                  }}>
                    {project.tag}
                  </span>
                </div>
                <div style={{ padding: '1.25rem 1.5rem' }}>
                  <p style={{ fontSize: '0.7rem', fontFamily: fontStack, fontWeight: '500', color: '#999', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#c8a45a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {project.location}
                  </p>
                  <h3 style={{
                    fontSize: '1rem',
                    fontFamily: fontStack,
                    fontWeight: '700',
                    color: '#1a3c5e',
                    marginBottom: '0.75rem',
                    lineHeight: 1.3,
                  }}>
                    {project.name}
                  </h3>
                  <p style={{ fontSize: '0.82rem', fontFamily: fontStack, fontWeight: '400', color: '#666', lineHeight: 1.6, marginBottom: '1rem' }}>
                    {project.desc}
                  </p>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.5rem 1.25rem',
                    borderRadius: '6px',
                    background: '#1a3c5e',
                    color: 'white',
                    fontSize: '0.78rem',
                    fontFamily: fontStack,
                    fontWeight: '600',
                    transition: 'all 0.2s ease',
                  }}>
                    Explore Project
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4C: Explore Dholera SIR ===== */}
      <section style={{ padding: '5rem 1.5rem', background: '#f8f6f1' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              fontSize: '0.75rem',
              fontFamily: fontStack,
              fontWeight: '700',
              color: '#c8a45a',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}>
              Explore
            </span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
              fontFamily: fontStack,
              fontWeight: '800',
              color: '#1a3c5e',
              margin: '0.5rem 0',
            }}>
              Dholera SIR
            </h2>
            <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #c8a45a, #f0d078)', margin: '0.75rem auto 0' }} />
          </div>

          <div className="sir-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.25rem',
          }}>
            {[
              { icon: '🏙️', title: 'Dholera Smart Investment Region', desc: 'India\'s first and largest planned smart city — Dholera SIR spans 920 sq km', image: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=61' },
              { icon: '🔗', title: 'Dholera Connectivity', desc: 'DSIR – The Future of Smart Urban Development with multi-modal connectivity', image: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=6' },
              { icon: '🏭', title: 'Mega Industries Presence', desc: 'Ahmedabad–Dholera Expressway: High-speed connectivity for industrial growth', image: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=65' },
              { icon: '🚧', title: 'Running & Completed Projects', desc: 'Dholera SIR — part of the ambitious Delhi-Mumbai Industrial Corridor (DMIC)', image: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=74' },
              { icon: '📊', title: 'Dholera Current Status', desc: 'Not just another development project — a transformative smart city initiative', image: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=103' },
              { icon: '✈️', title: 'Dholera International Airport', desc: 'A major greenfield international airport connecting Dholera to the world', image: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=79' },
              { icon: '🛣️', title: 'Dholera Expressway Six Lane', desc: 'Dholera Expressway – Six-lane connectivity to India\'s smart future', image: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=6' },
              { icon: '🚇', title: 'Dholera High Speed Metro', desc: 'Fast track to India\'s smart future with high-speed metro connectivity', image: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=74' },
              { icon: '🏗️', title: 'DMIC Project', desc: 'Delhi-Mumbai Industrial Corridor — India\'s smart industrial growth corridor', image: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=66' },
              { icon: '☀️', title: 'Dholera Solar Power Plant', desc: 'Powering India\'s green future with 5000 MW solar capacity', image: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=99' },
              { icon: '🏢', title: 'Dholera ABCD Building', desc: 'The nerve centre of India\'s first smart city — administration and data hub', image: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=58' },
              { icon: '⚡', title: 'Dholera Activation Zone', desc: 'The first step in India\'s smart industrial revolution', image: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=104' },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)'
                }}
              >
                <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.08)' }}
                    onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '0.6rem',
                    left: '0.6rem',
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(26,60,94,0.85)',
                    backdropFilter: 'blur(4px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                  }}>
                    {item.icon}
                  </div>
                </div>
                <div style={{ padding: '1rem 1.25rem' }}>
                  <h4 style={{
                    fontSize: '0.88rem',
                    fontFamily: fontStack,
                    fontWeight: '700',
                    color: '#1a3c5e',
                    marginBottom: '0.35rem',
                    lineHeight: 1.3,
                  }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.75rem', fontFamily: fontStack, fontWeight: '400', color: '#888', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                    {item.desc}
                  </p>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontSize: '0.75rem',
                    fontFamily: fontStack,
                    fontWeight: '600',
                    color: '#c8a45a',
                  }}>
                    Explore
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4D: ABCD Building Gallery ===== */}
      <section style={{ padding: '5rem 1.5rem', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              fontSize: '0.75rem',
              fontFamily: fontStack,
              fontWeight: '700',
              color: '#c8a45a',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}>
              Dholera Infrastructure
            </span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
              fontFamily: fontStack,
              fontWeight: '800',
              color: '#1a3c5e',
              margin: '0.5rem 0',
            }}>
              ABCD Building — The Nerve Centre
            </h2>
            <p style={{
              fontSize: '0.95rem',
              fontFamily: fontStack,
              fontWeight: '400',
              color: '#666',
              maxWidth: '650px',
              margin: '0.75rem auto 0',
              lineHeight: 1.7,
            }}>
              The Administration, Business, Convention &amp; Data Centre (ABCD) building is the operational headquarters of Dholera SIR — housing smart city governance and operations.
            </p>
            <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #c8a45a, #f0d078)', margin: '1rem auto 0' }} />
          </div>

          <div className="abcd-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
          }}>
            {[
              { src: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=58', caption: 'ABCD Building — Front View' },
              { src: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=59', caption: 'ABCD Building — Aerial View' },
              { src: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=60', caption: 'ABCD Building — Side Elevation' },
              { src: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=61', caption: 'ABCD Building — Interior Atrium' },
              { src: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=79', caption: 'ABCD Building — Convention Hall' },
              { src: 'https://dholera.gujarat.gov.in/web/image?model=project.gallery&field=images_project&id=103', caption: 'ABCD Building — Night View' },
            ].map((img, i) => (
              <div
                key={i}
                style={{
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  aspectRatio: '4/3',
                  cursor: 'pointer',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                }}
                onMouseOver={(e) => {
                  const overlay = e.currentTarget.querySelector('[data-overlay]') as HTMLElement
                  if (overlay) overlay.style.opacity = '1'
                  const image = e.currentTarget.querySelector('img') as HTMLElement
                  if (image) image.style.transform = 'scale(1.08)'
                }}
                onMouseOut={(e) => {
                  const overlay = e.currentTarget.querySelector('[data-overlay]') as HTMLElement
                  if (overlay) overlay.style.opacity = '0'
                  const image = e.currentTarget.querySelector('img') as HTMLElement
                  if (image) image.style.transform = 'scale(1)'
                }}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                />
                <div
                  data-overlay=""
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(transparent 50%, rgba(26,60,94,0.85) 100%)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '1rem',
                  }}
                >
                  <p style={{
                    fontSize: '0.82rem',
                    fontFamily: fontStack,
                    fontWeight: '600',
                    color: 'white',
                    margin: 0,
                  }}>
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              fontSize: '0.75rem',
              fontFamily: fontStack,
              fontWeight: '700',
              color: '#c8a45a',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}>
              About LNC Developers
            </span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
              fontFamily: fontStack,
              fontWeight: '800',
              color: '#1a3c5e',
              margin: '0.5rem 0',
            }}>
              Building Trust, Delivering Value in Dholera Smart City
            </h2>
            <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #c8a45a, #f0d078)', margin: '0.75rem auto 0' }} />
          </div>

          <div className="lnc-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2.5rem',
            alignItems: 'start',
          }}>
            {/* Left - Company Info */}
            <div>
              <div style={{
                background: 'white',
                borderRadius: '14px',
                padding: '2.5rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                marginBottom: '1.5rem',
              }}>
                <p style={{ fontSize: '0.98rem', fontFamily: fontStack, fontWeight: '400', color: '#444', lineHeight: 2, marginBottom: '1.25rem' }}>
                   <strong style={{ color: '#1a3c5e' }}>LNC Developers</strong> is a fast-growing real estate company focused on creating high-potential investment opportunities in <strong style={{ color: '#1a3c5e' }}>Dholera Smart City (Gujarat)</strong> — India&apos;s first planned Greenfield smart city and one of the most ambitious urban development projects in the world.
                </p>
                <p style={{ fontSize: '0.98rem', fontFamily: fontStack, fontWeight: '400', color: '#444', lineHeight: 2, marginBottom: '1.25rem' }}>
                   We specialize in premium plotted developments designed for investors, NRIs, and future homeowners who seek high returns, legal security, and long-term wealth creation. With a commitment to genuine pricing and investor-first approach, we have helped hundreds of families secure their financial future in one of the world&apos;s most promising smart cities.
                </p>
                <p style={{ fontSize: '0.98rem', fontFamily: fontStack, fontWeight: '400', color: '#444', lineHeight: 2 }}>
                   Our team brings together deep expertise in land acquisition, legal due diligence, project planning, and infrastructure development — ensuring that every plot we offer is not just an investment, but a gateway to India&apos;s smartest future.
                </p>
              </div>

              {/* Vision & Mission */}
              <div className="vm-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
              }}>
                <div style={{
                  padding: '1.75rem',
                  borderRadius: '12px',
                  background: 'white',
                  borderTop: '4px solid #c8a45a',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🎯</div>
                  <h3 style={{ fontSize: '1rem', fontFamily: fontStack, fontWeight: '700', color: '#1a3c5e', marginBottom: '0.6rem' }}>Our Vision</h3>
                  <p style={{ fontSize: '0.85rem', fontFamily: fontStack, fontWeight: '400', color: '#666', lineHeight: 1.7 }}>
                    To be the most trusted name in Indian real estate — recognized for genuine value, lasting investor relationships, and ethical land development.
                  </p>
                </div>
                <div style={{
                  padding: '1.75rem',
                  borderRadius: '12px',
                  background: 'white',
                  borderTop: '4px solid #1a3c5e',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🚀</div>
                  <h3 style={{ fontSize: '1rem', fontFamily: fontStack, fontWeight: '700', color: '#1a3c5e', marginBottom: '0.6rem' }}>Our Mission</h3>
                  <p style={{ fontSize: '0.85rem', fontFamily: fontStack, fontWeight: '400', color: '#666', lineHeight: 1.7 }}>
                    Affordable, legally verified plots in high-growth zones with 100% transparency, maximized ROI, and ethical practices at every stage.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Values + Journey */}
            <div>
              {/* Why Choose LNC */}
              <div style={{
                background: 'white',
                borderRadius: '14px',
                padding: '2rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                marginBottom: '1.5rem',
              }}>
                <h3 style={{ fontSize: '1.15rem', fontFamily: fontStack, fontWeight: '700', color: '#1a3c5e', marginBottom: '1.25rem' }}>
                  Why Choose LNC
                </h3>
                <div className="values-mini-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.75rem',
                }}>
                  {values.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        background: '#f8f6f1',
                        borderRadius: '10px',
                        padding: '1.1rem',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)'
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.08)'
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    >
                      <div style={{ fontSize: '1.3rem', marginBottom: '0.4rem' }}>{item.icon}</div>
                      <h4 style={{ fontSize: '0.82rem', fontFamily: fontStack, fontWeight: '700', color: '#1a3c5e', marginBottom: '0.3rem' }}>{item.title}</h4>
                      <p style={{ fontSize: '0.75rem', fontFamily: fontStack, fontWeight: '400', color: '#888', lineHeight: 1.5 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Journey */}
              <div style={{
                background: 'white',
                borderRadius: '14px',
                padding: '2rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              }}>
                <h3 style={{ fontSize: '1.15rem', fontFamily: fontStack, fontWeight: '700', color: '#1a3c5e', marginBottom: '1.25rem' }}>
                  Our Journey
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {milestones.map((m, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      gap: '1rem',
                      position: 'relative',
                      paddingBottom: i < milestones.length - 1 ? '1.25rem' : '0',
                    }}>
                      {i < milestones.length - 1 && (
                        <div style={{
                          position: 'absolute',
                          left: '17px',
                          top: '36px',
                          bottom: '0',
                          width: '2px',
                          background: 'linear-gradient(180deg, #c8a45a, #e8d5a8)',
                        }} />
                      )}
                      <div style={{
                        flexShrink: 0,
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: i === 0 ? 'linear-gradient(135deg, #c8a45a, #f0d078)' : '#f8f6f1',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: i === 0 ? 'none' : '2px solid #e8d5a8',
                        zIndex: 1,
                      }}>
                        <span style={{ fontSize: '0.6rem', fontFamily: fontStack, fontWeight: '700', color: i === 0 ? 'white' : '#c8a45a' }}>{m.year}</span>
                      </div>
                      <div style={{ flex: 1 }}>
                        <h4 style={{ fontSize: '0.88rem', fontFamily: fontStack, fontWeight: '700', color: '#1a3c5e', marginBottom: '0.2rem' }}>{m.title}</h4>
                        <p style={{ fontSize: '0.8rem', fontFamily: fontStack, fontWeight: '400', color: '#777', lineHeight: 1.6 }}>{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: FAQs ===== */}
      <section style={{ padding: '5rem 1.5rem', background: '#f8f6f1' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              fontSize: '0.75rem',
              fontFamily: fontStack,
              fontWeight: '700',
              color: '#c8a45a',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}>
              FAQs
            </span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
              fontFamily: fontStack,
              fontWeight: '800',
              color: '#1a3c5e',
              margin: '0.5rem 0',
            }}>
              Frequently Asked Questions
            </h2>
            <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #c8a45a, #f0d078)', margin: '0.75rem auto 0' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                  border: openFaq === i ? '1px solid rgba(200,164,90,0.3)' : '1px solid transparent',
                  transition: 'all 0.3s ease',
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    background: 'none',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span style={{
                    fontSize: '0.95rem',
                    fontFamily: fontStack,
                    fontWeight: '600',
                    color: openFaq === i ? '#1a3c5e' : '#333',
                    lineHeight: 1.4,
                  }}>
                    {faq.q}
                  </span>
                  <div style={{
                    flexShrink: 0,
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: openFaq === i ? '#1a3c5e' : '#f0f0f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                  }}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={openFaq === i ? 'white' : '#888'}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.3s ease',
                      }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </button>
                <div style={{
                  maxHeight: openFaq === i ? '300px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease',
                }}>
                  <p style={{
                    padding: '0 1.5rem 1.5rem',
                    fontSize: '0.9rem',
                    fontFamily: fontStack,
                    fontWeight: '400',
                    color: '#666',
                    lineHeight: 1.8,
                  }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Bottom CTA ===== */}
      <section style={{
        padding: '5rem 1.5rem',
        background: 'linear-gradient(135deg, #1a3c5e 0%, #0f2a42 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 80% 20%, rgba(200,164,90,0.12) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(200,164,90,0.08) 0%, transparent 50%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          maxWidth: '700px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}>
          <span style={{
            fontSize: '0.75rem',
            fontFamily: fontStack,
            fontWeight: '700',
            color: '#f0d078',
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}>
            Get Started Today
          </span>
          <h3 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            fontFamily: fontStack,
            fontWeight: '800',
            color: 'white',
            margin: '0.75rem 0',
            lineHeight: 1.3,
          }}>
            Ready to Invest in Dholera Smart City?
          </h3>
          <p style={{
            fontSize: '1rem',
            fontFamily: fontStack,
            fontWeight: '400',
            color: 'rgba(255,255,255,0.7)',
            maxWidth: '550px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.7,
          }}>
            Speak with our investment advisors today. Get personalized guidance, site visit scheduling, and exclusive project details.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="tel:+919998068887"
              style={{
                padding: '0.95rem 2.5rem',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #f0d078, #c8a45a)',
                color: '#1a3c5e',
                fontFamily: fontStack,
                fontWeight: '700',
                fontSize: '0.95rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 15px rgba(200,164,90,0.3)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(200,164,90,0.5)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(200,164,90,0.3)'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              Call +91 99980 68887
            </a>
            <a
              href="https://wa.me/919998068887?text=Hi%20LNC%20Developers%2C%20I%27m%20interested%20in%20investing%20in%20Dholera%20Smart%20City"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.95rem 2.5rem',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.3)',
                color: 'white',
                fontFamily: fontStack,
                fontWeight: '600',
                fontSize: '0.95rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Send WhatsApp Message
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#0f2a42',
        padding: '1.5rem',
        textAlign: 'center',
      }}>
        <p style={{
          fontSize: '0.8rem',
          fontFamily: fontStack,
          fontWeight: '400',
          color: 'rgba(255,255,255,0.5)',
        }}>
          &copy; {new Date().getFullYear()} LNC Developers. All rights reserved. | Turning Land into Legacy
        </p>
      </footer>

      <style jsx>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          .lnc-grid {
            grid-template-columns: 1fr !important;
          }
          .infra-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .sir-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .abcd-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .infra-grid {
            grid-template-columns: 1fr !important;
          }
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .vm-grid {
            grid-template-columns: 1fr !important;
          }
          .values-mini-grid {
            grid-template-columns: 1fr !important;
          }
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
          .sir-grid {
            grid-template-columns: 1fr !important;
          }
          .abcd-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .back-text {
            display: none !important;
          }
          .call-text {
            display: none !important;
          }
          .about-header {
            padding: 0.6rem 0.75rem !important;
          }
        }
      `}</style>
    </div>
  )
}
