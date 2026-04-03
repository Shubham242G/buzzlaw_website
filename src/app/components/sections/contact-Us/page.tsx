// app/contact/page.tsx
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

// Import your custom icons (adjust the paths to match your local files)
import brandProtectionIcon from '@/public/icons/brand-protection.svg'
import contractIcon from '@/public/icons/contract.svg'
import influencerLawIcon from '@/public/icons/influencer-law.svg'
import fashionStartupIcon from '@/public/icons/fashion-startup.svg'
import disputeIcon from '@/public/icons/dispute.svg'
import generalQueryIcon from '@/public/icons/general-query.svg'

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
        {
            label: 'Brand Protection',
            iconPath: '/assets/contact-page/factory.png',  // Path relative to public folder
            iconAlt: 'Brand Protection Icon'
        },
        {
            label: 'A Contract',
            iconPath: '/assets/contact-page/shield.png',  // Path relative to public folder
            iconAlt: 'Brand Protection Icon'
        },
        {

            label: 'Influencer Law',
            iconPath: '/assets/contact-page/lipstick.png',  // Path relative to public folder
            iconAlt: 'Influencer Law Icon'
        },
        {

            label: 'Fashion Startup',
            iconPath: '/assets/contact-page/fashion.png',  // Path relative to public folder
            iconAlt: 'Fashion Startup Icon'
        },
        {
            label: 'A Dispute',
            iconPath: '/assets/contact-page/heart.png',  // Path relative to public folder
            iconAlt: 'Dispute Icon'
        },
        {
            label: 'General Query',
            iconPath: '/assets/contact-page/chatbox.png',  // Path relative to public folder
            iconAlt: 'General Query Icon'
        },
    ]

    return (
        <div className="bg-[#0a0a0a] text-[#f5f0e8] min-h-screen font-sans">
            {/* HERO */}
            <section className="relative min-h-[45vh] flex flex-col justify-end px-6 md:px-16 pb-16 md:pb-20 mt-20 overflow-hidden">
    
    {/* Purple Background Elements */}
    <div className="absolute inset-0 pointer-events-none 
        bg-[radial-gradient(ellipse_60%_80%_at_80%_20%,rgba(152,102,203,0.08)_0%,transparent_60%),
            radial-gradient(ellipse_40%_60%_at_10%_90%,rgba(152,102,203,0.05)_0%,transparent_55%)]">
    </div>

    <div className="absolute inset-0 pointer-events-none 
        bg-[linear-gradient(rgba(152,102,203,0.03)_1px,transparent_1px),
            linear-gradient(90deg,rgba(152,102,203,0.03)_1px,transparent_1px)] 
        bg-[size:72px_72px]">
    </div>

    {/* Background Text */}
    <div className="absolute font-['Bebas_Neue',sans-serif] text-[22vw] 
        text-[rgba(152,102,203,0.04)] -right-2 -bottom-2 
        leading-none pointer-events-none select-none">
        HELLO
    </div>

    {/* Content */}
    <div className="relative z-10 flex items-center gap-3.5 text-[0.7rem] tracking-[.22em] uppercase text-[#9866cb] mb-5">
        <div className="w-11 h-px bg-[#9866cb]"></div>
        Get In Touch
    </div>

    <h1 className="relative z-10 font-['Cormorant_Garamond',serif] text-[clamp(2.8rem,6vw,5rem)] font-light leading-[0.9] tracking-[-.025em] mb-6">
        Let's talk about<br />
        <em className="italic text-[#9866cb] not-italic">your brand.</em>
    </h1>

    <p className="relative z-10 text-[0.9rem] leading-relaxed text-[rgba(245,240,232,.5)] max-w-[460px]">
        Whether you have a legal crisis or just want to understand where you stand — your first conversation with us is always free.
    </p>
</section>

            {/* MAIN CONTACT AREA */}
            <div className="grid md:grid-cols-[1fr_1.1fr] min-h-screen border-t border-[rgba(245,240,232,0.06)]">

                {/* LEFT PANEL */}
                <div className="px-6 md:px-16 py-16 md:py-20 border-r border-[rgba(245,240,232,0.06)] md:sticky top-0 h-fit">
                    <div className="reveal-left mb-14">
                        <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(1.8rem,2.5vw,2.6rem)] font-light leading-[1.1] mb-4">
                            We're here when<br />
                            <em className="italic text-[#9866cb] not-italic">you need us.</em>
                        </h2>
                        <p className="text-[0.85rem] leading-relaxed text-[rgba(245,240,232,.5)] mt-3.5">
                            Most legal problems faced by brands and creators are predictable — and preventable. Drop us a message and we'll tell you exactly where you stand, what's urgent, and what can wait.
                        </p>
                    </div>

                    <div className="flex flex-col mb-14 reveal-left">
                        {[
                            { icon: '✉', label: 'Email Us', value: 'hello@buzzlaw.in', sub: 'We respond within 24 hours on working days', href: 'mailto:hello@buzzlaw.in' },
                            { icon: '📞', label: 'Call Us', value: '+91 11 4000 0000', sub: 'Mon – Sat, 10am – 7pm IST', href: 'tel:+911140000000' },
                            { icon: '💬', label: 'WhatsApp', value: '+91 98100 00000', sub: 'For quick queries — we\'re usually fast', href: '#' },
                            { icon: '📍', label: 'Office', value: 'New Delhi, India', sub: 'Connaught Place · By appointment only', href: null }
                        ].map((item, idx) => (
                            <div key={idx} className={`py-7 border-t ${idx === 3 ? 'border-b' : ''} border-[rgba(245,240,232,0.06)] flex gap-5 items-start group`}>
                                <div className="w-11 h-11 border border-[rgba(152,102,203,0.25)] flex items-center justify-center text-base transition-all duration-300 group-hover:border-[#9866cb] group-hover:bg-[rgba(152,102,203,0.04)]">{item.icon}</div>
                                <div className="flex-1">
                                    <div className="text-[0.62rem] tracking-[.18em] uppercase text-[#9866cb] mb-1.5">{item.label}</div>
                                    {item.href ? (
                                        <a href={item.href} className="text-[0.9rem] text-[#f5f0e8] no-underline block leading-snug">{item.value}</a>
                                    ) : (
                                        <div className="text-[0.9rem] text-[#f5f0e8] leading-snug">{item.value}</div>
                                    )}
                                    <div className="text-[0.75rem] text-[#888] mt-1 leading-relaxed">{item.sub}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="border border-[rgba(152,102,203,0.25)] p-7 mb-10 reveal-left">
                        <div className="text-[0.62rem] tracking-[.18em] uppercase text-[#9866cb] mb-4.5">Office Hours</div>
                        {[
                            { day: 'Monday – Friday', time: '10:00am – 7:00pm IST', dotBg: '#4caf79', dotShadow: '0 0 8px rgba(76,175,121,.5)' },
                            { day: 'Saturday', time: '10:00am – 2:00pm IST', dotBg: '#f0c040', dotShadow: '0 0 8px rgba(240,192,64,.5)' },
                            { day: 'Sunday', time: 'Closed', dotBg: '#666', dotShadow: 'none' },
                            { day: 'Urgent Matters', time: 'Retainer clients, always', dotBg: '#4caf79', dotShadow: '0 0 8px rgba(76,175,121,.5)' }
                        ].map((item, idx) => (
                            <div key={idx} className={`flex justify-between items-center py-2.5 ${idx < 3 ? 'border-b border-[rgba(245,240,232,0.06)]' : ''} text-[0.82rem]`}>
                                <span className="text-[rgba(245,240,232,.5)]">{item.day}</span>
                                <div className="flex items-center gap-2.5">
                                    <div className={`w-1.5 h-1.5 rounded-full`} style={{ background: item.dotBg, boxShadow: item.dotShadow }}></div>
                                    <span className="text-[#f5f0e8]">{item.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-3.5 reveal-left">
                        {['IG', 'in', '𝕏', 'WA'].map((social) => (
                            <a key={social} href="#" className="border border-[rgba(152,102,203,0.25)] w-[42px] h-[42px] flex items-center justify-center text-[#888] text-[0.82rem] no-underline transition-all duration-300 hover:border-[#9866cb] hover:text-[#9866cb] hover:bg-[rgba(152,102,203,0.12)]">{social}</a>
                        ))}
                    </div>
                </div>

                {/* RIGHT PANEL - FORM */}
                <div className="px-6 md:px-16 py-16 md:py-20 bg-[rgba(255,255,255,.012)]">
                    <div className="reveal-right mb-13">
                        <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(1.8rem,2.5vw,2.6rem)] font-light leading-[1.1] mb-3">
                            Send us a<br />
                            <em className="italic text-[#9866cb] not-italic">message.</em>
                        </h2>
                        <p className="text-[0.85rem] leading-relaxed text-[rgba(245,240,232,.45)]">
                            Tell us what you're dealing with and we'll get back to you within one business day. For urgent matters, call or WhatsApp us directly.
                        </p>
                    </div>

                    <div className="mb-2.5">
                        <div className="text-[0.62rem] tracking-[.18em] uppercase text-[#9866cb] mb-3.5">I'm reaching out about...</div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-11 reveal-right">
                            {intentOptions.map((option) => (
                                <button key={option.label} /* ... */ >
  <div className="relative z-10 flex flex-col items-center justify-center">
    <div className="w-8 h-8 mb-2 relative">
      <img 
        src={option.iconPath} 
        alt={option.iconAlt}
        className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
      />
    </div>
    <div className="text-[0.65rem] tracking-[.12em] uppercase">
      {option.label}
    </div>
  </div>
</button>
                            ))}
                        </div>
                    </div>

                    {!formSubmitted ? (
                        <form onSubmit={handleSubmit} className="reveal-right">
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div className="mb-6">
                                    <label className="block text-[0.62rem] tracking-[.18em] uppercase text-[#9866cb] mb-2">First Name *</label>
                                    <input type="text" placeholder="Priya" required className="w-full bg-transparent border-0 border-b border-[rgba(245,240,232,.2)] text-[#f5f0e8] font-sans text-[0.9rem] font-light py-3.5 outline-none transition-colors duration-300 focus:border-[#9866cb] placeholder:text-[rgba(245,240,232,.25)]" />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-[0.62rem] tracking-[.18em] uppercase text-[#9866cb] mb-2">Last Name *</label>
                                    <input type="text" placeholder="Sharma" required className="w-full bg-transparent border-0 border-b border-[rgba(245,240,232,.2)] text-[#f5f0e8] font-sans text-[0.9rem] font-light py-3.5 outline-none transition-colors duration-300 focus:border-[#9866cb] placeholder:text-[rgba(245,240,232,.25)]" />
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-5">
                                <div className="mb-6">
                                    <label className="block text-[0.62rem] tracking-[.18em] uppercase text-[#9866cb] mb-2">Email Address *</label>
                                    <input type="email" placeholder="priya@yourbrand.com" required className="w-full bg-transparent border-0 border-b border-[rgba(245,240,232,.2)] text-[#f5f0e8] font-sans text-[0.9rem] font-light py-3.5 outline-none transition-colors duration-300 focus:border-[#9866cb] placeholder:text-[rgba(245,240,232,.25)]" />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-[0.62rem] tracking-[.18em] uppercase text-[#9866cb] mb-2">Phone Number</label>
                                    <input type="tel" placeholder="+91 98xxx xxxxx" className="w-full bg-transparent border-0 border-b border-[rgba(245,240,232,.2)] text-[#f5f0e8] font-sans text-[0.9rem] font-light py-3.5 outline-none transition-colors duration-300 focus:border-[#9866cb] placeholder:text-[rgba(245,240,232,.25)]" />
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-5">
                                <div className="mb-6">
                                    <label className="block text-[0.62rem] tracking-[.18em] uppercase text-[#9866cb] mb-2">Brand / Company Name</label>
                                    <input type="text" placeholder="Your Brand Name" className="w-full bg-transparent border-0 border-b border-[rgba(245,240,232,.2)] text-[#f5f0e8] font-sans text-[0.9rem] font-light py-3.5 outline-none transition-colors duration-300 focus:border-[#9866cb] placeholder:text-[rgba(245,240,232,.25)]" />
                                </div>
                                <div className="mb-6 relative">
                                    <label className="block text-[0.62rem] tracking-[.18em] uppercase text-[#9866cb] mb-2">I am a...</label>
                                    <select className="w-full bg-transparent border-0 border-b border-[rgba(245,240,232,.2)] text-[#f5f0e8] font-sans text-[0.9rem] font-light py-3.5 outline-none transition-colors duration-300 focus:border-[#9866cb] appearance-none">
                                        <option value="" className="bg-[#1a1a1a]">Select one...</option>
                                        <option className="bg-[#1a1a1a]">Fashion Brand / Label</option>
                                        <option className="bg-[#1a1a1a]">Influencer / Content Creator</option>
                                        <option className="bg-[#1a1a1a]">Media / Production House</option>
                                        <option className="bg-[#1a1a1a]">D2C / E-Commerce Brand</option>
                                        <option className="bg-[#1a1a1a]">Celebrity / Public Figure</option>
                                        <option className="bg-[#1a1a1a]">Manufacturer / Vendor</option>
                                        <option className="bg-[#1a1a1a]">YouTuber / Podcaster</option>
                                        <option className="bg-[#1a1a1a]">Talent Agency</option>
                                        <option className="bg-[#1a1a1a]">Other</option>
                                    </select>
                                    <div className="absolute right-0 top-[calc(50%+4px)] transform -translate-y-1/2 text-[#9866cb] text-sm pointer-events-none">↓</div>
                                </div>
                            </div>

                            <div className="mb-6 relative">
                                <label className="block text-[0.62rem] tracking-[.18em] uppercase text-[#9866cb] mb-2">Practice Area</label>
                                <select className="w-full bg-transparent border-0 border-b border-[rgba(245,240,232,.2)] text-[#f5f0e8] font-sans text-[0.9rem] font-light py-3.5 outline-none transition-colors duration-300 focus:border-[#9866cb] appearance-none">
                                    <option value="" className="bg-[#1a1a1a]">Which area of law concerns you?</option>
                                    <option className="bg-[#1a1a1a]">Brand Protection & Trademark</option>
                                    <option className="bg-[#1a1a1a]">Fashion Startup Law</option>
                                    <option className="bg-[#1a1a1a]">Manufacturing & Supply Chain</option>
                                    <option className="bg-[#1a1a1a]">Retail & E-Commerce</option>
                                    <option className="bg-[#1a1a1a]">Brand Collaborations</option>
                                    <option className="bg-[#1a1a1a]">Fashion Litigation</option>
                                    <option className="bg-[#1a1a1a]">Influencer Law & ASCI Compliance</option>
                                    <option className="bg-[#1a1a1a]">Media & Entertainment Law</option>
                                    <option className="bg-[#1a1a1a]">Creator Economy Law</option>
                                    <option className="bg-[#1a1a1a]">Modeling & Talent Law</option>
                                    <option className="bg-[#1a1a1a]">Not sure / Multiple areas</option>
                                </select>
                                <div className="absolute right-0 top-[calc(50%+4px)] transform -translate-y-1/2 text-[#9866cb] text-sm pointer-events-none">↓</div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-[0.62rem] tracking-[.18em] uppercase text-[#9866cb] mb-2">Tell Us What's Going On *</label>
                                <textarea placeholder="Describe your situation briefly — the more context you give us, the more useful our response will be. Don't worry about legal terminology; just tell us what happened or what you need." required className="w-full bg-transparent border-0 border-b border-[rgba(245,240,232,.2)] text-[#f5f0e8] font-sans text-[0.9rem] font-light py-3.5 outline-none transition-colors duration-300 focus:border-[#9866cb] placeholder:text-[rgba(245,240,232,.25)] min-h-[100px]"></textarea>
                            </div>

                            <div className="mb-5">
                                <label className="block text-[0.62rem] tracking-[.18em] uppercase text-[#9866cb] mb-2">How Urgent Is This?</label>
                                <div className="flex gap-3 mb-7">
                                    {['No Rush', 'This Week', 'Urgent — 24h'].map((level) => (
                                        <button
                                            key={level}
                                            type="button"
                                            className={`flex-1 py-3 border ${urgency === level ? 'border-[#9866cb] text-[#9866cb] bg-[rgba(152,102,203,0.12)]' : 'border-[rgba(245,240,232,0.06)] text-[rgba(245,240,232,.4)]'} text-[0.68rem] tracking-[.12em] uppercase text-center transition-all duration-300 bg-none font-sans cursor-pointer hover:border-[#9866cb] hover:text-[#9866cb] hover:bg-[rgba(152,102,203,0.12)]`}
                                            onClick={() => setUrgencyLevel(level)}
                                        >
                                            {level === 'No Rush' ? '🟢 No Rush' : level === 'This Week' ? '🟡 This Week' : '🔴 Urgent — 24h'}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-6 relative">
                                <label className="block text-[0.62rem] tracking-[.18em] uppercase text-[#9866cb] mb-2">How Did You Hear About Us?</label>
                                <select className="w-full bg-transparent border-0 border-b border-[rgba(245,240,232,.2)] text-[#f5f0e8] font-sans text-[0.9rem] font-light py-3.5 outline-none transition-colors duration-300 focus:border-[#9866cb] appearance-none">
                                    <option value="" className="bg-[#1a1a1a]">Select...</option>
                                    <option className="bg-[#1a1a1a]">Google Search</option>
                                    <option className="bg-[#1a1a1a]">Instagram</option>
                                    <option className="bg-[#1a1a1a]">LinkedIn</option>
                                    <option className="bg-[#1a1a1a]">Referral from a friend / colleague</option>
                                    <option className="bg-[#1a1a1a]">A client referred me</option>
                                    <option className="bg-[#1a1a1a]">Industry event</option>
                                    <option className="bg-[#1a1a1a]">Other</option>
                                </select>
                                <div className="absolute right-0 top-[calc(50%+4px)] transform -translate-y-1/2 text-[#9866cb] text-sm pointer-events-none">↓</div>
                            </div>

                            <div className="flex gap-3.5 items-start mb-9 p-5 border border-[rgba(245,240,232,0.06)] bg-[rgba(255,255,255,.02)]">
                                <input type="checkbox" className="w-[18px] h-[18px] flex-shrink-0 border border-[rgba(152,102,203,0.25)] bg-transparent appearance-none transition-all duration-300 relative cursor-pointer checked:bg-[#9866cb] checked:border-[#9866cb] checked:after:content-['✓'] checked:after:absolute checked:after:-top-px checked:after:left-0.5 checked:after:text-[0.7rem] checked:after:text-[#0a0a0a]" required id="consent" />
                                <label htmlFor="consent" className="text-[0.78rem] leading-relaxed text-[rgba(245,240,232,.4)] cursor-pointer">
                                    I agree that Buzz Law may use my details to respond to this enquiry. I understand this does not create a lawyer-client relationship. I have read the <a href="#" className="text-[#9866cb] no-underline">Privacy Policy</a> and <a href="#" className="text-[#9866cb] no-underline">Terms of Use</a>.
                                </label>
                            </div>

                            <button type="submit" className="w-full bg-[#9866cb] text-[#0a0a0a] border-none py-4.5 font-sans text-[0.78rem] tracking-[.2em] uppercase font-medium transition-all duration-350 relative overflow-hidden cursor-pointer hover:bg-[#b87eff] hover:-translate-y-0.5 before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-[rgba(255,255,255,.15)] before:skew-x-[-20deg] before:transition-all before:duration-500 hover:before:left-[120%]">
                                Send Message — We'll Respond Within 24h →
                            </button>

                            <div className="mt-4.5 text-[0.72rem] text-[rgba(245,240,232,.25)] text-center leading-relaxed tracking-[.03em]">
                                🔒 &nbsp;Your information is private and confidential &nbsp;·&nbsp; No spam, ever &nbsp;·&nbsp; Bar Council of India Compliant
                            </div>
                        </form>
                    ) : (
                        <div className="text-center py-20 px-10">
                            <div className="w-[72px] h-[72px] border border-[#9866cb] rounded-full flex items-center justify-center text-3xl mx-auto mb-7 animate-[pulseGold_2s_ease-in-out_infinite]">✦</div>
                            <h3 className="font-['Cormorant_Garamond',serif] text-3xl mb-3">Message <em className="italic text-[#9866cb] not-italic">received.</em></h3>
                            <p className="text-[0.88rem] text-[rgba(245,240,232,.5)] leading-relaxed max-w-[360px] mx-auto">Thank you for reaching out. A Buzz Law specialist will review your message and get back to you within one business day.</p>
                            <div className="mt-10 flex flex-col gap-3 text-left max-w-[340px] mx-auto">
                                {[
                                    'We review your message and assign the right specialist to your matter',
                                    'You\'ll receive a confirmation email with next steps within a few hours',
                                    'We\'ll schedule a free 30-minute discovery call at your convenience'
                                ].map((text, idx) => (
                                    <div key={idx} className="flex gap-3.5 items-start p-3.5 border border-[rgba(245,240,232,0.06)]">
                                        <div className="font-['Bebas_Neue',sans-serif] text-xl text-[#9866cb] flex-shrink-0 leading-none">{String(idx + 1).padStart(2, '0')}</div>
                                        <div className="text-[0.8rem] text-[rgba(245,240,232,.55)] leading-relaxed">{text}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-10 text-[0.78rem] text-[#888]">
                                Need to reach us immediately?<br />
                                <a href="tel:+911140000000" className="text-[#9866cb] no-underline">+91 11 4000 0000</a> &nbsp;or&nbsp;
                                <a href="mailto:hello@buzzlaw.in" className="text-[#9866cb] no-underline">hello@buzzlaw.in</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* LOCATIONS STRIP */}
            <div className="border-t border-[rgba(245,240,232,0.06)] px-6 md:px-16 py-[70px]">
    
    <div className="text-[0.68rem] tracking-[.2em] uppercase text-[#9866cb] mb-10 flex items-center gap-3 before:content-[''] before:w-[30px] before:h-px before:bg-[#9866cb]">
        We Serve Clients Across India
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(245,240,232,0.06)]">

        {[
            {
                city: 'New Delhi',
                detail: `Plot No. 25, Fourth Floor, Thana Road,
Near Chhawla Stand, Najafgarh,
New Delhi - 110043`,
                badge: 'Head Office'
            },
            {
                city: 'Gurgaon',
                detail: `412, Emaar Colonnade,
Golf Course Extension Rd, Sec-66,
Gurgaon - 122018`,
                badge: 'Office'
            },
            {
                city: 'Noida',
                detail: `208-209, Tower-E, Alphathum,
Noida - 201305`,
                badge: 'Office'
            },
            {
                city: 'Bhopal',
                detail: `401, B-Block HIG, Vijay Stambh,
Zone-1, MP Nagar,
Bhopal - 462011`,
                badge: 'Office'
            },
            {
                city: 'Indore',
                detail: `205, B-Block, The One, RNT Marg,
Near High Court,
Indore - 452001`,
                badge: 'Office'
            }
        ].map((loc, idx) => (
            <div
                key={idx}
                className="bg-[#0a0a0a] p-8 transition-colors duration-300 hover:bg-[rgba(152,102,203,0.05)]"
            >
                <div className="font-['Cormorant_Garamond',serif] text-xl font-normal mb-1.5">
                    {loc.city}
                </div>

                <div className="text-[0.75rem] text-[#888] leading-relaxed whitespace-pre-line">
                    {loc.detail}
                </div>

                <div className="inline-block mt-3 text-[0.58rem] tracking-[.14em] uppercase border border-[rgba(152,102,203,0.25)] text-[#9866cb] px-2.5 py-1">
                    {loc.badge}
                </div>
            </div>
        ))}
    </div>
</div>

            {/* <style jsx>{`
        @keyframes pulseGold {
          0%, 100% { box-shadow: 0 0 0 0 rgba(152,102,203,.3); }
          50% { box-shadow: 0 0 0 16px rgba(152,102,203,0); }
        }
        .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease, transform 0.8s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .reveal-left { opacity: 0; transform: translateX(-30px); transition: opacity 0.8s ease, transform 0.8s ease; }
        .reveal-left.visible { opacity: 1; transform: translateX(0); }
        .reveal-right { opacity: 0; transform: translateX(30px); transition: opacity 0.8s ease, transform 0.8s ease; }
        .reveal-right.visible { opacity: 1; transform: translateX(0); }
      `}</style> */}
        </div>
    )
}


