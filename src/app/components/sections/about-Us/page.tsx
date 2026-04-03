// app/about/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { FadeInSection } from '../../ui/FadeInSection'
import Image from 'next/image'

export default function AboutPage() {
    const [mounted, setMounted] = useState(false)

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

    const stats = [
        { num: '17+', label: 'Years of Legal Practice' },
        { num: '500+', label: 'Brands Protected' },
        { num: '1000+', label: 'Trademarks Filed' },
        { num: '3', label: 'Specialist Lawyers' },
    ]

    const values = [
        {
            iconPath: '/assets/contact-page/lightning.png',
            title: 'Speed as a Legal Principle',
            desc: 'In the creative economy, timing is everything. We\'ve built our processes around moving as fast as your business does.'
        },
        {
            iconPath: '/assets/contact-page/target.png',
            title: 'Specialisation Over Breadth',
            desc: 'We do one thing and we do it exceptionally well. Fashion, influencer, and creator law — nothing else.'
        },
        {
            iconPath: '/assets/contact-page/chatbox.png',
            title: 'Clarity in Every Communication',
            desc: 'You shouldn\'t need a law degree to understand your own legal documents. We write and explain everything in plain English.'
        },
        {
            iconPath: '/assets/contact-page/heart.png',
            title: 'Long-Term Partnership',
            desc: 'We\'re not a one-time service. We grow with your brand, anticipate your needs, and stay one step ahead of legal risk.'
        },
    ]

    const timeline = [
        { year: '2007', title: 'Gaurav Sharma Law Offices Founded', desc: 'Adv. Gaurav Sharma establishes GSLO in New Delhi, beginning with corporate and commercial law practice serving SMEs and entrepreneurs.' },
        { year: '2010', title: 'IP Practice Established', desc: 'GSLO formally launches its Intellectual Property division — trademarks, copyrights, and design registrations — serving India\'s growing startup ecosystem.' },
        { year: '2015', title: 'Fashion & Media Clients Begin Arriving', desc: 'A growing roster of fashion brands, media houses, and independent creators begin engaging GSLO for IP and contract matters — signalling a shift in the market.' },
        { year: '2019', title: 'Creator Economy Practice Takes Shape', desc: 'As India\'s influencer economy explodes, GSLO begins developing a dedicated advisory practice for digital creators, influencers, and online brands.' },
        { year: '2022', title: 'Buzz Law Conceived', desc: 'The decision is made to formally spin out the creative economy practice as its own brand — combining GSLO\'s institutional experience with a focused, modern identity.' },
        { year: '2024', title: 'Buzz Law Launches', desc: 'Buzz Law officially opens as India\'s dedicated fashion, influencer, media, and creator economy law firm — a sister wing of Gaurav Sharma Law Offices, built for a new era.' },
    ]

    const philosophyItems = [
        { num: '01', title: 'Prevention over cure', desc: 'The best legal outcome is the one that never becomes a legal problem. We build proactive legal structures so our clients never need to fight fires.' },
        { num: '02', title: 'Speed is a service', desc: 'In the creative economy, time is money. We\'ve built our entire practice around delivering legal work at the speed creative businesses actually operate.' },
        { num: '03', title: 'Simplicity earns trust', desc: 'Unnecessarily complex legal language is a failure of communication. We say what we mean, clearly, every time — in documents and in conversation.' },
        { num: '04', title: 'Industry knowledge is non-negotiable', desc: 'We don\'t learn your industry on your bill. Our lawyers are embedded in the creative economy — we understand it from the inside out.' },
    ]

    const numbersData = [
        { num: '17', suffix: '+', label: 'Years of combined legal practice across GSLO and Buzz Law' },
        { num: '500', suffix: '+', label: 'Brands and creators represented and protected' },
        { num: '1000', suffix: '+', label: 'Trademarks successfully filed and registered across India' },
        { num: '98', suffix: '%', label: 'Client retention rate — our work speaks for itself' },
    ]

    if (!mounted) {
        return (
            <main className="bg-black min-h-screen pt-32" />
        )
    }

    return (
        <main className="bg-black mt-10 text-[#f5f0e8] overflow-x-hidden">
            {/* Hero Section */}

            <section className="min-h-screen lg:min-h-[95vh] grid lg:grid-cols-2 items-end px-6 md:px-12 lg:px-[60px] pb-20 lg:pb-[80px] pt-32 lg:pt-0 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_85%_25%,rgba(152,102,203,0.08)_0%,transparent_60%),radial-gradient(ellipse_50%_70%_at_5%_85%,rgba(152,102,203,0.05)_0%,transparent_55%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(152,102,203,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(152,102,203,0.03)_1px,transparent_1px)] bg-[length:70px_70px]" />
                </div>
                <div className="absolute font-['Bebas_Neue',sans-serif] text-[24vw] lg:text-[28vw] text-[rgba(152,102,203,0.04)] right-[-2vw] lg:right-[-3vw] top-1/2 -translate-y-1/2 leading-none pointer-events-none select-none tracking-[-0.02em]">
                    17
                </div>

                <div className="relative z-10 max-w-[480px]">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-px bg-[#9866cb]" />
                        <span className="text-sm lg:text-[0.68rem] tracking-[0.22em] uppercase text-[#9866cb]">Our Story</span>
                    </div>
                    <h1 className="font-['Cormorant_Garamond',serif] text-[clamp(2.75rem,5.5vw,5rem)] lg:text-[clamp(3rem,6vw,6rem)] font-light leading-[0.92] tracking-[-0.02em] mb-8">
                        Built on<br />
                        17 years of<br />
                        <em className="italic text-[#9866cb] not-italic">trust.</em>
                    </h1>
                    <p className="text-base lg:text-[0.98rem] leading-relaxed text-[rgba(245,240,232,0.55)] max-w-[420px]">
                        Buzz Law didn't start from a blank page. It was born from one of India's most respected legal practices — carrying forward decades of expertise, into the world of fashion, creators, and the new economy.
                    </p>
                </div>

                <div className="relative z-10 hidden lg:flex flex-col items-end gap-0 pb-2 max-w-[240px]">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="text-right py-6 border-t border-[rgba(152,102,203,0.2)] w-full last:border-b">
                            <div className="font-['Cormorant_Garamond',serif] text-4xl lg:text-5xl font-light text-[#9866cb] leading-none mb-1">{stat.num}</div>
                            <div className="text-xs lg:text-[0.62rem] tracking-[0.15em] uppercase text-[#888]">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Heritage Banner */}
            <div className="bg-[rgba(152,102,203,0.08)] border-y border-[rgba(152,102,203,0.15)] overflow-hidden">
                <div className="flex flex-col lg:flex-row items-stretch">
                    <div className="flex-1 p-12 lg:p-[52px_64px]">
                        <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(1.6rem,3vw,2.6rem)] font-normal text-[#f5f0e8] leading-[1.15] mb-3">
                            A sister wing of Gaurav Sharma Law Offices — India's trusted legal institution since 2007.
                        </h2>
                        <p className="text-[0.88rem] leading-relaxed text-[rgba(245,240,232,0.6)] max-w-[560px]">
                            Buzz Law is the specialised creative economy practice of Gaurav Sharma Law Offices, one of India's most established full-service law firms. Founded in 2007, GSLO has spent 17+ years representing clients across corporate, civil, and commercial law. Buzz Law carries that legacy into the world of fashion, influencers, media, and the creator economy — with the same rigour, and a sharper focus.
                        </p>
                    </div>
                    <div className="lg:w-[280px] flex-shrink-0 p-12 lg:p-[52px_40px] flex flex-col justify-center border-l border-[rgba(152,102,203,0.15)]">
                        <div className="font-['Bebas_Neue',sans-serif] text-7xl text-[rgba(152,102,203,0.15)] leading-none mb-2">GSLO</div>
                        <div className="text-[0.68rem] tracking-[0.18em] uppercase text-[rgba(245,240,232,0.45)]">Gaurav Sharma Law Offices</div>
                        <div className="text-[0.82rem] text-[rgba(245,240,232,0.4)] mt-1.5 leading-relaxed">Est. 2007 · New Delhi, India<br />Full-Service Legal Practice</div>
                    </div>
                </div>
            </div>

            {/* Story Section */}
            <section className="px-6 md:px-8 lg:px-[60px] py-24 lg:py-[130px]">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-[100px] items-start">
                    <FadeInSection>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-[30px] h-px bg-[#9866cb]" />
                            <span className="text-[0.68rem] tracking-[0.22em] uppercase text-[#9866cb]">Why We Exist</span>
                        </div>
                        <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2rem,3.5vw,3.4rem)] font-light leading-[1.1] mt-4">
                            The creative economy needed <em className="italic text-[#9866cb] not-italic">its own</em> law firm.
                        </h2>
                        <p className="text-[0.9rem] leading-relaxed text-[rgba(245,240,232,0.58)] mt-7 mb-5">
                            For years, the team at Gaurav Sharma Law Offices watched a pattern repeat itself. Fashion founders, influencers, content creators, and media companies would walk in with legal problems that were entirely predictable — and entirely avoidable. They came too late, with the wrong advice, from lawyers who didn't understand their world.
                        </p>
                        <p className="text-[0.9rem] leading-relaxed text-[rgba(245,240,232,0.58)] mb-5">
                            The fashion industry doesn't operate like a corporate boardroom. A brand deal doesn't wait for a two-week review cycle. A counterfeit drop can go viral before your lawyer returns your call. <strong className="text-[#f5f0e8] font-normal">The creative economy moves fast, and the legal world wasn't keeping up.</strong>
                        </p>
                        <p className="text-[0.9rem] leading-relaxed text-[rgba(245,240,232,0.58)]">
                            So we built Buzz Law — a specialist practice that speaks the language of the industry it serves. Backed by 17+ years of institutional legal knowledge from GSLO, but built ground-up for the needs of modern creative businesses.
                        </p>
                    </FadeInSection>

                    <div>
                        {/* Sister Firm Card */}
                        <FadeInSection delay={0.2}>
                            <div className="border border-[rgba(152,102,203,0.25)] p-8 lg:p-9 mb-8 relative overflow-hidden group hover:border-[rgba(152,102,203,0.5)] transition-colors">
                                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(152,102,203,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="flex items-center gap-2.5 mb-3">
                                    <div className="w-5 h-px bg-[#9866cb]" />
                                    <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#9866cb]">Our Parent Firm</span>
                                </div>
                                <h3 className="font-['Cormorant_Garamond',serif] text-[1.6rem] font-normal mb-3 text-[#f5f0e8]">Gaurav Sharma Law Offices</h3>
                                <p className="text-[0.84rem] leading-relaxed text-[rgba(245,240,232,0.55)] mb-5">
                                    Established in 2007, GSLO is a full-service law firm based in New Delhi, with a track record spanning corporate law, commercial litigation, intellectual property, and civil matters. Buzz Law draws on GSLO's institutional depth while operating as a dedicated, focused practice for the creative economy.
                                </p>
                                <div className="flex gap-7">
                                    <div>
                                        <div className="font-['Cormorant_Garamond',serif] text-3xl text-[#9866cb] leading-none">17+</div>
                                        <div className="text-[0.6rem] tracking-[0.12em] uppercase text-[#777] mt-0.5">Years Active</div>
                                    </div>
                                    <div>
                                        <div className="font-['Cormorant_Garamond',serif] text-3xl text-[#9866cb] leading-none">2007</div>
                                        <div className="text-[0.6rem] tracking-[0.12em] uppercase text-[#777] mt-0.5">Founded</div>
                                    </div>
                                    <div>
                                        <div className="font-['Cormorant_Garamond',serif] text-3xl text-[#9866cb] leading-none">3</div>
                                        <div className="text-[0.6rem] tracking-[0.12em] uppercase text-[#777] mt-0.5">Offices</div>
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>

                        {/* Values List */}
                        {values.map((value, idx) => (
                            <FadeInSection key={idx} delay={0.3 + idx * 0.1}>
                                <div className="py-5 border-b border-[rgba(245,240,232,0.06)] first:border-t flex gap-4 items-start group hover:pl-2 transition-all">
                                    <Image
                                        src={value.iconPath}
                                        alt={value.title}
                                        width={64}
                                        height={64}
                                        className="object-contain transition-all duration-300 group-hover:scale-110"
                                    />
                                    <div>
                                        <div className="text-[0.88rem] font-medium mb-1 text-[#f5f0e8]">{value.title}</div>
                                        <div className="text-[0.78rem] leading-relaxed text-[rgba(245,240,232,0.45)]">{value.desc}</div>
                                    </div>
                                </div>
                            </FadeInSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="px-6 md:px-8 lg:px-[60px] pb-24 lg:pb-[130px]">
                <div className="mb-[70px]">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-[30px] h-px bg-[#9866cb]" />
                        <span className="text-[0.68rem] tracking-[0.22em] uppercase text-[#9866cb]">Our Journey</span>
                    </div>
                    <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2rem,3.5vw,3.4rem)] font-light leading-[1.1] mt-3">
                        17 years of<br />
                        <em className="italic text-[#9866cb] not-italic">legal excellence.</em>
                    </h2>
                </div>
                <div className="relative pl-0 before:absolute before:left-0 before:top-5 before:bottom-5 before:w-px before:bg-[rgba(152,102,203,0.25)]">
                    {timeline.map((item, idx) => (
                        <div key={idx} className="grid lg:grid-cols-[120px_1fr] gap-0 lg:gap-10 py-7 border-b border-[rgba(245,240,232,0.06)] relative">
                            <div className="font-['Bebas_Neue',sans-serif] text-2xl text-[#9866cb] tracking-[0.05em] leading-none relative mb-2 lg:mb-0">
                                {item.year}
                                <div className="absolute -right-[21px] top-2 w-2 h-2 rounded-full border border-[#9866cb] bg-black hidden lg:block" />
                            </div>
                            <div>
                                <h4 className="text-[0.92rem] font-medium mb-1 text-[#f5f0e8]">{item.title}</h4>
                                <p className="text-[0.8rem] leading-relaxed text-[rgba(245,240,232,0.45)]">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Team Section */}
            <section className="px-6 md:px-8 lg:px-[60px] py-24 lg:py-[130px] bg-[rgba(255,255,255,0.015)] border-t border-[rgba(245,240,232,0.06)]">
  <div className="mb-20">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-[30px] h-px bg-[#9866cb]" />
      <span className="text-[0.68rem] tracking-[0.22em] uppercase text-[#9866cb]">The Team</span>
    </div>
    <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2rem,3.5vw,3.4rem)] font-light leading-[1.1] mt-3">
      The lawyers behind<br />
      <em className="italic text-[#9866cb] not-italic">your brand's protection.</em>
    </h2>
    <p className="text-[0.88rem] leading-relaxed text-[rgba(245,240,232,0.45)] max-w-[480px] mt-3">
      Three specialists. One focused practice. Every lawyer at Buzz Law has deep experience in the creative industries — not just in law.
    </p>
  </div>

  <div className="grid lg:grid-cols-[1.4fr_1fr_1fr] gap-px bg-[rgba(152,102,203,0.25)]">
    {/* Founder Card - Gaurav Sharma */}
    <div className="bg-black relative overflow-hidden transition-all duration-400 hover:-translate-y-1 group">
      <div className="w-full aspect-[3/4] bg-[#0d0d0d] relative overflow-hidden">
        {/* Full square image - no circle */}
        <img 
          src="/assets/staff/gaurav.jpeg"
          alt="Adv. Gaurav Sharma"
          className="w-full h-full object-cover transition-all duration-600 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.85)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-7 lg:p-[28px]">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-px bg-[#9866cb]" />
          <span className="text-[0.6rem] tracking-[0.18em] uppercase text-[#9866cb]">Founder & Principal</span>
        </div>
        <div className="font-['Cormorant_Garamond',serif] text-[1.9rem] font-normal mb-1 text-[#f5f0e8]">Adv. Gaurav Sharma</div>
        <div className="text-[0.78rem] text-[rgba(245,240,232,0.45)] mb-4">Founder, Gaurav Sharma Law Offices & Buzz Law</div>
        <div className="text-[0.8rem] leading-relaxed text-[rgba(245,240,232,0.5)] mb-5 space-y-3">
          <p>Gaurav Sharma established GSLO with a vision to create a law firm that combines deep legal expertise with a genuine commitment to client success. With over 17 years of experience, he has earned a reputation as a formidable litigator and a trusted advisor.</p>
          <p>His practice focuses on complex litigation and advisory, but his passion lies in building lasting relationships with clients and mentoring the next generation of legal talent at the firm.</p>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-5">
          <span className="text-[0.58rem] tracking-[0.1em] uppercase border border-[rgba(152,102,203,0.25)] px-2.5 py-1 text-[rgba(245,240,232,0.4)]">Complex Litigation</span>
          <span className="text-[0.58rem] tracking-[0.1em] uppercase border border-[rgba(152,102,203,0.25)] px-2.5 py-1 text-[rgba(245,240,232,0.4)]">Advisory</span>
          <span className="text-[0.58rem] tracking-[0.1em] uppercase border border-[rgba(152,102,203,0.25)] px-2.5 py-1 text-[rgba(245,240,232,0.4)]">IP & Trademark Law</span>
          <span className="text-[0.58rem] tracking-[0.1em] uppercase border border-[rgba(152,102,203,0.25)] px-2.5 py-1 text-[rgba(245,240,232,0.4)]">Client Relationship</span>
        </div>
        <div className="inline-flex items-center gap-2 border border-[rgba(152,102,203,0.25)] px-3.5 py-1.5 text-[0.62rem] tracking-[0.1em] uppercase text-[#9866cb]">
          ⚖ Enrolled — Bar Council of Delhi · 2007
        </div>
        <div className="flex gap-2.5 mt-4">
          <a href="#" className="w-8 h-8 border border-[rgba(245,240,232,0.06)] flex items-center justify-center text-[0.7rem] text-[#777] no-underline transition-all hover:border-[#9866cb] hover:text-[#9866cb]">in</a>
          <a href="#" className="w-8 h-8 border border-[rgba(245,240,232,0.06)] flex items-center justify-center text-[0.7rem] text-[#777] no-underline transition-all hover:border-[#9866cb] hover:text-[#9866cb]">𝕏</a>
          <a href="mailto:gaurav@buzzlaw.in" className="w-8 h-8 border border-[rgba(245,240,232,0.06)] flex items-center justify-center text-[0.7rem] text-[#777] no-underline transition-all hover:border-[#9866cb] hover:text-[#9866cb]">✉</a>
        </div>
      </div>
    </div>

    {/* Associate 1 - Anusha Girish */}
    <div className="bg-black relative overflow-hidden transition-all duration-400 hover:-translate-y-1 group">
      <div className="w-full aspect-[3/4] bg-[#0d0d0d] relative overflow-hidden">
        {/* Full square image - no circle */}
        <img 
          src="/assets/staff/anusha.jpeg"
          alt="Adv. Anusha Girish"
          className="w-full h-full object-cover transition-all duration-600 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.85)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-7">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-px bg-[#9866cb]" />
          <span className="text-[0.6rem] tracking-[0.18em] uppercase text-[#9866cb]">Associate — Litigation & Advisory</span>
        </div>
        <div className="font-['Cormorant_Garamond',serif] text-2xl font-normal mb-1 text-[#f5f0e8]">Adv. Anusha Girish</div>
        <div className="text-[0.78rem] text-[rgba(245,240,232,0.45)] mb-4">Distinguished Advocate</div>
        <div className="text-[0.8rem] leading-relaxed text-[rgba(245,240,232,0.5)] mb-5">
          <p>Anusha Girish is a distinguished advocate with a sharp legal mind and strong commitment to justice. Graduated from Delhi University with an LLB, she fiercely advocates for clients' rights, earning a reputation as a formidable legal expert.</p>
          <p className="mt-3">Her dedication to thorough case preparation and strategic courtroom presence has resulted in numerous successful outcomes for her clients across various practice areas.</p>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-5">
          <span className="text-[0.58rem] tracking-[0.1em] uppercase border border-[rgba(152,102,203,0.25)] px-2.5 py-1 text-[rgba(245,240,232,0.4)]">Litigation</span>
          <span className="text-[0.58rem] tracking-[0.1em] uppercase border border-[rgba(152,102,203,0.25)] px-2.5 py-1 text-[rgba(245,240,232,0.4)]">Client Advocacy</span>
          <span className="text-[0.58rem] tracking-[0.1em] uppercase border border-[rgba(152,102,203,0.25)] px-2.5 py-1 text-[rgba(245,240,232,0.4)]">Legal Research</span>
          <span className="text-[0.58rem] tracking-[0.1em] uppercase border border-[rgba(152,102,203,0.25)] px-2.5 py-1 text-[rgba(245,240,232,0.4)]">Courtroom Strategy</span>
        </div>
        <div className="inline-flex items-center gap-2 border border-[rgba(152,102,203,0.25)] px-3.5 py-1.5 text-[0.62rem] tracking-[0.1em] uppercase text-[#9866cb]">
          ⚖ LLB — Delhi University
        </div>
        <div className="flex gap-2.5 mt-4">
          <a href="#" className="w-8 h-8 border border-[rgba(245,240,232,0.06)] flex items-center justify-center text-[0.7rem] text-[#777] no-underline transition-all hover:border-[#9866cb] hover:text-[#9866cb]">in</a>
          <a href="mailto:anusha@buzzlaw.in" className="w-8 h-8 border border-[rgba(245,240,232,0.06)] flex items-center justify-center text-[0.7rem] text-[#777] no-underline transition-all hover:border-[#9866cb] hover:text-[#9866cb]">✉</a>
        </div>
      </div>
    </div>

    {/* Associate 2 - Laxman Kumar */}
    <div className="bg-black relative overflow-hidden transition-all duration-400 hover:-translate-y-1 group">
      <div className="w-full aspect-[3/4] bg-[#0d0d0d] relative overflow-hidden">
        {/* Full square image - no circle */}
        <img 
          src="/assets/staff/laxman.jpeg"
          alt="Adv. Laxman Kumar"
          className="w-full h-full object-cover transition-all duration-600 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.85)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-7">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-px bg-[#9866cb]" />
          <span className="text-[0.6rem] tracking-[0.18em] uppercase text-[#9866cb]">Associate — Litigation & Dispute Resolution</span>
        </div>
        <div className="font-['Cormorant_Garamond',serif] text-2xl font-normal mb-1 text-[#f5f0e8]">Adv. Laxman Kumar</div>
        <div className="text-[0.78rem] text-[rgba(245,240,232,0.45)] mb-4">Formidable Legal Advocate</div>
        <div className="text-[0.8rem] leading-relaxed text-[rgba(245,240,232,0.5)] mb-5">
          <p>With a sharp legal mind and a strong commitment to justice, Laxman Kumar graduated from Delhi University with an LLB and is a dedicated advocate for his clients' rights in the courtroom.</p>
          <p className="mt-3">His relentless pursuit of favorable outcomes for his clients has earned him a reputation as a formidable legal advocate. Laxman's strategic approach and attention to detail make him a valuable asset to the Buzz Law team.</p>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-5">
          <span className="text-[0.58rem] tracking-[0.1em] uppercase border border-[rgba(152,102,203,0.25)] px-2.5 py-1 text-[rgba(245,240,232,0.4)]">Dispute Resolution</span>
          <span className="text-[0.58rem] tracking-[0.1em] uppercase border border-[rgba(152,102,203,0.25)] px-2.5 py-1 text-[rgba(245,240,232,0.4)]">Litigation</span>
          <span className="text-[0.58rem] tracking-[0.1em] uppercase border border-[rgba(152,102,203,0.25)] px-2.5 py-1 text-[rgba(245,240,232,0.4)]">Client Rights</span>
          <span className="text-[0.58rem] tracking-[0.1em] uppercase border border-[rgba(152,102,203,0.25)] px-2.5 py-1 text-[rgba(245,240,232,0.4)]">Courtroom Advocacy</span>
        </div>
        <div className="inline-flex items-center gap-2 border border-[rgba(152,102,203,0.25)] px-3.5 py-1.5 text-[0.62rem] tracking-[0.1em] uppercase text-[#9866cb]">
          ⚖ LLB — Delhi University
        </div>
        <div className="flex gap-2.5 mt-4">
          <a href="#" className="w-8 h-8 border border-[rgba(245,240,232,0.06)] flex items-center justify-center text-[0.7rem] text-[#777] no-underline transition-all hover:border-[#9866cb] hover:text-[#9866cb]">in</a>
          <a href="mailto:laxman@buzzlaw.in" className="w-8 h-8 border border-[rgba(245,240,232,0.06)] flex items-center justify-center text-[0.7rem] text-[#777] no-underline transition-all hover:border-[#9866cb] hover:text-[#9866cb]">✉</a>
        </div>
      </div>
    </div>
  </div>
</section>
            {/* Numbers Section */}
            <section className="bg-[#f5f0e8] text-black px-6 md:px-8 lg:px-[60px] py-20 lg:py-[100px]">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-[30px] h-px bg-[#9866cb]" />
                    <span className="text-[0.68rem] tracking-[0.22em] uppercase text-[#9866cb]">By the Numbers</span>
                </div>
                <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-[1.1] text-black mt-3">
                    17 years. Thousands of<br />
                    <em className="italic text-[#9866cb] not-italic">legal wins.</em>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(10,10,10,0.1)] mt-[60px]">
                    {numbersData.map((item, idx) => (
                        <div key={idx} className="bg-[#f5f0e8] p-12 lg:p-[48px_32px] border-r border-[rgba(10,10,10,0.08)] last:border-r-0 hover:bg-[rgba(152,102,203,0.05)] transition-colors">
                            <div className="font-['Cormorant_Garamond',serif] text-[clamp(3rem,5vw,5rem)] font-light text-black leading-none mb-2.5">
                                {item.num}<span className="text-[#9866cb]">{item.suffix}</span>
                            </div>
                            <div className="text-[0.72rem] tracking-[0.14em] uppercase text-[rgba(10,10,10,0.45)] leading-relaxed">{item.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="px-6 md:px-8 lg:px-[60px] py-24 lg:py-[130px]">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                    <FadeInSection>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-[30px] h-px bg-[#9866cb]" />
                            <span className="text-[0.68rem] tracking-[0.22em] uppercase text-[#9866cb]">Our Philosophy</span>
                        </div>
                        <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2rem,3.5vw,3.4rem)] font-light leading-[1.1] mt-4">
                            Law should work <em className="italic text-[#9866cb] not-italic">for</em> your business. Not against it.
                        </h2>
                        <p className="text-[0.9rem] leading-relaxed text-[rgba(245,240,232,0.55)] mt-5">
                            Too many creative businesses treat legal work as a necessary evil — something expensive, slow, and confusing that you deal with when things go wrong. We exist to change that. Great legal counsel should feel like a business advantage, not a burden.
                        </p>
                        <p className="text-[0.9rem] leading-relaxed text-[rgba(245,240,232,0.55)] mt-4">
                            This belief shapes everything we do at Buzz Law — from how we price our work to how we write our contracts to how quickly we respond when you call.
                        </p>
                    </FadeInSection>

                    <div className="space-y-0">
                        {philosophyItems.map((item, idx) => (
                            <FadeInSection key={idx} delay={0.1 + idx * 0.1}>
                                <div className="py-6 border-b border-[rgba(245,240,232,0.06)] first:border-t group hover:pl-3 transition-all">
                                    <div className="font-['Bebas_Neue',sans-serif] text-5xl text-[#9866cb] opacity-20 leading-none mb-1">{item.num}</div>
                                    <div className="text-[0.92rem] font-medium mb-1.5 text-[#f5f0e8]">{item.title}</div>
                                    <div className="text-[0.8rem] leading-relaxed text-[rgba(245,240,232,0.45)]">{item.desc}</div>
                                </div>
                            </FadeInSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="text-center px-6 md:px-8 lg:px-[60px] py-28 lg:py-[140px] relative overflow-hidden">
                <div className="absolute font-['Bebas_Neue',sans-serif] text-[18vw] text-[rgba(152,102,203,0.04)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none tracking-[0.1em]">
                    BUZZ LAW
                </div>
                <div className="relative z-10">
                    <div className="flex items-center justify-center gap-3 mb-5">
                        <div className="w-[30px] h-px bg-[#9866cb]" />
                        <span className="text-[0.68rem] tracking-[0.22em] uppercase text-[#9866cb]">Work With Us</span>
                    </div>
                    <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2.5rem,5.5vw,5rem)] font-light mb-5 leading-[1.05]">
                        17 years of experience,<br />working for <em className="italic text-[#9866cb] not-italic">your brand.</em>
                    </h2>
                    <p className="text-[0.95rem] leading-relaxed text-[rgba(245,240,232,0.5)] max-w-[430px] mx-auto mb-12">
                        Book a free 30-minute discovery call. No obligations, no jargon — just an honest conversation about your legal position.
                    </p>
                    <div>
                        <button className="bg-[#9866cb] text-black px-11 py-4 text-[0.76rem] tracking-[0.16em] uppercase font-medium border-none transition-all hover:bg-[#b87eff] hover:-translate-y-0.5 cursor-pointer">
                            Get In Touch →
                        </button>
                        <a href="/how-we-work" className="text-[rgba(245,240,232,0.45)] text-[0.76rem] tracking-[0.14em] uppercase no-underline ml-7 hover:text-[#f5f0e8] transition-colors">
                            How We Work ↗
                        </a>
                    </div>
                </div>
            </section>

            <style jsx global>{`
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