'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { getProjectBySlug } from '@/app/data/projects'

const fontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'

export default function ProjectPage() {
  const params = useParams()
  const router = useRouter()
  const project = getProjectBySlug(params.slug as string)
  const [selectedImage, setSelectedImage] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  if (!project) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: fontStack,
        gap: '1.5rem',
      }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '700', color: '#1a3c5e' }}>Project Not Found</h1>
        <p style={{ fontSize: '1rem', color: '#666' }}>The project you&apos;re looking for doesn&apos;t exist.</p>
        <button
          onClick={() => router.push('/')}
          style={{
            padding: '0.75rem 2rem',
            borderRadius: '6px',
            background: '#1a3c5e',
            color: 'white',
            border: 'none',
            fontFamily: fontStack,
            fontWeight: '600',
            fontSize: '0.95rem',
            cursor: 'pointer',
          }}
        >
          Back to Home
        </button>
      </div>
    )
  }

  const statusColor = project.status === 'Now Selling' ? '#2d8a4e' : project.status === 'Upcoming' ? '#c8a45a' : '#1a3c5e'

  return (
    <div style={{ minHeight: '100vh', background: '#fafafa' }}>
      <div style={{
        background: '#1a3c5e',
        padding: '1rem 1.5rem',
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
              gap: '0.5rem',
              background: 'none',
              border: 'none',
              color: 'white',
              fontFamily: fontStack,
              fontWeight: '500',
              fontSize: '0.9rem',
              cursor: 'pointer',
              padding: '0.5rem 0',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Back to Home
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontFamily: fontStack, fontWeight: '700', fontSize: '1.1rem', color: '#f0d078' }}>LNC</span>
            <span style={{ fontFamily: fontStack, fontWeight: '400', fontSize: '1.1rem', color: 'white' }}>Developers</span>
          </div>
          <a
            href={`tel:${project.ctaPhone}`}
            style={{
              padding: '0.5rem 1.25rem',
              borderRadius: '5px',
              background: 'linear-gradient(135deg, #f0d078, #c8a45a)',
              color: '#1a3c5e',
              fontFamily: fontStack,
              fontWeight: '600',
              fontSize: '0.8rem',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
            Call Now
          </a>
        </div>
      </div>

      <section style={{
        position: 'relative',
        height: '50vh',
        minHeight: '400px',
        overflow: 'hidden',
      }}>
        <img
          src={project.galleryImages[selectedImage]}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 0.4s ease',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(transparent 40%, rgba(0,0,0,0.7) 100%)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '2.5rem',
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
            background: statusColor,
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>
            {project.status}
          </span>
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontFamily: fontStack,
            fontWeight: '800',
            color: 'white',
            marginBottom: '0.5rem',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
          }}>
            {project.title}
          </h1>
          <p style={{
            fontSize: '1.1rem',
            fontFamily: fontStack,
            fontWeight: '400',
            color: 'rgba(255,255,255,0.9)',
            textShadow: '0 1px 4px rgba(0,0,0,0.3)',
          }}>
            {project.tagline}
          </p>
        </div>
        <button
          onClick={() => setLightboxOpen(true)}
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            right: '2rem',
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '8px',
            padding: '0.6rem 1.25rem',
            color: 'white',
            fontFamily: fontStack,
            fontWeight: '600',
            fontSize: '0.8rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          View All Photos
        </button>
      </section>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          marginTop: '-2rem',
          position: 'relative',
          zIndex: 2,
          overflowX: 'auto',
          paddingBottom: '0.5rem',
        }}>
          {project.galleryImages.map((img, i) => (
            <div
              key={i}
              onClick={() => setSelectedImage(i)}
              style={{
                flexShrink: 0,
                width: '100px',
                height: '70px',
                borderRadius: '8px',
                overflow: 'hidden',
                cursor: 'pointer',
                border: selectedImage === i ? '3px solid #c8a45a' : '3px solid white',
                boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                transition: 'all 0.2s ease',
                opacity: selectedImage === i ? 1 : 0.7,
              }}
            >
              <img src={img} alt={`${project.title} ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '2.5rem auto 0', padding: '0 1.5rem' }}>
        <div className="project-layout" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 380px',
          gap: '2.5rem',
          alignItems: 'start',
        }}>
          <div>
            <div style={{
              background: 'white',
              borderRadius: '14px',
              padding: '2.5rem',
              boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              marginBottom: '1.5rem',
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontFamily: fontStack,
                fontWeight: '700',
                color: '#1a3c5e',
                marginBottom: '0.75rem',
              }}>
                About {project.title}
              </h2>
              <div style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, #c8a45a, #f0d078)', marginBottom: '1.5rem' }} />
              {project.longDescription.map((para, i) => (
                <p key={i} style={{
                  fontSize: '0.98rem',
                  fontFamily: fontStack,
                  fontWeight: '400',
                  color: '#555',
                  lineHeight: 1.9,
                  marginBottom: i < project.longDescription.length - 1 ? '1.25rem' : 0,
                }}>
                  {para}
                </p>
              ))}
            </div>

            <div style={{
              background: 'white',
              borderRadius: '14px',
              padding: '2.5rem',
              boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              marginBottom: '1.5rem',
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontFamily: fontStack,
                fontWeight: '700',
                color: '#1a3c5e',
                marginBottom: '0.75rem',
              }}>
                Project Highlights
              </h2>
              <div style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, #c8a45a, #f0d078)', marginBottom: '1.5rem' }} />
              <div className="highlights-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
              }}>
                {project.highlights.map((item, i) => (
                  <div key={i} style={{
                    background: '#f8f6f1',
                    borderRadius: '10px',
                    padding: '1.25rem',
                    textAlign: 'center',
                  }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                    <p style={{ fontSize: '0.72rem', fontFamily: fontStack, fontWeight: '600', color: '#999', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: '0.9rem', fontFamily: fontStack, fontWeight: '700', color: '#1a3c5e' }}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '14px',
              padding: '2.5rem',
              boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              marginBottom: '1.5rem',
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontFamily: fontStack,
                fontWeight: '700',
                color: '#1a3c5e',
                marginBottom: '0.75rem',
              }}>
                Amenities & Infrastructure
              </h2>
              <div style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, #c8a45a, #f0d078)', marginBottom: '1.5rem' }} />
              <div className="amenities-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1rem',
              }}>
                {project.amenities.map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '1rem 0.5rem',
                    borderRadius: '10px',
                    transition: 'all 0.2s ease',
                    cursor: 'default',
                  }}
                    onMouseOver={(e) => { e.currentTarget.style.background = '#f8f6f1' }}
                    onMouseOut={(e) => { e.currentTarget.style.background = 'transparent' }}
                  >
                    <span style={{ fontSize: '1.6rem' }}>{item.icon}</span>
                    <span style={{ fontSize: '0.78rem', fontFamily: fontStack, fontWeight: '500', color: '#555', textAlign: 'center', lineHeight: 1.3 }}>
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '14px',
              padding: '2.5rem',
              boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              marginBottom: '1.5rem',
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontFamily: fontStack,
                fontWeight: '700',
                color: '#1a3c5e',
                marginBottom: '0.75rem',
              }}>
                Location & Connectivity
              </h2>
              <div style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, #c8a45a, #f0d078)', marginBottom: '1.5rem' }} />
              <p style={{
                fontSize: '1rem',
                fontFamily: fontStack,
                fontWeight: '600',
                color: '#1a3c5e',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c8a45a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                {project.location.area}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {project.location.nearbyLandmarks.map((landmark, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    background: '#f8f6f1',
                    borderRadius: '8px',
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8a45a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span style={{ fontSize: '0.9rem', fontFamily: fontStack, fontWeight: '500', color: '#555' }}>
                      {landmark}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ position: 'sticky', top: '80px' }}>
            <div style={{
              background: 'white',
              borderRadius: '14px',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              border: '1px solid rgba(200,164,90,0.2)',
              marginBottom: '1.5rem',
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                fontFamily: fontStack,
                fontWeight: '700',
                color: '#1a3c5e',
                marginBottom: '1.25rem',
                textAlign: 'center',
              }}>
                Interested in {project.title}?
              </h3>
              {project.pricing && (
                <div style={{ marginBottom: '1.5rem' }}>
                  {project.pricing.startingFrom && (
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '0.75rem 0',
                      borderBottom: '1px solid #f0f0f0',
                    }}>
                      <span style={{ fontSize: '0.85rem', fontFamily: fontStack, color: '#888' }}>Pricing</span>
                      <span style={{ fontSize: '0.85rem', fontFamily: fontStack, fontWeight: '600', color: '#1a3c5e' }}>{project.pricing.startingFrom}</span>
                    </div>
                  )}
                  {project.pricing.plotSizes && (
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '0.75rem 0',
                      borderBottom: '1px solid #f0f0f0',
                    }}>
                      <span style={{ fontSize: '0.85rem', fontFamily: fontStack, color: '#888' }}>Plot Sizes</span>
                      <span style={{ fontSize: '0.85rem', fontFamily: fontStack, fontWeight: '600', color: '#1a3c5e' }}>{project.pricing.plotSizes}</span>
                    </div>
                  )}
                  {project.pricing.paymentPlan && (
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '0.75rem 0',
                    }}>
                      <span style={{ fontSize: '0.85rem', fontFamily: fontStack, color: '#888' }}>Payment</span>
                      <span style={{ fontSize: '0.85rem', fontFamily: fontStack, fontWeight: '600', color: '#1a3c5e', textAlign: 'right', maxWidth: '180px' }}>{project.pricing.paymentPlan}</span>
                    </div>
                  )}
                </div>
              )}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a
                  href={`tel:${project.ctaPhone}`}
                  style={{
                    fontSize: '0.95rem',
                    fontFamily: fontStack,
                    fontWeight: '600',
                    color: 'white',
                    textDecoration: 'none',
                    padding: '0.9rem',
                    borderRadius: '8px',
                    background: '#1a3c5e',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#2a5580'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(26,60,94,0.3)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = '#1a3c5e'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                  Book Site Visit
                </a>
                <a
                  href={project.ctaWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.95rem',
                    fontFamily: fontStack,
                    fontWeight: '600',
                    color: 'white',
                    textDecoration: 'none',
                    padding: '0.9rem',
                    borderRadius: '8px',
                    background: '#25D366',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,211,102,0.3)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp Inquiry
                </a>
                <a
                  href="#"
                  style={{
                    fontSize: '0.95rem',
                    fontFamily: fontStack,
                    fontWeight: '600',
                    color: '#1a3c5e',
                    textDecoration: 'none',
                    padding: '0.9rem',
                    borderRadius: '8px',
                    background: 'transparent',
                    border: '2px solid #c8a45a',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#c8a45a'
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = '#1a3c5e'
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Download Brochure
                </a>
              </div>
            </div>

            <div style={{
              background: '#1a3c5e',
              borderRadius: '14px',
              padding: '1.75rem',
              color: 'white',
            }}>
              <h4 style={{
                fontSize: '0.95rem',
                fontFamily: fontStack,
                fontWeight: '600',
                marginBottom: '1rem',
                color: '#f0d078',
              }}>
                Quick Features
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.features.map((f, i) => (
                  <span key={i} style={{
                    fontSize: '0.75rem',
                    fontFamily: fontStack,
                    fontWeight: '500',
                    color: 'white',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '20px',
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}>
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{
        maxWidth: '1200px',
        margin: '3rem auto',
        padding: '0 1.5rem',
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #1a3c5e, #2a5580)',
          borderRadius: '16px',
          padding: '3rem 2.5rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 80% 20%, rgba(200,164,90,0.15) 0%, transparent 50%)',
            pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 style={{
              fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
              fontFamily: fontStack,
              fontWeight: '700',
              color: 'white',
              marginBottom: '0.75rem',
            }}>
              Ready to Invest in {project.title}?
            </h3>
            <p style={{
              fontSize: '0.95rem',
              fontFamily: fontStack,
              fontWeight: '400',
              color: 'rgba(255,255,255,0.8)',
              marginBottom: '2rem',
              maxWidth: '500px',
              margin: '0 auto 2rem',
              lineHeight: 1.6,
            }}>
              Speak with our investment advisors today. Get personalized guidance, site visit scheduling, and exclusive pricing details.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={`tel:${project.ctaPhone}`}
                style={{
                  padding: '0.85rem 2.5rem',
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
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(200,164,90,0.4)'
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
                href={project.ctaWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.85rem 2.5rem',
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
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Send WhatsApp Message
              </a>
            </div>
          </div>
        </div>
      </div>

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

      {lightboxOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.95)',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: 'white',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            &times;
          </button>
          <img
            src={project.galleryImages[selectedImage]}
            alt={project.title}
            style={{
              maxWidth: '90vw',
              maxHeight: '80vh',
              objectFit: 'contain',
              borderRadius: '8px',
            }}
            onClick={(e) => e.stopPropagation()}
          />
          <div style={{
            display: 'flex',
            gap: '0.75rem',
            marginTop: '1.5rem',
          }}>
            {project.galleryImages.map((img, i) => (
              <div
                key={i}
                onClick={(e) => { e.stopPropagation(); setSelectedImage(i) }}
                style={{
                  width: '80px',
                  height: '55px',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: selectedImage === i ? '2px solid #c8a45a' : '2px solid transparent',
                  opacity: selectedImage === i ? 1 : 0.5,
                  transition: 'all 0.2s ease',
                }}
              >
                <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
          <div style={{
            position: 'absolute',
            left: '1.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
          }}>
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedImage((prev) => (prev - 1 + project.galleryImages.length) % project.galleryImages.length) }}
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                color: 'white',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              &#8249;
            </button>
          </div>
          <div style={{
            position: 'absolute',
            right: '1.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
          }}>
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedImage((prev) => (prev + 1) % project.galleryImages.length) }}
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                color: 'white',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              &#8250;
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 900px) {
          .project-layout {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .highlights-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .amenities-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </div>
  )
}
