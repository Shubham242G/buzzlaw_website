// app/contact/page.tsx
'use client'

import { useState, useEffect } from 'react'
import './contact.css'

export default function ContactPage() {
  const [scrolled, setScrolled] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [selectedIntent, setSelectedIntent] = useState('Brand Protection')
  const [urgency, setUrgency] = useState('This Week')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const navbar = document.getElementById('navbar')
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled')
        } else {
          navbar.classList.remove('scrolled')
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    
    // Cursor
    const cursor = document.getElementById('cursor')
    const ring = document.getElementById('ring')
    
    const handleMouseMove = (e: MouseEvent) => {
      if (cursor && ring) {
        cursor.style.left = e.clientX + 'px'
        cursor.style.top = e.clientY + 'px'
        ring.style.left = e.clientX + 'px'
        ring.style.top = e.clientY + 'px'
      }
    }
    
    document.addEventListener('mousemove', handleMouseMove)
    
    // Reveal observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.08 })
    
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
      observer.observe(el)
    })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousemove', handleMouseMove)
      observer.disconnect()
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  const selectIntent = (intent: string) => {
    setSelectedIntent(intent)
  }

  const setUrgencyLevel = (level: string) => {
    setUrgency(level)
  }

  const intentOptions = [
    { emoji: '🛡️', label: 'Brand Protection' },
    { emoji: '📝', label: 'A Contract' },
    { emoji: '📱', label: 'Influencer Law' },
    { emoji: '✂️', label: 'Fashion Startup' },
    { emoji: '⚖️', label: 'A Dispute' },
    { emoji: '💬', label: 'General Query' },
  ]

  return (
    <div className="contact-page">
      {/* HERO */}
      <section className="page-hero" style={{
        minHeight: '52vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 64px 80px',
        position: 'relative',
        overflow: 'hidden',
        marginTop: '80px'
      }}>
        <div className="hero-ambient"></div>
        <div className="hero-grid"></div>
        <div className="hero-bg-word">HELLO</div>

        <div className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '.7rem', letterSpacing: '.22em', textTransform: 'uppercase', color: '#9866cb', marginBottom: '20px', position: 'relative', zIndex: 1 }}>
          <div className="eyebrow-line"></div>Get In Touch
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3.5rem, 8vw, 7.5rem)', fontWeight: 300, lineHeight: '.9', letterSpacing: '-.025em', position: 'relative', zIndex: 1, marginBottom: '24px' }}>
          Let's talk about<br />
          <em style={{ fontStyle: 'italic', color: '#9866cb' }}>your brand.</em>
        </h1>
        <p className="hero-sub" style={{ fontSize: '.95rem', lineHeight: 1.8, color: 'rgba(245,240,232,.5)', maxWidth: '460px', position: 'relative', zIndex: 1 }}>
          Whether you have a legal crisis or just want to understand where you stand — your first conversation with us is always free.
        </p>
      </section>

      {/* MAIN CONTACT AREA */}
      <div className="contact-wrap" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.1fr',
        minHeight: '100vh',
        borderTop: '1px solid rgba(245,240,232,0.06)'
      }}>
        
        {/* LEFT PANEL */}
        <div className="contact-left" style={{
          padding: '80px 64px 80px 64px',
          borderRight: '1px solid rgba(245,240,232,0.06)',
          position: 'sticky',
          top: 0,
          height: 'fit-content'
        }}>
          <div className="left-intro reveal-left" style={{ marginBottom: '56px' }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 2.5vw, 2.6rem)', fontWeight: 300, lineHeight: 1.1, marginBottom: '16px' }}>
              We're here when<br />
              <em style={{ fontStyle: 'italic', color: '#9866cb' }}>you need us.</em>
            </h2>
            <p style={{ fontSize: '.88rem', lineHeight: 1.85, color: 'rgba(245,240,232,.5)', marginTop: '14px' }}>
              Most legal problems faced by brands and creators are predictable — and preventable. Drop us a message and we'll tell you exactly where you stand, what's urgent, and what can wait.
            </p>
          </div>

          <div className="info-blocks reveal-left" style={{ display: 'flex', flexDirection: 'column', marginBottom: '56px' }}>
            <div className="info-block" style={{ padding: '28px 0', borderTop: '1px solid rgba(245,240,232,0.06)', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div className="info-icon-wrap">✉</div>
              <div className="info-content">
                <div className="info-label" style={{ fontSize: '.62rem', letterSpacing: '.18em', textTransform: 'uppercase', color: '#9866cb', marginBottom: '5px' }}>Email Us</div>
                <div className="info-value" style={{ fontSize: '.9rem', color: '#f5f0e8', lineHeight: 1.55 }}><a href="mailto:hello@buzzlaw.in" style={{ color: '#f5f0e8', textDecoration: 'none' }}>hello@buzzlaw.in</a></div>
                <div className="info-sub" style={{ fontSize: '.75rem', color: '#888', marginTop: '3px', lineHeight: 1.5 }}>We respond within 24 hours on working days</div>
              </div>
            </div>
            <div className="info-block" style={{ padding: '28px 0', borderTop: '1px solid rgba(245,240,232,0.06)', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div className="info-icon-wrap">📞</div>
              <div className="info-content">
                <div className="info-label" style={{ fontSize: '.62rem', letterSpacing: '.18em', textTransform: 'uppercase', color: '#9866cb', marginBottom: '5px' }}>Call Us</div>
                <div className="info-value" style={{ fontSize: '.9rem', color: '#f5f0e8', lineHeight: 1.55 }}><a href="tel:+911140000000" style={{ color: '#f5f0e8', textDecoration: 'none' }}>+91 11 4000 0000</a></div>
                <div className="info-sub" style={{ fontSize: '.75rem', color: '#888', marginTop: '3px', lineHeight: 1.5 }}>Mon – Sat, 10am – 7pm IST</div>
              </div>
            </div>
            <div className="info-block" style={{ padding: '28px 0', borderTop: '1px solid rgba(245,240,232,0.06)', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div className="info-icon-wrap">💬</div>
              <div className="info-content">
                <div className="info-label" style={{ fontSize: '.62rem', letterSpacing: '.18em', textTransform: 'uppercase', color: '#9866cb', marginBottom: '5px' }}>WhatsApp</div>
                <div className="info-value" style={{ fontSize: '.9rem', color: '#f5f0e8', lineHeight: 1.55 }}><a href="#" style={{ color: '#f5f0e8', textDecoration: 'none' }}>+91 98100 00000</a></div>
                <div className="info-sub" style={{ fontSize: '.75rem', color: '#888', marginTop: '3px', lineHeight: 1.5 }}>For quick queries — we're usually fast</div>
              </div>
            </div>
            <div className="info-block" style={{ padding: '28px 0', borderTop: '1px solid rgba(245,240,232,0.06)', borderBottom: '1px solid rgba(245,240,232,0.06)', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div className="info-icon-wrap">📍</div>
              <div className="info-content">
                <div className="info-label" style={{ fontSize: '.62rem', letterSpacing: '.18em', textTransform: 'uppercase', color: '#9866cb', marginBottom: '5px' }}>Office</div>
                <div className="info-value" style={{ fontSize: '.9rem', color: '#f5f0e8', lineHeight: 1.55 }}>New Delhi, India</div>
                <div className="info-sub" style={{ fontSize: '.75rem', color: '#888', marginTop: '3px', lineHeight: 1.5 }}>Connaught Place · By appointment only</div>
              </div>
            </div>
          </div>

          <div className="availability reveal-left" style={{ border: '1px solid rgba(152,102,203,0.25)', padding: '28px 24px', marginBottom: '40px' }}>
            <div className="avail-label" style={{ fontSize: '.62rem', letterSpacing: '.18em', textTransform: 'uppercase', color: '#9866cb', marginBottom: '18px' }}>Office Hours</div>
            <div className="avail-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(245,240,232,0.06)', fontSize: '.82rem' }}>
              <span className="avail-day" style={{ color: 'rgba(245,240,232,.5)' }}>Monday – Friday</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div className="avail-dot"></div>
                <span className="avail-time" style={{ color: '#f5f0e8' }}>10:00am – 7:00pm IST</span>
              </div>
            </div>
            <div className="avail-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(245,240,232,0.06)', fontSize: '.82rem' }}>
              <span className="avail-day" style={{ color: 'rgba(245,240,232,.5)' }}>Saturday</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div className="avail-dot" style={{ background: '#f0c040', boxShadow: '0 0 8px rgba(240,192,64,.5)' }}></div>
                <span className="avail-time" style={{ color: '#f5f0e8' }}>10:00am – 2:00pm IST</span>
              </div>
            </div>
            <div className="avail-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(245,240,232,0.06)', fontSize: '.82rem' }}>
              <span className="avail-day" style={{ color: 'rgba(245,240,232,.5)' }}>Sunday</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div className="avail-dot" style={{ background: '#666', boxShadow: 'none' }}></div>
                <span className="avail-time" style={{ color: '#f5f0e8' }}>Closed</span>
              </div>
            </div>
            <div className="avail-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', fontSize: '.82rem' }}>
              <span className="avail-day" style={{ color: 'rgba(245,240,232,.5)' }}>Urgent Matters</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div className="avail-dot"></div>
                <span className="avail-time" style={{ color: '#f5f0e8' }}>Retainer clients, always</span>
              </div>
            </div>
          </div>

          <div className="social-row reveal-left" style={{ display: 'flex', gap: '14px' }}>
            <a href="#" className="social-btn">IG</a>
            <a href="#" className="social-btn">in</a>
            <a href="#" className="social-btn">𝕏</a>
            <a href="#" className="social-btn">WA</a>
          </div>
        </div>

        {/* RIGHT PANEL - FORM */}
        <div className="contact-right" style={{ padding: '80px 64px 80px 64px', background: 'rgba(255,255,255,.012)' }}>
          <div className="form-header reveal-right" style={{ marginBottom: '52px' }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 2.5vw, 2.6rem)', fontWeight: 300, lineHeight: 1.1, marginBottom: '12px' }}>
              Send us a<br />
              <em style={{ fontStyle: 'italic', color: '#9866cb' }}>message.</em>
            </h2>
            <p style={{ fontSize: '.85rem', lineHeight: 1.8, color: 'rgba(245,240,232,.45)' }}>
              Tell us what you're dealing with and we'll get back to you within one business day. For urgent matters, call or WhatsApp us directly.
            </p>
          </div>

          <div style={{ marginBottom: '10px' }}>
            <div style={{ fontSize: '.62rem', letterSpacing: '.18em', textTransform: 'uppercase', color: '#9866cb', marginBottom: '14px' }}>I'm reaching out about...</div>
            <div className="intent-selector reveal-right" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '44px' }}>
              {intentOptions.map((option) => (
                <button
                  key={option.label}
                  className={`intent-option ${selectedIntent === option.label ? 'selected' : ''}`}
                  onClick={() => selectIntent(option.label)}
                  style={{ background: 'transparent', cursor: 'pointer' }}
                >
                  <span className="intent-emoji">{option.emoji}</span>
                  <div className="intent-label">{option.label}</div>
                </button>
              ))}
            </div>
          </div>

          {!formSubmitted ? (
            <form id="contactForm" onSubmit={handleSubmit} className="reveal-right">
              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="field-group" style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '.62rem', letterSpacing: '.18em', textTransform: 'uppercase', color: '#9866cb', marginBottom: '9px' }}>First Name *</label>
                  <input type="text" placeholder="Priya" required />
                </div>
                <div className="field-group" style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '.62rem', letterSpacing: '.18em', textTransform: 'uppercase', color: '#9866cb', marginBottom: '9px' }}>Last Name *</label>
                  <input type="text" placeholder="Sharma" required />
                </div>
              </div>

              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="field-group" style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '.62rem', letterSpacing: '.18em', textTransform: 'uppercase', color: '#9866cb', marginBottom: '9px' }}>Email Address *</label>
                  <input type="email" placeholder="priya@yourbrand.com" required />
                </div>
                <div className="field-group" style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '.62rem', letterSpacing: '.18em', textTransform: 'uppercase', color: '#9866cb', marginBottom: '9px' }}>Phone Number</label>
                  <input type="tel" placeholder="+91 98xxx xxxxx" />
                </div>
              </div>

              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="field-group" style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '.62rem', letterSpacing: '.18em', textTransform: 'uppercase', color: '#9866cb', marginBottom: '9px' }}>Brand / Company Name</label>
                  <input type="text" placeholder="Your Brand Name" />
                </div>
                <div className="field-group" style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '.62rem', letterSpacing: '.18em', textTransform: 'uppercase', color: '#9866cb', marginBottom: '9px' }}>I am a...</label>
                  <div className="select-wrap">
                    <select>
                      <option value="">Select one...</option>
                      <option>Fashion Brand / Label</option>
                      <option>Influencer / Content Creator</option>
                      <option>Media / Production House</option>
                      <option>D2C / E-Commerce Brand</option>
                      <option>Celebrity / Public Figure</option>
                      <option>Manufacturer / Vendor</option>
                      <option>YouTuber / Podcaster</option>
                      <option>Talent Agency</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="field-group" style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '.62rem', letterSpacing: '.18em', textTransform: 'uppercase', color: '#9866cb', marginBottom: '9px' }}>Practice Area</label>
                <div className="select-wrap">
                  <select>
                    <option value="">Which area of law concerns you?</option>
                    <option>Brand Protection & Trademark</option>
                    <option>Fashion Startup Law</option>
                    <option>Manufacturing & Supply Chain</option>
                    <option>Retail & E-Commerce</option>
                    <option>Brand Collaborations</option>
                    <option>Fashion Litigation</option>
                    <option>Influencer Law & ASCI Compliance</option>
                    <option>Media & Entertainment Law</option>
                    <option>Creator Economy Law</option>
                    <option>Modeling & Talent Law</option>
                    <option>Not sure / Multiple areas</option>
                  </select>
                </div>
              </div>

              <div className="field-group" style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '.62rem', letterSpacing: '.18em', textTransform: 'uppercase', color: '#9866cb', marginBottom: '9px' }}>Tell Us What's Going On *</label>
                <textarea placeholder="Describe your situation briefly — the more context you give us, the more useful our response will be. Don't worry about legal terminology; just tell us what happened or what you need." required></textarea>
              </div>

              <div className="field-group" style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '.62rem', letterSpacing: '.18em', textTransform: 'uppercase', color: '#9866cb', marginBottom: '9px' }}>How Urgent Is This?</label>
                <div className="urgency-row" style={{ display: 'flex', gap: '12px', marginBottom: '28px' }}>
                  <button type="button" className={`urgency-btn ${urgency === 'No Rush' ? 'active' : ''}`} onClick={() => setUrgencyLevel('No Rush')}>🟢 No Rush</button>
                  <button type="button" className={`urgency-btn ${urgency === 'This Week' ? 'active' : ''}`} onClick={() => setUrgencyLevel('This Week')}>🟡 This Week</button>
                  <button type="button" className={`urgency-btn ${urgency === 'Urgent — 24h' ? 'active' : ''}`} onClick={() => setUrgencyLevel('Urgent — 24h')}>🔴 Urgent — 24h</button>
                </div>
              </div>

              <div className="field-group" style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '.62rem', letterSpacing: '.18em', textTransform: 'uppercase', color: '#9866cb', marginBottom: '9px' }}>How Did You Hear About Us?</label>
                <div className="select-wrap">
                  <select>
                    <option value="">Select...</option>
                    <option>Google Search</option>
                    <option>Instagram</option>
                    <option>LinkedIn</option>
                    <option>Referral from a friend / colleague</option>
                    <option>A client referred me</option>
                    <option>Industry event</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="consent-row" style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', marginBottom: '36px', padding: '20px', border: '1px solid rgba(245,240,232,0.06)', background: 'rgba(255,255,255,.02)' }}>
                <input type="checkbox" className="consent-check" required id="consent" />
                <label htmlFor="consent" className="consent-text" style={{ fontSize: '.78rem', lineHeight: 1.7, color: 'rgba(245,240,232,.4)' }}>
                  I agree that Buzz Law may use my details to respond to this enquiry. I understand this does not create a lawyer-client relationship. I have read the <a href="#" style={{ color: '#9866cb', textDecoration: 'none' }}>Privacy Policy</a> and <a href="#" style={{ color: '#9866cb', textDecoration: 'none' }}>Terms of Use</a>.
                </label>
              </div>

              <button type="submit" className="submit-btn">Send Message — We'll Respond Within 24h →</button>

              <div className="form-assurance" style={{ marginTop: '18px', fontSize: '.72rem', color: 'rgba(245,240,232,.25)', textAlign: 'center', lineHeight: 1.7, letterSpacing: '.03em' }}>
                🔒 &nbsp;Your information is private and confidential &nbsp;·&nbsp; No spam, ever &nbsp;·&nbsp; Bar Council of India Compliant
              </div>
            </form>
          ) : (
            <div className={`success-state ${formSubmitted ? 'visible' : ''}`} style={{ textAlign: 'center', padding: '80px 40px' }}>
              <div className="success-icon">✦</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', marginBottom: '12px' }}>Message <em style={{ fontStyle: 'italic', color: '#9866cb' }}>received.</em></h3>
              <p style={{ fontSize: '.88rem', color: 'rgba(245,240,232,.5)', lineHeight: 1.8, maxWidth: '360px', margin: '0 auto' }}>Thank you for reaching out. A Buzz Law specialist will review your message and get back to you within one business day.</p>
              <div className="next-steps" style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left', maxWidth: '340px', marginLeft: 'auto', marginRight: 'auto' }}>
                <div className="next-step">
                  <div className="next-step-num">01</div>
                  <div className="next-step-text">We review your message and assign the right specialist to your matter</div>
                </div>
                <div className="next-step">
                  <div className="next-step-num">02</div>
                  <div className="next-step-text">You'll receive a confirmation email with next steps within a few hours</div>
                </div>
                <div className="next-step">
                  <div className="next-step-num">03</div>
                  <div className="next-step-text">We'll schedule a free 30-minute discovery call at your convenience</div>
                </div>
              </div>
              <div style={{ marginTop: '40px', fontSize: '.78rem', color: '#888' }}>
                Need to reach us immediately?<br />
                <a href="tel:+911140000000" style={{ color: '#9866cb', textDecoration: 'none' }}>+91 11 4000 0000</a> &nbsp;or&nbsp;
                <a href="mailto:hello@buzzlaw.in" style={{ color: '#9866cb', textDecoration: 'none' }}>hello@buzzlaw.in</a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* LOCATIONS STRIP */}
      <div className="locations-strip" style={{ borderTop: '1px solid rgba(245,240,232,0.06)', padding: '70px 64px' }}>
        <div className="strip-tag">We Serve Clients Across India</div>
        <div className="loc-grid reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'rgba(245,240,232,0.06)' }}>
          <div className="loc-card">
            <div className="loc-flag" style={{ fontSize: '1.4rem', marginBottom: '12px' }}>🏛️</div>
            <div className="loc-city" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', fontWeight: 400, marginBottom: '6px' }}>New Delhi</div>
            <div className="loc-detail" style={{ fontSize: '.75rem', color: '#888', lineHeight: 1.65, whiteSpace: 'pre-line' }}>Connaught Place<br />Head Office · In-person meetings available</div>
            <div className="loc-badge">Head Office</div>
          </div>
          <div className="loc-card">
            <div className="loc-flag" style={{ fontSize: '1.4rem', marginBottom: '12px' }}>🌊</div>
            <div className="loc-city" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', fontWeight: 400, marginBottom: '6px' }}>Mumbai</div>
            <div className="loc-detail" style={{ fontSize: '.75rem', color: '#888', lineHeight: 1.65, whiteSpace: 'pre-line' }}>Bandra Kurla Complex<br />Fashion & Entertainment Hub</div>
            <div className="loc-badge">Affiliate Office</div>
          </div>
          <div className="loc-card">
            <div className="loc-flag" style={{ fontSize: '1.4rem', marginBottom: '12px' }}>🌿</div>
            <div className="loc-city" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', fontWeight: 400, marginBottom: '6px' }}>Bengaluru</div>
            <div className="loc-detail" style={{ fontSize: '.75rem', color: '#888', lineHeight: 1.65, whiteSpace: 'pre-line' }}>Koramangala<br />D2C & Creator Economy Focus</div>
            <div className="loc-badge">Affiliate Office</div>
          </div>
          <div className="loc-card">
            <div className="loc-flag" style={{ fontSize: '1.4rem', marginBottom: '12px' }}>🌐</div>
            <div className="loc-city" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', fontWeight: 400, marginBottom: '6px' }}>Pan-India & Remote</div>
            <div className="loc-detail" style={{ fontSize: '.75rem', color: '#888', lineHeight: 1.65, whiteSpace: 'pre-line' }}>We work with clients across all Indian states via video and email</div>
            <div className="loc-badge">All India</div>
          </div>
        </div>
      </div>
    </div>
  )
}