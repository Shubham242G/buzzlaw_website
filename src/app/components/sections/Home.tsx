'use client'

import { useState, useEffect } from 'react'
import { Navbar } from '../layout/Navbar'
import { Footer } from '../layout/Footer'
import { CustomCursor } from '../layout/CustomCursor'
import { Modal } from '../ui/Modal'
import { Ticker } from '../ui/Ticker'
import { FadeInSection } from '../ui/FadeInSection'

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const stats = [
    { num: '500+', label: 'Brands Protected' },
    { num: '12+', label: 'Years of Practice' },
    { num: '98%', label: 'Client Retention' },
  ]

  const pillars = [
    { num: '01', label: 'Industry-First Thinking' },
    { num: '02', label: 'Preventive Legal Strategy' },
    { num: '03', label: 'Speed-to-Resolution' },
    { num: '04', label: 'Transparent Pricing' },
  ]

  const reasons = [
    "India's only firm specialising exclusively in fashion, influencer & creator law",
    'Flat-fee structures so you know your legal costs upfront',
    'Turnaround times designed for the speed of digital business',
    'Plain-English legal documents your team will actually understand',
  ]

  const practices = [
    {
      num: '01',
      icon: '🛡️',
      title: 'Brand Protection',
      tagline: 'Own your identity. Defend it fiercely.',
      description:
        'Your brand is your most valuable asset. We make sure no one can copy it, steal it, or profit from it without your permission.',
      services: ['Trademark Registration', 'Design Registration', 'Copyright Protection', 'Trade Dress Protection', 'Anti-Counterfeiting'],
    },
    {
      num: '02',
      icon: '✂️',
      title: 'Fashion Startup Law',
      tagline: 'Built right from day one.',
      description:
        'Launching a fashion brand involves far more legal complexity than most founders realise. We help you structure smartly, protect founder rights, and position your label for investment.',
      services: ['Label Incorporation', 'Founder Agreements', 'Investment & Funding', 'Brand Structuring'],
    },
    {
      num: '03',
      icon: '🏭',
      title: 'Manufacturing & Supply Chain',
      tagline: 'Contracts that protect your production.',
      description:
        'Bad vendor contracts can destroy a season. We draft and review manufacturing agreements, vendor terms, and compliance frameworks.',
      services: ['Manufacturer Agreements', 'Vendor Contracts', 'Import/Export Compliance', 'Sustainability Compliance'],
    },
    {
      num: '04',
      icon: '🛍️',
      title: 'Retail & E-Commerce Law',
      tagline: 'Sell everywhere. Comply everywhere.',
      description:
        "Whether you're on Myntra, launching your own D2C store, or signing a marketplace agreement — we handle the compliance.",
      services: ['Marketplace Agreements', 'Terms & Privacy Policies', 'Consumer Law Compliance', 'Online Marketplace Disputes'],
    },
    {
      num: '05',
      icon: '🤝',
      title: 'Brand Collaborations',
      tagline: 'Collab confidently. Protect your share.',
      description:
        'Designer drops, celebrity lines, licensing deals — collaborations create immense value but carry serious legal risk if structured badly.',
      services: ['Designer Collaborations', 'Celebrity Collaborations', 'Licensing Agreements', 'Merchandising Agreements'],
    },
    {
      num: '06',
      icon: '⚖️',
      title: 'Fashion Litigation',
      tagline: "When it's time to fight — we fight.",
      description:
        'Design piracy, counterfeit goods, contract breaches — when someone crosses a line, you need lawyers who move fast and hit hard.',
      services: ['Trademark Infringement', 'Design Piracy', 'Counterfeit Actions', 'Contract Disputes'],
    },
    {
      num: '07',
      icon: '📱',
      title: 'Influencer Law',
      tagline: 'Your content. Your terms. Your protection.',
      description:
        'Brand deals, ambassador contracts, ASCI compliance, copyright disputes — influencer law is a minefield.',
      services: ['Brand Collaboration Contracts', 'Ambassador Agreements', 'ASCI Compliance', 'Revenue Sharing', 'Content IP Rights', 'Influencer Disputes'],
    },
    {
      num: '08',
      icon: '🎬',
      title: 'Media & Entertainment Law',
      tagline: 'From set to screen. Legally protected.',
      description:
        'Production agreements, OTT compliance, defamation cases, celebrity image rights — we advise content creators and production houses.',
      services: ['Production Agreements', 'OTT Compliance', 'Defamation & Reputation', 'Celebrity Rights', 'Content Takedowns'],
    },
    {
      num: '09',
      icon: '🎙️',
      title: 'Creator Economy Law',
      tagline: 'New economy. Real legal needs.',
      description:
        'YouTubers, podcasters, affiliate marketers, and digital creators face unique legal challenges.',
      services: ['Creator Contracts', 'Podcast Agreements', 'Affiliate Agreements', 'Monetization Structures', 'Platform Agreements'],
    },
  ]

  const processSteps = [
    {
      num: '01',
      title: 'Free Discovery Call',
      desc: 'Tell us about your brand, your situation, and what you need. No jargon, no billing — just a real conversation about your legal position.',
    },
    {
      num: '02',
      title: 'Legal Strategy Brief',
      desc: 'We map out exactly what needs to be done, in what order, and at what cost. You get a clear plan before we touch anything.',
    },
    {
      num: '03',
      title: 'Execution & Delivery',
      desc: 'We execute fast and keep you informed at every step. No unnecessary delays, no unexplained legal bills.',
    },
    {
      num: '04',
      title: 'Ongoing Protection',
      desc: "Legal protection isn't one-time. We stay on as your brand grows — reviewing new deals, monitoring for infringement, and adapting your legal strategy.",
    },
  ]

  const differentiators = [
    {
      icon: '⚡',
      title: 'Speed that matches your business',
      desc: "Campaigns don't wait. Neither do we. Standard contracts reviewed in 48 hours. Urgent matters same day.",
    },
    {
      icon: '🎯',
      title: 'Specialists, not generalists',
      desc: 'We only work in fashion, influencer, media, and creator law. This isnt a side practice — it\'s all we do.',
    },
    {
      icon: '💬',
      title: 'Plain language, always',
      desc: 'We write contracts your team can read. We explain your rights in plain English. No unnecessary legalese.',
    },
    {
      icon: '📊',
      title: 'Flat fees, no surprises',
      desc: "You'll know exactly what you're paying before we begin. No hourly billing shocks, no hidden costs.",
    },
    {
      icon: '🏆',
      title: 'Track record in your world',
      desc: "We've protected 500+ brands, registered 1000+ trademarks, and settled disputes for India's leading creators.",
    },
  ]

  const industries = [
    { emoji: '👗', name: 'Fashion Labels' },
    { emoji: '📸', name: 'Influencers' },
    { emoji: '🎬', name: 'Media Houses' },
    { emoji: '🎙️', name: 'Content Creators' },
    { emoji: '🌟', name: 'Celebrities' },
    { emoji: '🛍️', name: 'D2C Brands' },
    { emoji: '🏭', name: 'Manufacturers' },
    { emoji: '🎵', name: 'Musicians & Artists' },
    { emoji: '💄', name: 'Beauty Brands' },
    { emoji: '📺', name: 'OTT Platforms' },
  ]

  // Don't render custom cursor until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <>
        <Navbar openModal={openModal} />
        <main className="pt-32">
          <div className="min-h-screen" />
        </main>
        <Footer openModal={openModal} />
      </>
    )
  }

  return (
    <>
      
      <main className="pt-22">
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-8rem)] flex flex-col justify-center px-6 md:px-[60px] py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0a0a]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(152,102,203,0.08)_0%,transparent_60%),radial-gradient(ellipse_50%_80%_at_20%_80%,rgba(152,102,203,0.06)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(152,102,203,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(152,102,203,0.04)_1px,transparent_1px)] bg-[length:80px_80px]" />
          </div>

          <div className="hidden lg:block absolute right-[100px] top-1/2 -translate-y-1/2 space-y-10 z-10">
            {stats.map((stat, idx) => (
              <FadeInSection key={idx} delay={idx * 0.2}>
                <div className="text-right">
                  <div className="font-['Cormorant_Garamond'] text-[2.8rem] font-light text-[#9866cb] leading-none">{stat.num}</div>
                  <div className="text-[0.65rem] tracking-[0.15em] uppercase text-[#888] mt-1">{stat.label}</div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <div className="relative z-10 max-w-6xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-px bg-[#9866cb]" />
              {/* <span className="text-[0.72rem] tracking-[0.2em] uppercase text-[#9866cb]">
                India's First Fashion & Creator Economy Law Firm
              </span> */}
            </div>
            <h1 className="font-['Cormorant_Garamond'] text-[clamp(2.5rem,7vw,6rem)] font-light leading-[1.1] tracking-[-0.02em] mb-6">
              Law Built
              <br />
              for the
              <br />
              <em className="italic text-[#9866cb]">Creative</em>
              <br />
              Economy.
            </h1>
            <p className="text-base font-light text-[rgba(245,240,232,0.6)] max-w-[480px] leading-relaxed mb-8">
              From trademark filings to influencer contracts, from startup structuring to anti-counterfeiting — Buzz Law
              protects what you've built.
            </p>
            <div className="flex gap-5 items-center">
              <button
                onClick={openModal}
                className="bg-[#9866cb] text-[#0a0a0a] px-8 py-3 text-xs tracking-[0.15em] uppercase font-medium border-none transition-all hover:bg-[#b87eff] hover:-translate-y-0.5 cursor-pointer"
              >
                Get Legal Protection →
              </button>
              <a
                href="#practices"
                className="text-[#f5f0e8] text-xs tracking-[0.15em] uppercase no-underline opacity-60 flex items-center gap-2 hover:opacity-100 transition-opacity"
              >
                Explore Services ↓
              </a>
            </div>
          </div>

          <div className="hidden lg:block absolute right-[60px] bottom-20 writing-mode-vertical-rl text-[0.65rem] tracking-[0.2em] uppercase text-[#888] flex items-center gap-4 z-10">
            <span>Scroll</span>
            <div className="w-px h-[60px] bg-[#888] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:bg-[#888] after:animate-[scrollLine_2s_ease-in-out_infinite]" />
          </div>
        </section>

        {/* Ticker */}
        <Ticker />

        {/* About Section */}
        <section id="about" className="px-6 md:px-[60px] py-20 md:py-[120px]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 md:gap-[100px] items-center">
              <FadeInSection>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-[30px] h-px bg-[#9866cb]" />
                  <span className="text-[0.68rem] tracking-[0.22em] uppercase text-[#9866cb]">Who We Are</span>
                </div>
                <h2 className="font-['Cormorant_Garamond'] text-[clamp(2rem,5vw,4rem)] font-light leading-[1.05] mb-7">
                  Legal counsel that <em className="italic text-[#9866cb]">speaks</em> your industry.
                </h2>
                <p className="text-base leading-relaxed text-[rgba(245,240,232,0.7)] mb-5">
                  Buzz Law was built for a simple reason:{' '}
                  <strong className="text-[#f5f0e8] font-medium">
                    creative businesses deserve lawyers who understand them.
                  </strong>{' '}
                  Most law firms treat fashion brands, influencers, and creators as an afterthought. We built our entire
                  practice around them.
                </p>
                <p className="text-base leading-relaxed text-[rgba(245,240,232,0.7)] mb-5">
                  We combine deep legal expertise with an insider understanding of how the fashion, influencer, media, and
                  creator economy actually works — the contracts that get signed at 11pm, the campaigns that go live in 48
                  hours, the IP disputes that can kill a brand overnight.
                </p>
                <p className="text-base leading-relaxed text-[rgba(245,240,232,0.7)] mb-5">
                  Whether you're a D2C label protecting your first trademark, an influencer reviewing a brand deal, or a media
                  house navigating OTT compliance —{' '}
                  <strong className="text-[#f5f0e8] font-medium">we're the legal team in your corner.</strong>
                </p>
                <div className="grid grid-cols-2 gap-px border border-[rgba(152,102,203,0.25)] mt-10">
                  {pillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      className="p-6 border border-[rgba(152,102,203,0.25)] hover:bg-[rgba(152,102,203,0.05)] transition-colors"
                    >
                      <div className="font-['Bebas_Neue'] text-3xl text-[#9866cb] opacity-40 mb-2">{pillar.num}</div>
                      <div className="text-xs font-medium tracking-[0.05em]">{pillar.label}</div>
                    </div>
                  ))}
                </div>
              </FadeInSection>

              <FadeInSection delay={0.2}>
                <div className="border border-[rgba(152,102,203,0.25)] p-8 md:p-12 relative">
                  <div className="font-['Cormorant_Garamond'] text-[10rem] text-[#9866cb] opacity-12 absolute -top-5 left-8 leading-none">
                    "
                  </div>
                  <p className="font-['Cormorant_Garamond'] text-xl md:text-2xl italic leading-relaxed text-[#f5f0e8] mb-5">
                    "Your brand is worth more than your product. Protect it like it is."
                  </p>
                  <div className="text-[0.72rem] tracking-[0.15em] uppercase text-[#9866cb]">— Buzz Law Philosophy</div>
                </div>
                <div className="border border-[rgba(152,102,203,0.25)] p-8 mt-6">
                  <div className="text-[0.68rem] tracking-[0.18em] uppercase text-[#9866cb] mb-5">Why clients choose us</div>
                  <div className="space-y-3.5">
                    {reasons.map((reason, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <span className="text-[#9866cb]">✦</span>
                        <span className="text-sm text-[rgba(245,240,232,0.65)] leading-relaxed">{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Practice Areas Section */}
        <section id="practices" className="bg-[rgba(255,255,255,0.02)] px-6 md:px-[60px] py-20 md:py-[120px]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-[30px] h-px bg-[#9866cb]" />
                  <span className="text-[0.68rem] tracking-[0.22em] uppercase text-[#9866cb]">What We Do</span>
                </div>
                <h2 className="font-['Cormorant_Garamond'] text-[clamp(2rem,5vw,4rem)] font-light leading-[1.05]">
                  Nine practice areas.
                  <br />
                  <em className="italic text-[#9866cb]">One focused firm.</em>
                </h2>
              </div>
              <p className="max-w-[280px] text-sm leading-relaxed text-[rgba(245,240,232,0.45)] text-right mt-4 md:mt-0">
                Every practice area has been built ground-up for the creative economy — not retrofitted from corporate law.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(152,102,203,0.25)]">
              {practices.map((practice, idx) => (
                <FadeInSection key={idx} delay={idx * 0.05}>
                  <div className="bg-[#0a0a0a] p-8 md:p-11 relative overflow-hidden transition-all duration-400 hover:-translate-y-1 group">
                    <div className="absolute top-9 right-9 font-['Bebas_Neue'] text-6xl text-[#9866cb] opacity-7 leading-none">
                      {practice.num}
                    </div>
                    <div className="text-[1.8rem] mb-5">{practice.icon}</div>
                    <h3 className="font-['Cormorant_Garamond'] text-xl md:text-2xl font-normal mb-3 text-[#f5f0e8]">
                      {practice.title}
                    </h3>
                    <div className="text-sm text-[#9866cb] italic mb-5">{practice.tagline}</div>
                    <p className="text-sm leading-relaxed text-[rgba(245,240,232,0.55)] mb-6">{practice.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {practice.services.slice(0, 4).map((service, i) => (
                        <span
                          key={i}
                          className="text-[0.65rem] tracking-[0.1em] uppercase border border-[rgba(152,102,203,0.25)] px-3 py-1.5 text-[rgba(245,240,232,0.5)] group-hover:border-[rgba(152,102,203,0.4)] group-hover:text-[#b87eff] transition-all"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="px-6 md:px-[60px] py-20 md:py-[120px]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 md:mb-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-[30px] h-px bg-[#9866cb]" />
                <span className="text-[0.68rem] tracking-[0.22em] uppercase text-[#9866cb]">How We Work</span>
              </div>
              <h2 className="font-['Cormorant_Garamond'] text-[clamp(2rem,5vw,4rem)] font-light leading-[1.05]">
                Simple process.
                <br />
                <em className="italic text-[#9866cb]">Serious results.</em>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-px bg-[rgba(152,102,203,0.25)]" />
              {processSteps.map((step, idx) => (
                <FadeInSection key={idx} delay={idx * 0.1}>
                  <div className="px-0 md:px-5">
                    <div className="w-14 h-14 border border-[rgba(152,102,203,0.25)] flex items-center justify-center mb-7 font-['Bebas_Neue'] text-[1.4rem] text-[#9866cb] bg-[#0a0a0a] relative z-10 transition-all hover:bg-[#9866cb] hover:text-[#0a0a0a] hover:border-[#9866cb]">
                      {step.num}
                    </div>
                    <h4 className="font-['Cormorant_Garamond'] text-xl mb-3">{step.title}</h4>
                    <p className="text-sm leading-relaxed text-[rgba(245,240,232,0.5)]">{step.desc}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Why Buzz Law Section */}
        <section id="why" className="bg-[#f5f0e8] text-[#0a0a0a] px-6 md:px-[60px] py-20 md:py-[120px]">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[30px] h-px bg-[#9866cb]" />
              <span className="text-[0.68rem] tracking-[0.22em] uppercase text-[#9866cb]">Why Buzz Law</span>
            </div>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(2rem,5vw,4rem)] font-light leading-[1.05] text-[#0a0a0a]">
              We're not a general firm
              <br />
              that handles <em className="italic text-[#9866cb]">some</em> IP.
            </h2>

            <div className="grid md:grid-cols-2 gap-12 md:gap-[60px] mt-12 md:mt-[60px]">
              <FadeInSection>
                <p className="text-base md:text-[1.05rem] leading-relaxed text-[rgba(10,10,10,0.65)] mb-5">
                  Most law firms were built for corporations, real estate, and litigation. Creative businesses — fashion labels,
                  influencers, media companies, creators — are forced to work with lawyers who treat their industry as exotic.
                </p>
                <p className="text-base md:text-[1.05rem] leading-relaxed text-[rgba(10,10,10,0.65)] mb-5">
                  We built Buzz Law from the ground up for the creative economy. Every lawyer on our team has worked directly
                  with fashion brands, digital creators, or entertainment companies. We don't learn your industry on your bill.
                </p>
                <p className="text-base md:text-[1.05rem] leading-relaxed text-[rgba(10,10,10,0.65)] mb-5">
                  The result: faster turnarounds, sharper contracts, and legal strategy that actually fits how creative
                  businesses grow and operate in India today.
                </p>
                <button
                  onClick={openModal}
                  className="bg-[#9866cb] text-[#0a0a0a] px-8 py-3 text-xs tracking-[0.15em] uppercase font-medium border-none transition-all hover:bg-[#b87eff] hover:-translate-y-0.5 mt-4 inline-block cursor-pointer"
                >
                  Talk to a Lawyer →
                </button>
              </FadeInSection>

              <FadeInSection delay={0.2}>
                {differentiators.map((diff, idx) => (
                  <div key={idx} className="border-b border-[rgba(10,10,10,0.1)] py-6 flex gap-5 items-start">
                    <div className="text-[1.4rem] flex-shrink-0 mt-0.5">{diff.icon}</div>
                    <div>
                      <div className="font-medium text-sm mb-1.5 text-[#0a0a0a]">{diff.title}</div>
                      <div className="text-sm leading-relaxed text-[rgba(10,10,10,0.55)]">{diff.desc}</div>
                    </div>
                  </div>
                ))}
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section id="industries" className="px-6 md:px-[60px] py-20 md:py-[120px]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 md:mb-[70px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-[30px] h-px bg-[#9866cb]" />
                <span className="text-[0.68rem] tracking-[0.22em] uppercase text-[#9866cb]">Who We Serve</span>
              </div>
              <h2 className="font-['Cormorant_Garamond'] text-[clamp(2rem,5vw,4rem)] font-light leading-[1.05]">
                Built for every
                <br />
                corner of the <em className="italic text-[#9866cb]">creative world.</em>
              </h2>
            </div>

            <FadeInSection>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-[rgba(152,102,203,0.25)] mb-px">
                {industries.slice(0, 5).map((industry, idx) => (
                  <div
                    key={idx}
                    className="bg-[#0a0a0a] p-6 md:p-8 text-center transition-all border-b-2 border-transparent hover:bg-[rgba(152,102,203,0.05)] hover:border-b-[#9866cb]"
                  >
                    <div className="text-[1.8rem] mb-3">{industry.emoji}</div>
                    <div className="text-[0.78rem] tracking-[0.08em] uppercase text-[rgba(245,240,232,0.6)]">{industry.name}</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-[rgba(152,102,203,0.25)]">
                {industries.slice(5, 10).map((industry, idx) => (
                  <div
                    key={idx}
                    className="bg-[#0a0a0a] p-6 md:p-8 text-center transition-all border-b-2 border-transparent hover:bg-[rgba(152,102,203,0.05)] hover:border-b-[#9866cb]"
                  >
                    <div className="text-[1.8rem] mb-3">{industry.emoji}</div>
                    <div className="text-[0.78rem] tracking-[0.08em] uppercase text-[rgba(245,240,232,0.6)]">{industry.name}</div>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center px-6 md:px-[60px] py-24 md:py-[140px] relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="font-['Bebas_Neue'] text-[22vw] text-[rgba(152,102,203,0.04)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none tracking-[0.1em]">
              BUZZ LAW
            </div>
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-[0.68rem] tracking-[0.22em] uppercase text-[#9866cb]">Get Started</span>
              </div>
              <h2 className="font-['Cormorant_Garamond'] text-[clamp(2rem,5vw,4rem)] font-light leading-[1.05] mb-5">
                Your brand needs
                <br />
                legal protection <em className="italic text-[#9866cb]">now.</em>
              </h2>
              <p className="text-base text-[rgba(245,240,232,0.55)] max-w-[460px] mx-auto mb-8 leading-relaxed">
                Every day without the right legal structure is a risk. Book a free 30-minute discovery call and find out
                exactly where you stand.
              </p>
              <div className="flex gap-5 justify-center items-center flex-wrap">
                <button
                  onClick={openModal}
                  className="bg-[#9866cb] text-[#0a0a0a] px-8 py-3 text-xs tracking-[0.15em] uppercase font-medium border-none transition-all hover:bg-[#b87eff] hover:-translate-y-0.5 cursor-pointer"
                >
                  Book Free Consultation →
                </button>
                <a
                  href="mailto:hello@buzzlaw.in"
                  className="text-[#f5f0e8] text-xs tracking-[0.15em] uppercase no-underline opacity-60 flex items-center gap-2 hover:opacity-100 transition-opacity"
                >
                  hello@buzzlaw.in
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <style jsx>{`
        @keyframes scrollLine {
          0%, 100% { opacity: 0.3; transform: scaleY(0.8); }
          50% { opacity: 1; transform: scaleY(1); }
        }
        .writing-mode-vertical-rl {
          writing-mode: vertical-rl;
        }
        .opacity-7 {
          opacity: 0.07;
        }
        .opacity-12 {
          opacity: 0.12;
        }
      `}</style>
    </>
  )
}