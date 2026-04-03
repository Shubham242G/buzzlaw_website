// app/how-we-work/page.tsx
'use client'

import { useState, useEffect } from 'react'

export default function HowWeWorkPage() {
  const [mounted, setMounted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    setMounted(true)
    
    // Nav scroll handler
    const handleScroll = () => {
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
      observer.disconnect()
    }
  }, [])

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const openModal = () => {
    const modal = document.getElementById('modalOverlay')
    if (modal) {
      modal.classList.add('active')
      document.body.style.overflow = 'hidden'
    }
  }

  const closeModal = () => {
    const modal = document.getElementById('modalOverlay')
    if (modal) {
      modal.classList.remove('active')
      document.body.style.overflow = ''
    }
  }

  const closeModalOutside = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === 'modalOverlay') {
      closeModal()
    }
  }

  const phases = [
    {
      num: '01',
      title: 'Discovery',
      subtitle: 'Call',
      description: 'Your first call with Buzz Law is free, obligation-free, and focused entirely on understanding you. We want to know your brand, your situation, and what\'s keeping you up at night legally — before we suggest a single thing.',
      checklist: [
        '30-minute video or phone call with a specialist lawyer',
        'We listen first — no generic legal advice before we understand your context',
        'Honest assessment of your legal risk and priorities',
        'Zero pressure, no billing, no surprises'
      ],
      timeBadge: '⏱ 30 Minutes · Completely Free',
      quote: '"I came in thinking I needed a trademark. After the discovery call, I realised I needed three things I\'d never thought of — and Buzz Law prioritised them in the right order."',
      quoteAuthor: '— Founder, D2C Fashion Label, Mumbai'
    },
    {
      num: '02',
      title: 'Legal Strategy',
      subtitle: 'Brief',
      description: 'Before any work begins, you get a written Legal Strategy Brief. This maps out exactly what needs to be done, why, in what order, and what it will cost. You stay in control from day one.',
      checklist: [
        'Written brief outlining your full legal position',
        'Priority-ranked action list with clear rationale',
        'Flat-fee quote for each deliverable — no hourly billing',
        'You approve the scope before we proceed'
      ],
      timeBadge: '⏱ Delivered in 3 Business Days',
      quote: '"A clear legal roadmap — what to protect first, what to build next, and what you can defer. Written in plain English, not legalese."',
      quoteAuthor: 'Delivered within 3 business days of your discovery call'
    },
    {
      num: '03',
      title: 'Execution &',
      subtitle: 'Delivery',
      description: 'Once you approve, we move. Contracts drafted. Trademarks filed. Agreements reviewed. Compliance structures built. Every deliverable has a committed timeline — and we meet it.',
      checklist: [
        'Dedicated lawyer assigned to your matter',
        'Regular progress updates — no chasing required',
        'All documents in plain English with a plain-English summary',
        'Revisions included until you\'re satisfied',
        'Urgent matters handled same-day or next-day'
      ],
      timeBadge: '⏱ Timelines Committed Upfront',
      quote: '"Standard contracts reviewed in 48 hours. Trademark applications filed within 5 working days. Bespoke agreements in 7–10 days. Always."',
      quoteAuthor: 'Our internal SLAs — and we hold ourselves to them'
    },
    {
      num: '04',
      title: 'Review &',
      subtitle: 'Handover',
      description: 'When work is complete, we don\'t just send a PDF and disappear. We walk you through every document, explain what it means, what it protects, and what to watch for. You leave knowing exactly what you have.',
      checklist: [
        '15-minute walkthrough call on every major deliverable',
        'Plain-English summary document for each filing or contract',
        'Secure digital folder with all your legal documents',
        '30-day follow-up window for any questions at no charge'
      ],
      timeBadge: '⏱ Walkthrough Included — Always',
      quote: '"Every deliverable comes with a 15-minute walkthrough call so you actually understand what you have and how to use it."',
      quoteAuthor: 'Your legal protection shouldn\'t be a mystery'
    },
    {
      num: '05',
      title: 'Ongoing',
      subtitle: 'Protection',
      description: 'Legal protection is not a one-time event — it\'s an ongoing commitment. As your brand grows, your legal needs evolve. We stay in your corner, proactively reviewing, monitoring, and adapting your legal strategy.',
      checklist: [
        'Monthly trademark monitoring for infringement alerts',
        'Quarterly legal health check for growing brands',
        'Priority access for new matters — no getting in the queue',
        'Annual IP audit to ensure your portfolio is complete',
        'Legal updates when regulations change in your industry'
      ],
      timeBadge: '⏱ Retainer Plans Available',
      quote: '"Most IP theft happens 12–18 months after a trademark is filed, when your brand starts gaining real traction. That\'s exactly when you need us watching."',
      quoteAuthor: '— Buzz Law Trademark Team'
    }
  ]

  // Updated promises array with custom icon paths
  const promises = [
    { 
      iconPath: '/assets/contact-page/lightning.png',
      title: 'Speed Promise', 
      desc: 'Standard contracts in 48h. Urgent matters same day. We move at your pace.' 
    },
    { 
      iconPath: '/assets/contact-page/chatbox.png',
      title: 'Clarity Promise', 
      desc: 'Every document explained in plain English. No legal fog, ever.' 
    },
    { 
      iconPath: '/assets/contact-page/graph.png',
      title: 'Price Promise', 
      desc: 'Flat fees quoted upfront. What we quote is what you pay.' 
    },
    { 
      iconPath: '/assets/contact-page/target.png',
      title: 'Focus Promise', 
      desc: 'We only work in fashion, influencer & creator law. This is all we do.' 
    }
  ]

  const retainerPlans = [
    {
      badge: 'Essentials',
      title: 'Brand Guard',
      tagline: 'For early-stage brands & independent creators',
      description: 'You\'ve built something real. Now it\'s time to protect it. Brand Guard gives you foundational IP protection and a legal safety net as you grow.',
      includes: [
        'Trademark monitoring (monthly)',
        'One contract review per month',
        'Email legal queries answered within 48h',
        'Annual IP health check',
        'Regulatory update alerts'
      ],
      featured: false
    },
    {
      badge: 'Most Popular',
      title: 'Growth Shield',
      tagline: 'For scaling brands, influencers & production houses',
      description: 'You\'re growing fast and the legal complexity is growing with you. Growth Shield keeps you protected and proactive — not reactive.',
      includes: [
        'Everything in Brand Guard',
        'Three contract reviews per month',
        'Quarterly strategy call with your lawyer',
        'Priority same-day response for urgent matters',
        'New IP filings at preferred rates',
        'ASCI & advertising compliance review'
      ],
      featured: true
    },
    {
      badge: 'Enterprise',
      title: 'Full Counsel',
      tagline: 'For established labels, media houses & talent agencies',
      description: 'Your brand is your business. Full Counsel gives you a dedicated legal team embedded in your operations — without the cost of in-house counsel.',
      includes: [
        'Dedicated senior lawyer on call',
        'Unlimited contract reviews',
        'Monthly legal team meetings',
        'Full litigation & dispute handling',
        'Anti-counterfeiting enforcement programme',
        'International IP support (via network)'
      ],
      featured: false
    }
  ]

  const faqs = [
    { q: 'How quickly can you review a brand deal contract?', a: 'Standard brand collaboration contracts are reviewed within 48 hours. If it\'s urgent — say a campaign going live in 24 hours — we offer same-day review for retainer clients and on a case-by-case basis for new clients. Always tell us your deadline upfront.' },
    { q: 'Do you work with solo creators or only brands?', a: 'We work with everyone in the creative economy — from individual influencers and YouTubers reviewing their first brand deal, to established fashion labels with complex IP portfolios. Our services are priced to be accessible at every stage.' },
    { q: 'What does "flat fee" actually mean?', a: 'It means you get a fixed price quote before we begin any work. No hourly billing, no billing surprises. You know exactly what you\'re paying for a trademark filing, a contract review, or an incorporation — before you commit.' },
    { q: 'I already have a trademark in one class. Am I protected?', a: 'Not fully. A trademark registered in one class only covers that category of goods or services. If your brand is growing across categories, you need separate registrations. Our IP audit will tell you exactly where your gaps are.' },
    { q: 'What happens if someone copies my design or brand?', a: 'If you have registered IP, we move fast — cease and desist notices, platform takedowns, and if necessary, legal proceedings. If your IP isn\'t registered, we first establish your rights and then act. Speed matters in infringement cases and we\'re built for it.' },
    { q: 'Can you help with influencer ASCI compliance?', a: 'Yes — ASCI disclosure compliance is a core part of our Influencer Law practice. We advise on disclosure language, review sponsored content frameworks, and help brands and creators build compliant campaign processes so you\'re never at risk of an ASCI action.' }
  ]

  if (!mounted) {
    return (
      <main className="bg-black min-h-screen pt-32" />
    )
  }

  return (
    <main className="mt-20 bg-black text-[#f5f0e8] overflow-x-hidden">
      {/* Hero Section */}
     
<section className="min-h-screen lg:min-h-[95vh] grid lg:grid-cols-2 items-end px-6 md:px-12 lg:px-[60px] pb-20 lg:pb-[80px] pt-32 lg:pt-0 relative overflow-hidden">
  {/* Background Elements */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_70%_at_75%_35%,rgba(152,102,203,0.07)_0%,transparent_65%),radial-gradient(ellipse_40%_50%_at_15%_75%,rgba(152,102,203,0.05)_0%,transparent_55%)]" />
    <div className="absolute inset-0 bg-[linear-gradient(rgba(152,102,203,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(152,102,203,0.035)_1px,transparent_1px)] bg-[length:72px_72px]" />
  </div>
  <div className="absolute font-['Bebas_Neue',sans-serif] text-[24vw] lg:text-[32vw] text-[rgba(152,102,203,0.04)] right-[-3vw] top-1/2 -translate-y-1/2 leading-none pointer-events-none select-none tracking-[-0.02em]">
    05
  </div>

  <div className="relative z-10 max-w-[480px]">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-px bg-[#9866cb]" />
      <span className="text-sm lg:text-[0.7rem] tracking-[0.22em] uppercase text-[#9866cb]">Our Process</span>
    </div>
    <h1 className="font-['Cormorant_Garamond',serif] text-[clamp(2.75rem,5.5vw,5rem)] lg:text-[clamp(3rem,6vw,6rem)] font-light leading-[0.92] tracking-[-0.02em] mb-8">
      Legal work<br />
      done <em className="italic text-[#9866cb] not-italic">the right</em><br />
      way.
    </h1>
    <p className="text-base lg:text-base leading-relaxed text-[rgba(245,240,232,0.58)] max-w-[420px] mb-12">
      No black boxes. No surprise bills. No lawyers who disappear after you sign. Here's exactly how we work — from your first call to long-term brand protection.
    </p>
    <div className="flex flex-wrap gap-2.5">
      <div className="border border-[rgba(152,102,203,0.25)] text-xs lg:text-[0.65rem] tracking-[0.14em] uppercase px-[18px] py-2 text-[rgba(245,240,232,0.5)] hover:border-[#9866cb] hover:text-[#9866cb] transition-all">Transparent Process</div>
      <div className="border border-[rgba(152,102,203,0.25)] text-xs lg:text-[0.65rem] tracking-[0.14em] uppercase px-[18px] py-2 text-[rgba(245,240,232,0.5)] hover:border-[#9866cb] hover:text-[#9866cb] transition-all">Fixed Timelines</div>
      <div className="border border-[rgba(152,102,203,0.25)] text-xs lg:text-[0.65rem] tracking-[0.14em] uppercase px-[18px] py-2 text-[rgba(245,240,232,0.5)] hover:border-[#9866cb] hover:text-[#9866cb] transition-all">Flat Fees</div>
      <div className="border border-[rgba(152,102,203,0.25)] text-xs lg:text-[0.65rem] tracking-[0.14em] uppercase px-[18px] py-2 text-[rgba(245,240,232,0.5)] hover:border-[#9866cb] hover:text-[#9866cb] transition-all">Creative Industry Focus</div>
    </div>
  </div>

  <div className="relative z-10 hidden lg:flex flex-col items-end justify-end gap-0 pb-2 max-w-[220px]">
    <div className="text-right py-7 border-t border-[rgba(152,102,203,0.25)] w-full">
      <div className="font-['Cormorant_Garamond',serif] text-4xl lg:text-5xl font-light text-[#9866cb] leading-none mb-1.5">48h</div>
      <div className="text-xs lg:text-[0.65rem] tracking-[0.14em] uppercase text-[#888]">Standard Contract Review</div>
    </div>
    <div className="text-right py-7 border-t border-[rgba(152,102,203,0.25)] w-full">
      <div className="font-['Cormorant_Garamond',serif] text-4xl lg:text-5xl font-light text-[#9866cb] leading-none mb-1.5">30m</div>
      <div className="text-xs lg:text-[0.65rem] tracking-[0.14em] uppercase text-[#888]">Free Discovery Call</div>
    </div>
    <div className="text-right py-7 border-t border-[rgba(152,102,203,0.25)] w-full">
      <div className="font-['Cormorant_Garamond',serif] text-4xl lg:text-5xl font-light text-[#9866cb] leading-none mb-1.5">100%</div>
      <div className="text-xs lg:text-[0.65rem] tracking-[0.14em] uppercase text-[#888]">Fee Transparency</div>
    </div>
    <div className="text-right py-7 border-t border-[rgba(152,102,203,0.25)] w-full">
      <div className="font-['Cormorant_Garamond',serif] text-4xl lg:text-5xl font-light text-[#9866cb] leading-none mb-1.5">500+</div>
      <div className="text-xs lg:text-[0.65rem] tracking-[0.14em] uppercase text-[#888]">Brands Protected</div>
    </div>
  </div>

  <div className="absolute left-8 lg:left-[60px] bottom-[90px] flex items-center gap-3.5 text-xs lg:text-[0.65rem] tracking-[0.18em] uppercase text-[#888]">
    <div className="w-[60px] h-px bg-[#888] relative overflow-hidden">
      <div className="absolute top-0 left-[-100%] w-full h-full bg-[#9866cb] animate-[scanLine_2.2s_ease-in-out_infinite]" />
    </div>
    See the Process
  </div>
</section>

      {/* Timeline Section */}
      <section className="px-6 md:px-8 lg:px-[60px] py-24 lg:py-[140px] relative">
        <div className="mb-[100px] flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[30px] h-px bg-[#9866cb]" />
              <span className="text-[0.68rem] tracking-[0.22em] uppercase text-[#9866cb]">Phase by Phase</span>
            </div>
            <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2.2rem,4.5vw,4rem)] font-light leading-[1.05]">
              Five phases.<br /><em className="italic text-[#9866cb] not-italic">One seamless journey.</em>
            </h2>
          </div>
          <div className="max-w-[300px] text-[0.85rem] leading-relaxed text-[rgba(245,240,232,0.45)] text-left lg:text-right">
            Every client — from a first-time founder to an established label — goes through the same deliberate, five-phase process. This is how we ensure nothing gets missed.
          </div>
        </div>

        <div className="relative lg:before:absolute lg:before:left-1/2 lg:before:top-0 lg:before:bottom-0 lg:before:w-px lg:before:bg-[rgba(152,102,203,0.25)] lg:before:transform lg:before:-translate-x-1/2">
          {phases.map((phase, idx) => (
            <div key={idx} className="grid lg:grid-cols-[1fr_80px_1fr] gap-0 relative mb-0">
              {/* Content - left side for odd, right side for even */}
              <div className={`lg:col-start-${idx % 2 === 0 ? '1' : '3'} lg:row-start-1 lg:py-[60px] lg:px-0 py-10 px-0 ${idx % 2 === 0 ? 'lg:pr-16 lg:text-left text-left' : 'lg:pl-16 lg:text-left text-left'} border-b border-[rgba(245,240,232,0.07)]`}>
                <div className={idx % 2 === 0 ? '' : 'lg:order-2'}>
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <div className="w-6 h-px bg-[#9866cb]" />
                    <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#9866cb]">Phase {phase.num}</span>
                  </div>
                  <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(1.8rem,3vw,2.8rem)] font-light leading-[1.1] mb-4">
                    {phase.title}<br /><em className="italic text-[#9866cb] not-italic">{phase.subtitle}</em>
                  </h2>
                  <p className="text-[0.9rem] leading-relaxed text-[rgba(245,240,232,0.58)] mb-7 max-w-[380px]">
                    {phase.description}
                  </p>
                  <ul className="list-none space-y-2.5 mb-7">
                    {phase.checklist.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[0.82rem] text-[rgba(245,240,232,0.65)] leading-relaxed">
                        <span className="text-[#9866cb] text-[0.6rem] mt-1 flex-shrink-0">✦</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center gap-2 border border-[rgba(152,102,203,0.25)] px-4 py-2 text-[0.68rem] tracking-[0.14em] uppercase text-[#9866cb]">
                    {phase.timeBadge}
                  </div>
                </div>
              </div>

              {/* Spine */}
              <div className="hidden lg:flex lg:col-start-2 lg:row-start-1 flex-col items-center justify-start pt-16 relative">
                <div className="w-14 h-14 border border-[#9866cb] flex items-center justify-center bg-black relative z-10 font-['Bebas_Neue',sans-serif] text-[1.3rem] text-[#9866cb] transition-all duration-400 hover:bg-[#9866cb] hover:text-black hover:shadow-[0_0_40px_rgba(152,102,203,0.3)]">
                  {phase.num}
                </div>
              </div>

              {/* Detail Card - right side for odd, left side for even */}
              <div className={`hidden lg:block lg:col-start-${idx % 2 === 0 ? '3' : '1'} lg:row-start-1 lg:py-[60px] ${idx % 2 === 0 ? 'lg:pl-16' : 'lg:pr-16 lg:text-right'} border-b border-[rgba(245,240,232,0.07)]`}>
                <div className={`border border-[rgba(152,102,203,0.25)] p-8 relative overflow-hidden transition-all duration-400 hover:border-[rgba(152,102,203,0.5)] group ${idx % 2 !== 0 ? 'text-right' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-[rgba(152,102,203,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="text-[0.62rem] tracking-[0.18em] uppercase text-[#9866cb] mb-4">{idx % 2 === 0 ? 'What our clients say' : 'What\'s included'}</div>
                  <div className="font-['Cormorant_Garamond',serif] text-lg italic leading-relaxed text-[#f5f0e8] mb-5">
                    "{phase.quote}"
                  </div>
                  <div className="text-[0.72rem] text-[#888] leading-relaxed">{phase.quoteAuthor}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promise Strip - Purple theme with custom images */}
      <div className="bg-[#9866cb] overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {promises.map((promise, idx) => (
            <div key={idx} className="flex-1 p-12 lg:p-[52px_36px] text-center border-r border-[rgba(10,10,10,0.15)] last:border-r-0 hover:bg-[rgba(10,10,10,0.06)] transition-colors group">
              {/* Custom image icon instead of emoji */}
              <div className="w-12 h-12 mx-auto mb-3.5">
                <img 
                  src={promise.iconPath}
                  alt={promise.title}
                  className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <div className="font-['Bebas_Neue',sans-serif] text-[1.3rem] tracking-[0.1em] text-black mb-2">{promise.title}</div>
              <div className="text-[0.78rem] text-[rgba(10,10,10,0.6)] leading-relaxed">{promise.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Retainer Section */}
      <section className="px-6 md:px-8 lg:px-[60px] py-24 lg:py-[140px] bg-[rgba(255,255,255,0.015)]">
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-[30px] h-px bg-[#9866cb]" />
            <span className="text-[0.68rem] tracking-[0.22em] uppercase text-[#9866cb]">Ongoing Protection</span>
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2rem,4.5vw,3.8rem)] font-light leading-[1.1] mt-3">
            Three ways to work<br /><em className="italic text-[#9866cb] not-italic">with us long-term.</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-px bg-[rgba(152,102,203,0.25)]">
          {retainerPlans.map((plan, idx) => (
            <div key={idx} className={`bg-black p-10 lg:p-[48px_36px] relative overflow-hidden transition-all duration-350 hover:-translate-y-1.5 ${plan.featured ? 'bg-[rgba(152,102,203,0.06)]' : ''}`}>
              <div className={`text-[0.6rem] tracking-[0.18em] uppercase inline-block px-3.5 py-1.5 mb-7 ${plan.featured ? 'bg-[#9866cb] text-black border-[#9866cb]' : 'border border-[rgba(152,102,203,0.25)] text-[#9866cb]'}`}>
                {plan.badge}
              </div>
              <h3 className="font-['Cormorant_Garamond',serif] text-[1.8rem] font-normal mb-2 text-[#f5f0e8]">{plan.title}</h3>
              <div className="text-[0.8rem] text-[#9866cb] italic mb-6">{plan.tagline}</div>
              <p className="text-[0.82rem] leading-relaxed text-[rgba(245,240,232,0.5)] mb-7">{plan.description}</p>
              <ul className="list-none space-y-2 mb-8">
                {plan.includes.map((item, i) => (
                  <li key={i} className="text-[0.78rem] text-[rgba(245,240,232,0.6)] flex gap-2.5 items-start">
                    <span className="text-[#9866cb] flex-shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button onClick={openModal} className={`border text-[0.72rem] tracking-[0.14em] uppercase px-7 py-3 transition-all duration-300 ${plan.featured ? 'bg-[#9866cb] text-black border-[#9866cb] hover:bg-[#b87eff]' : 'border-[rgba(152,102,203,0.25)] text-[#f5f0e8] hover:border-[#9866cb] hover:text-[#9866cb]'}`}>
                {idx === 0 ? 'Get Started →' : idx === 1 ? 'Get Started →' : 'Talk to Us →'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 md:px-8 lg:px-[60px] py-24 lg:py-[120px]">
        <div className="mb-[70px]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-[30px] h-px bg-[#9866cb]" />
            <span className="text-[0.68rem] tracking-[0.22em] uppercase text-[#9866cb]">Common Questions</span>
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1] mt-3">
            Things people ask us<br /><em className="italic text-[#9866cb] not-italic">before they start.</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-0 lg:gap-x-20">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-[rgba(245,240,232,0.07)] py-7 cursor-pointer" onClick={() => toggleFaq(idx)}>
              <div className="flex justify-between items-start gap-5">
                <span className="font-['Cormorant_Garamond',serif] text-[1.05rem] font-normal text-[#f5f0e8] leading-relaxed">{faq.q}</span>
                <span className={`text-[#9866cb] text-lg flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-45' : ''}`}>+</span>
              </div>
              <div className={`text-[0.82rem] leading-relaxed text-[rgba(245,240,232,0.5)] overflow-hidden transition-all duration-400 ${openFaq === idx ? 'max-h-[200px] pt-3.5' : 'max-h-0'}`}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center px-6 md:px-8 lg:px-[60px] py-28 lg:py-[160px] relative overflow-hidden">
        <div className="absolute font-['Bebas_Neue',sans-serif] text-[30vw] text-[rgba(152,102,203,0.04)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none tracking-[0.05em]">
          START
        </div>
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-[30px] h-px bg-[#9866cb]" />
            <span className="text-[0.68rem] tracking-[0.22em] uppercase text-[#9866cb]">Ready to Start</span>
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1.05] mb-6">
            Your first step costs<br />you <em className="italic text-[#9866cb] not-italic">nothing.</em>
          </h2>
          <p className="text-[0.95rem] leading-relaxed text-[rgba(245,240,232,0.5)] max-w-[440px] mx-auto mb-14">
            Book a free 30-minute discovery call. We'll tell you exactly where you stand and what you should do first — with no obligation to proceed.
          </p>
          <div>
            <button onClick={openModal} className="bg-[#9866cb] text-black px-11 py-4 text-[0.76rem] tracking-[0.16em] uppercase font-medium border-none transition-all hover:bg-[#b87eff] hover:-translate-y-1 cursor-pointer">
              Book Free Discovery Call →
            </button>
            <a href="mailto:hello@buzzlaw.in" className="text-[rgba(245,240,232,0.45)] text-[0.76rem] tracking-[0.14em] uppercase no-underline ml-7 hover:text-[#f5f0e8] transition-colors">
              hello@buzzlaw.in
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      <div id="modalOverlay" className="fixed inset-0 z-[1000] bg-[rgba(10,10,10,0.92)] flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-400" onClick={closeModalOutside}>
        <div className="bg-black border border-[rgba(152,102,203,0.25)] p-10 lg:p-14 max-w-[520px] w-[90%] relative transform translate-y-7 transition-transform duration-400">
          <button onClick={closeModal} className="absolute top-5 right-5 bg-none border-none text-[#888] text-[1.3rem] cursor-pointer">✕</button>
          <div className="flex items-center gap-3 mb-2.5">
            <div className="w-[30px] h-px bg-[#9866cb]" />
            <span className="text-[0.68rem] tracking-[0.22em] uppercase text-[#9866cb]">Free Consultation</span>
          </div>
          <h3 className="font-['Cormorant_Garamond',serif] text-3xl mb-1.5">Let's talk about<br /><em className="italic text-[#9866cb] not-italic">your brand.</em></h3>
          <p className="text-[0.83rem] text-[#888] mb-8 leading-relaxed">30 minutes. No obligation. We'll tell you exactly where you stand and what to do first.</p>
          <div className="mb-4">
            <label className="block text-[0.65rem] tracking-[0.16em] uppercase text-[#9866cb] mb-1.5">Your Name</label>
            <input type="text" placeholder="Priya Sharma" className="w-full bg-transparent border border-[rgba(152,102,203,0.25)] text-[#f5f0e8] font-['DM_Sans',sans-serif] text-[0.88rem] p-3 outline-none focus:border-[#9866cb] transition-colors" />
          </div>
          <div className="mb-4">
            <label className="block text-[0.65rem] tracking-[0.16em] uppercase text-[#9866cb] mb-1.5">Email</label>
            <input type="email" placeholder="priya@yourbrand.com" className="w-full bg-transparent border border-[rgba(152,102,203,0.25)] text-[#f5f0e8] font-['DM_Sans',sans-serif] text-[0.88rem] p-3 outline-none focus:border-[#9866cb] transition-colors" />
          </div>
          <div className="mb-4">
            <label className="block text-[0.65rem] tracking-[0.16em] uppercase text-[#9866cb] mb-1.5">I am a...</label>
            <select className="w-full bg-transparent border border-[rgba(152,102,203,0.25)] text-[#f5f0e8] font-['DM_Sans',sans-serif] text-[0.88rem] p-3 outline-none focus:border-[#9866cb] transition-colors">
              <option className="bg-[#1a1a1a]">Fashion Brand / Label</option>
              <option className="bg-[#1a1a1a]">Influencer / Content Creator</option>
              <option className="bg-[#1a1a1a]">Media / Production House</option>
              <option className="bg-[#1a1a1a]">D2C / E-Commerce Brand</option>
              <option className="bg-[#1a1a1a]">Celebrity / Talent</option>
              <option className="bg-[#1a1a1a]">Other</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-[0.65rem] tracking-[0.16em] uppercase text-[#9866cb] mb-1.5">What do you need help with?</label>
            <textarea placeholder="Tell us briefly..." className="w-full bg-transparent border border-[rgba(152,102,203,0.25)] text-[#f5f0e8] font-['DM_Sans',sans-serif] text-[0.88rem] p-3 outline-none focus:border-[#9866cb] transition-colors h-[90px] resize-vertical"></textarea>
          </div>
          <button onClick={() => { alert("Thank you! We'll confirm your consultation within 24 hours."); closeModal(); }} className="w-full bg-[#9866cb] text-black py-4 text-[0.76rem] tracking-[0.16em] uppercase font-medium border-none transition-all hover:bg-[#b87eff] cursor-pointer">
            Book My Free Call →
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scanLine {
          0%, 100% { left: -100%; }
          50% { left: 100%; }
        }
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-left {
          opacity: 0;
          transform: translateX(-30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .reveal-left.visible {
          opacity: 1;
          transform: translateX(0);
        }
        .reveal-right {
          opacity: 0;
          transform: translateX(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .reveal-right.visible {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
    </main>
  )
}