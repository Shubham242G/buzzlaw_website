'use client'

import Image from 'next/image'
import Link from 'next/link'

interface FooterProps {
  openModal: () => void
}

export const Footer = ({ openModal }: FooterProps) => {
  return (
    <footer className="bg-[#050505] pt-16 pb-8 px-6 md:px-[60px] border-t border-[rgba(152,102,203,0.25)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Column with Logo */}
          <div>
            <Link href="/" className="block mb-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/buzzLaw.png"
                  alt="Buzz Law Logo"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-[rgba(245,240,232,0.4)] leading-relaxed max-w-[260px] mt-4">
              India's first law firm built exclusively for fashion brands, influencers, media companies, and the creator
              economy.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-[#888] text-sm no-underline hover:text-[#9866cb] transition-colors">
                Instagram
              </a>
              <a href="#" className="text-[#888] text-sm no-underline hover:text-[#9866cb] transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-[#888] text-sm no-underline hover:text-[#9866cb] transition-colors">
                Twitter / X
              </a>
            </div>
          </div>

          {/* Practice Areas Column */}
          <div>
            <h5 className="text-[0.68rem] tracking-[0.18em] uppercase text-[#9866cb] mb-5">Practice Areas</h5>
            <ul className="space-y-2.5">
              <li><Link href="/#practices" className="text-[rgba(245,240,232,0.45)] text-sm no-underline hover:text-[#f5f0e8] transition-colors">Brand Protection</Link></li>
              <li><Link href="/#practices" className="text-[rgba(245,240,232,0.45)] text-sm no-underline hover:text-[#f5f0e8] transition-colors">Fashion Startup Law</Link></li>
              <li><Link href="/#practices" className="text-[rgba(245,240,232,0.45)] text-sm no-underline hover:text-[#f5f0e8] transition-colors">Manufacturing Law</Link></li>
              <li><Link href="/#practices" className="text-[rgba(245,240,232,0.45)] text-sm no-underline hover:text-[#f5f0e8] transition-colors">E-Commerce Law</Link></li>
              <li><Link href="/#practices" className="text-[rgba(245,240,232,0.45)] text-sm no-underline hover:text-[#f5f0e8] transition-colors">Influencer Law</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h5 className="text-[0.68rem] tracking-[0.18em] uppercase text-[#9866cb] mb-5">Company</h5>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-[rgba(245,240,232,0.45)] text-sm no-underline hover:text-[#f5f0e8] transition-colors">About Us</Link></li>
              <li><Link href="/about#team" className="text-[rgba(245,240,232,0.45)] text-sm no-underline hover:text-[#f5f0e8] transition-colors">Our Team</Link></li>
              <li><a href="#" className="text-[rgba(245,240,232,0.45)] text-sm no-underline hover:text-[#f5f0e8] transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-[rgba(245,240,232,0.45)] text-sm no-underline hover:text-[#f5f0e8] transition-colors">Blog & Resources</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h5 className="text-[0.68rem] tracking-[0.18em] uppercase text-[#9866cb] mb-5">Contact</h5>
            <ul className="space-y-2.5">
              <li><a href="mailto:hello@buzzlaw.in" className="text-[rgba(245,240,232,0.45)] text-sm no-underline hover:text-[#f5f0e8] transition-colors">hello@buzzlaw.in</a></li>
              <li><span className="text-[rgba(245,240,232,0.45)] text-sm">New Delhi, India</span></li>
              <li>
                <button
                  onClick={openModal}
                  className="text-[rgba(245,240,232,0.45)] text-sm no-underline hover:text-[#f5f0e8] transition-colors bg-transparent w-full text-left cursor-pointer"
                >
                  Book a Consultation
                </button>
              </li>
              <li><a href="#" className="text-[rgba(245,240,232,0.45)] text-sm no-underline hover:text-[#f5f0e8] transition-colors">WhatsApp Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[rgba(152,102,203,0.25)] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[0.68rem] text-[rgba(245,240,232,0.25)] tracking-[0.05em]">
            © 2025 Buzz Law. All rights reserved. | Bar Council of India Compliant
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-[0.68rem] text-[rgba(245,240,232,0.25)] tracking-[0.05em] no-underline hover:text-[#9866cb] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[0.68rem] text-[rgba(245,240,232,0.25)] tracking-[0.05em] no-underline hover:text-[#9866cb] transition-colors">
              Terms of Use
            </a>
            <a href="#" className="text-[0.68rem] text-[rgba(245,240,232,0.25)] tracking-[0.05em] no-underline hover:text-[#9866cb] transition-colors">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}