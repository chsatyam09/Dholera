'use client'

const fontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'

const whyChooseItems = [
  { icon: '💰', title: 'Genuine Pricing', desc: 'Zero hidden charges, zero surprises. Our pricing is transparent, competitive, and designed to give you maximum value on every square foot of your investment in Dholera Smart City.' },
  { icon: '✅', title: 'Legally Verified', desc: 'Every plot comes with clear titles, government-approved documentation, NA/NOC clearances, and complete legal verification — so you invest with total peace of mind and zero risk.' },
  { icon: '📍', title: 'Prime Locations', desc: 'Strategically positioned plots near the Dholera International Airport, Ahmedabad-Dholera Expressway, DMIC corridor, metro line, and upcoming commercial & IT hubs for maximum appreciation.' },
  { icon: '🤝', title: 'Investor Trust', desc: 'Trusted by 500+ investors across India and abroad. Our consistent delivery, dedicated post-sale support, and transparent dealings have built a community of repeat investors who believe in our vision.' },
  { icon: '🏗️', title: 'Development Expertise', desc: 'With years of hands-on experience in land acquisition, development planning, and infrastructure execution, we ensure every project meets the highest standards of quality and future-readiness.' },
  { icon: '📈', title: 'High ROI Potential', desc: 'Early-stage investment in India\'s first greenfield smart city means exponential appreciation potential. Our investors have already seen significant value growth as Dholera\'s infrastructure rapidly develops.' },
]

export default function WhyChooseLNC() {
  return (
    <section
      style={{
        padding: '6rem 1.5rem',
        background: '#f8f6f1',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{
            fontSize: '0.8rem',
            fontFamily: fontStack,
            fontWeight: '600',
            color: '#c8a45a',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>
            Our Strengths
          </p>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
            fontFamily: fontStack,
            fontWeight: '700',
            color: '#1a3c5e',
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}>
            Why Choose LNC Developers
          </h2>
          <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #c8a45a, #f0d078)', margin: '0 auto 1.5rem' }} />
          <p style={{
            fontSize: '1.05rem',
            fontFamily: fontStack,
            fontWeight: '400',
            color: '#666',
            lineHeight: 1.7,
            maxWidth: '700px',
            margin: '0 auto',
          }}>
            We don&apos;t just sell plots — we build lasting relationships with our investors.
            Here&apos;s what sets us apart in the Dholera real estate landscape.
          </p>
        </div>

        <div className="why-choose-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
        }}>
          {whyChooseItems.map((item, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                borderRadius: '14px',
                padding: '2.25rem 1.75rem',
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                transition: 'all 0.3s ease',
                cursor: 'default',
                border: '1px solid rgba(0,0,0,0.04)',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 16px 50px rgba(0,0,0,0.1)'
                e.currentTarget.style.borderColor = 'rgba(200,164,90,0.3)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.04)'
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.04)'
              }}
            >
              <div style={{
                fontSize: '2.8rem',
                marginBottom: '1.25rem',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
              }}>
                {item.icon}
              </div>
              <h3 style={{
                fontSize: '1.15rem',
                fontFamily: fontStack,
                fontWeight: '700',
                color: '#1a3c5e',
                marginBottom: '0.75rem',
              }}>
                {item.title}
              </h3>
              <p style={{
                fontSize: '0.9rem',
                fontFamily: fontStack,
                fontWeight: '400',
                color: '#666',
                lineHeight: 1.7,
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .why-choose-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .why-choose-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
