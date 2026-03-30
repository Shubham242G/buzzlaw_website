'use client'

interface FooterProps {
  openModal: () => void
}

export const Footer = ({ openModal }: FooterProps) => {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 px-6 md:px-[60px] border-t border-[rgba(152,102,203,0.25)]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <a href="#" className="font-['Bebas_Neue'] text-[1.8rem] tracking-[0.12em] text-[#f5f0e8] no-underline block mb-4">
            BUZZ<span className="text-[#9866cb]">LAW</span>
          </a>
          <p className="text-sm text-[rgba(245,240,232,0.4)] leading-relaxed max-w-[260px]">
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
        <div>
          <h5 className="text-[0.68rem] tracking-[0.18em] uppercase text-[#9866cb] mb-5">Practice Areas</h5>
          <a href="#" className="block text-[rgba(245,240,232,0.45)] text-sm no-underline mb-2.5 hover:text-[#f5f0e8] transition-colors">
            Brand Protection
          </a>
          <a href="#" className="block text-[rgba(245,240,232,0.45)] text-sm no-underline mb-2.5 hover:text-[#f5f0e8] transition-colors">
            Fashion Startup Law
          </a>
          <a href="#" className="block text-[rgba(245,240,232,0.45)] text-sm no-underline mb-2.5 hover:text-[#f5f0e8] transition-colors">
            Manufacturing Law
          </a>
          <a href="#" className="block text-[rgba(245,240,232,0.45)] text-sm no-underline mb-2.5 hover:text-[#f5f0e8] transition-colors">
            E-Commerce Law
          </a>
          <a href="#" className="block text-[rgba(245,240,232,0.45)] text-sm no-underline mb-2.5 hover:text-[#f5f0e8] transition-colors">
            Influencer Law
          </a>
        </div>
        <div>
          <h5 className="text-[0.68rem] tracking-[0.18em] uppercase text-[#9866cb] mb-5">Company</h5>
          <a href="#" className="block text-[rgba(245,240,232,0.45)] text-sm no-underline mb-2.5 hover:text-[#f5f0e8] transition-colors">
            About Us
          </a>
          <a href="#" className="block text-[rgba(245,240,232,0.45)] text-sm no-underline mb-2.5 hover:text-[#f5f0e8] transition-colors">
            Our Team
          </a>
          <a href="#" className="block text-[rgba(245,240,232,0.45)] text-sm no-underline mb-2.5 hover:text-[#f5f0e8] transition-colors">
            Case Studies
          </a>
          <a href="#" className="block text-[rgba(245,240,232,0.45)] text-sm no-underline mb-2.5 hover:text-[#f5f0e8] transition-colors">
            Blog & Resources
          </a>
        </div>
        <div>
          <h5 className="text-[0.68rem] tracking-[0.18em] uppercase text-[#9866cb] mb-5">Contact</h5>
          <a href="mailto:hello@buzzlaw.in" className="block text-[rgba(245,240,232,0.45)] text-sm no-underline mb-2.5 hover:text-[#f5f0e8] transition-colors">
            hello@buzzlaw.in
          </a>
          <a href="#" className="block text-[rgba(245,240,232,0.45)] text-sm no-underline mb-2.5 hover:text-[#f5f0e8] transition-colors">
            New Delhi, India
          </a>
          <button
            onClick={openModal}
            className="block text-[rgba(245,240,232,0.45)] text-sm no-underline mb-2.5 hover:text-[#f5f0e8] transition-colors bg-transparent w-full text-left"
          >
            Book a Consultation
          </button>
          <a href="#" className="block text-[rgba(245,240,232,0.45)] text-sm no-underline mb-2.5 hover:text-[#f5f0e8] transition-colors">
            WhatsApp Us
          </a>
        </div>
      </div>
      <div className="border-t border-[rgba(152,102,203,0.25)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xs text-[rgba(245,240,232,0.25)] tracking-[0.05em]">
          © 2025 Buzz Law. All rights reserved. | Bar Council of India Compliant
        </div>
        <div className="text-xs text-[rgba(245,240,232,0.25)] tracking-[0.05em]">
          Privacy Policy · Terms of Use · Disclaimer
        </div>
      </div>
    </footer>
  )
}