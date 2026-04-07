'use client'

import { projectsData } from '@/app/data/projects'

const projects = projectsData.map((p) => ({
  title: p.title,
  status: p.status,
  description: p.description,
  image: p.image,
  features: p.features,
  href: `/projects/${p.slug}`,
}))

const Themes = () => {
  return (
    <section
      id="projects"
      style={{
        padding: '5rem 1.5rem',
        background: 'white',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{
            fontSize: '0.8rem',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            fontWeight: '600',
            color: '#c8a45a',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>
            Our Developments
          </p>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            fontWeight: '700',
            color: '#1a3c5e',
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}>
            Featured Projects
          </h2>
          <div style={{ width: '60px', height: '3px', background: '#c8a45a', margin: '0 auto' }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
        }}>
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                background: 'white',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                transition: 'all 0.4s ease',
                border: '1px solid rgba(0,0,0,0.06)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.1)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'
              }}
            >
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '220px',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <span style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  fontSize: '0.7rem',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontWeight: '600',
                  color: 'white',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '4px',
                  background: project.status === 'Now Selling' ? '#2d8a4e' : project.status === 'Upcoming' ? '#c8a45a' : '#1a3c5e',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                }}>
                  {project.status}
                </span>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontWeight: '600',
                  color: '#1a3c5e',
                  marginBottom: '0.75rem',
                }}>
                  {project.title}
                </h3>
                <p style={{
                  fontSize: '0.85rem',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontWeight: '400',
                  color: '#666',
                  lineHeight: 1.6,
                  marginBottom: '1.25rem',
                }}>
                  {project.description}
                </p>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1.25rem',
                }}>
                  {project.features.map((feature, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.7rem',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                        fontWeight: '500',
                        color: '#1a3c5e',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '4px',
                        background: 'rgba(26, 60, 94, 0.06)',
                        letterSpacing: '0.3px',
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <a
                  href={project.href}
                  style={{
                    fontSize: '0.85rem',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                    fontWeight: '600',
                    color: '#c8a45a',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    transition: 'gap 0.3s ease',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.gap = '0.7rem')}
                  onMouseOut={(e) => (e.currentTarget.style.gap = '0.4rem')}
                >
                  View Details
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="repeat(3"] {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          div[style*="repeat(3"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Themes
