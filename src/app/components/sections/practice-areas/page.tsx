'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Navbar } from '../../layout/Navbar'
import { Footer } from '../../layout/Footer'
import { CustomCursor } from '../../layout/CustomCursor' 
import { Modal } from '../../ui/Modal'
import { FadeInSection } from '../../ui/FadeInSection'

const practices = [
  {
    id: 'brand-protection',
    num: '01',
    icon: '🛡️',
    title: 'Brand Protection',
    tagline: 'Own your identity. Defend it fiercely.',
    description: 'Your brand is your most valuable asset. We make sure no one can copy it, steal it, or profit from it without your permission.',
    services: ['Trademark Registration', 'Design Registration', 'Copyright Protection', 'Trade Dress Protection', 'Anti-Counterfeiting'],
    fullDescription: 'In today\'s competitive marketplace, your brand is your most valuable asset. At Buzz Law, we provide comprehensive brand protection services that ensure your intellectual property remains exclusively yours. From the moment you conceive your brand name to enforcing your rights against infringers, we stand guard over everything that makes your brand unique. Our team handles trademark searches, registrations, oppositions, cancellations, and infringement actions across India. We also specialize in design protection for fashion products, copyright registration for creative works, and aggressive anti-counterfeiting strategies that include raid actions, seizures, and criminal complaints against counterfeiters.',
    keyFeatures: [
      'Comprehensive trademark portfolio management',
      'Design and patent protection for unique products',
      'Copyright registration for creative works',
      'Anti-counterfeiting raids and enforcement',
      'Domain name disputes and cybersquatting',
      'Trade secret protection and non-disclosure agreements',
      'Brand monitoring and watching services',
      'Customs recordal for border protection'
    ],
    whyChoose: 'We understand that for fashion and creative businesses, your brand identity is everything. Our specialized approach means we don\'t just file trademarks—we build comprehensive brand protection strategies that evolve with your business. We\'ve helped over 500 brands secure their intellectual property and have successfully enforced rights against counterfeiters across India.'
  },
  {
    id: 'fashion-startup-law',
    num: '02',
    icon: '✂️',
    title: 'Fashion Startup Law',
    tagline: 'Built right from day one.',
    description: 'Launching a fashion brand involves far more legal complexity than most founders realise. We help you structure smartly, protect founder rights, and position your label for investment.',
    services: ['Label Incorporation', 'Founder Agreements', 'Investment & Funding', 'Brand Structuring'],
    fullDescription: 'Starting a fashion label is exciting, but the legal complexities can be overwhelming. We guide fashion entrepreneurs through every stage of their journey, from choosing the right business structure to preparing for investor funding. Our startup law practice focuses on building solid foundations that prevent disputes and position your brand for scalable growth. We handle incorporation, founder agreements that clearly define ownership and roles, employment contracts for your team, and investment documentation when you\'re ready to raise capital. We also advise on regulatory compliance specific to the fashion industry, including labeling requirements, consumer protection laws, and e-commerce regulations.',
    keyFeatures: [
      'Business structure selection (LLP, Pvt Ltd, etc.)',
      'Founder and partnership agreements',
      'Employment and contractor contracts',
      'Investment and funding documentation',
      'Regulatory compliance advisory',
      'Licensing and distribution agreements',
      'Exit strategy and succession planning',
      'Vendor and supplier agreements'
    ],
    whyChoose: 'We\'ve helped launch over 100 fashion labels in India. Our experience with fashion startups means we understand the unique challenges you face—from protecting your designs to negotiating with manufacturers. We don\'t just give you legal documents; we provide strategic advice that helps you build a sustainable, scalable business.'
  },
  {
    id: 'manufacturing-supply-chain',
    num: '03',
    icon: '🏭',
    title: 'Manufacturing & Supply Chain',
    tagline: 'Contracts that protect your production.',
    description: 'Bad vendor contracts can destroy a season. We draft and review manufacturing agreements, vendor terms, and compliance frameworks.',
    services: ['Manufacturer Agreements', 'Vendor Contracts', 'Import/Export Compliance', 'Sustainability Compliance'],
    fullDescription: 'Your supply chain is the backbone of your business, and weak contracts can bring everything crashing down. We help fashion brands and manufacturers build robust legal frameworks for their production processes. Our services include drafting and reviewing manufacturing agreements that clearly define quality standards, delivery timelines, payment terms, and intellectual property ownership. We also advise on compliance with labor laws, environmental regulations, and sustainability requirements that are increasingly important in the fashion industry. For brands working with international suppliers, we handle import/export compliance, customs documentation, and cross-border dispute resolution.',
    keyFeatures: [
      'Manufacturing and production agreements',
      'Quality control and specification contracts',
      'Logistics and warehousing agreements',
      'Raw material supply contracts',
      'Compliance audits and advisory',
      'Sustainability and ethical sourcing documentation',
      'Import/export compliance',
      'Dispute resolution and arbitration'
    ],
    whyChoose: 'We understand the fashion supply chain intimately—from textile sourcing to finished goods delivery. Our contracts are designed to protect you at every stage of production, ensuring that your products meet quality standards, your intellectual property stays protected, and your business remains compliant with all applicable regulations.'
  },
  {
    id: 'retail-ecommerce-law',
    num: '04',
    icon: '🛍️',
    title: 'Retail & E-Commerce Law',
    tagline: 'Sell everywhere. Comply everywhere.',
    description: "Whether you're on Myntra, launching your own D2C store, or signing a marketplace agreement — we handle the compliance.",
    services: ['Marketplace Agreements', 'Terms & Privacy Policies', 'Consumer Law Compliance', 'Online Marketplace Disputes'],
    fullDescription: 'The retail landscape is rapidly evolving, with brands selling through multiple channels—physical stores, online marketplaces, and direct-to-consumer websites. Each channel comes with its own legal requirements. We help fashion brands navigate this complex terrain by drafting marketplace agreements that protect your interests, creating comprehensive terms of service and privacy policies for your website, and ensuring compliance with consumer protection laws. We also handle disputes with marketplaces, manage product liability issues, and advise on cross-border e-commerce regulations for brands selling internationally.',
    keyFeatures: [
      'Marketplace seller agreements (Myntra, Amazon, etc.)',
      'Website terms of service and privacy policies',
      'Consumer protection compliance',
      'Product liability and warranty documentation',
      'Return and refund policies',
      'Cross-border e-commerce advisory',
      'Marketplace dispute resolution',
      'Payment gateway agreements'
    ],
    whyChoose: 'We\'ve negotiated with all major Indian and international marketplaces and understand their standard terms inside out. We know where they try to shift risk to sellers and how to negotiate better terms. Our experience with both established brands and D2C startups means we can provide practical advice that balances legal protection with business needs.'
  },
  {
    id: 'brand-collaborations',
    num: '05',
    icon: '🤝',
    title: 'Brand Collaborations',
    tagline: 'Collab confidently. Protect your share.',
    description: 'Designer drops, celebrity lines, licensing deals — collaborations create immense value but carry serious legal risk if structured badly.',
    services: ['Designer Collaborations', 'Celebrity Collaborations', 'Licensing Agreements', 'Merchandising Agreements'],
    fullDescription: 'Collaborations are powerful tools for brand growth, but they require careful legal structuring to protect all parties involved. Whether you\'re a designer collaborating with a major retailer, a celebrity launching a product line, or two brands creating a limited edition collection, we ensure your collaboration agreements protect your intellectual property, clearly define revenue sharing, and establish ownership of new creative works. We handle everything from initial term sheets to final collaboration agreements, including merchandising deals, licensing arrangements, and influencer partnerships.',
    keyFeatures: [
      'Collaboration and co-branding agreements',
      'Licensing and sub-licensing contracts',
      'Celebrity endorsement agreements',
      'Designer collaboration contracts',
      'Revenue sharing and royalty structures',
      'Intellectual property ownership terms',
      'Exclusivity and territory provisions',
      'Termination and dispute resolution'
    ],
    whyChoose: 'We\'ve structured some of India\'s most successful fashion collaborations. Our deep understanding of the creative industry means we know what matters most—clear IP ownership, fair revenue splits, and exit strategies that protect your brand. We ensure your collaborations create value without creating legal headaches.'
  },
  {
    id: 'fashion-litigation',
    num: '06',
    icon: '⚖️',
    title: 'Fashion Litigation',
    tagline: "When it's time to fight — we fight.",
    description: 'Design piracy, counterfeit goods, contract breaches — when someone crosses a line, you need lawyers who move fast and hit hard.',
    services: ['Trademark Infringement', 'Design Piracy', 'Counterfeit Actions', 'Contract Disputes'],
    fullDescription: 'When disputes arise, you need experienced litigators who understand the fashion industry and can move quickly to protect your interests. Our litigation practice handles everything from urgent interim injunctions against counterfeiters to complex contract disputes and intellectual property infringement cases. We have extensive experience before Indian courts, the Intellectual Property Appellate Board, and in arbitration proceedings. Our approach combines aggressive enforcement with strategic thinking, seeking the most efficient resolution while protecting your brand reputation.',
    keyFeatures: [
      'Trademark and copyright infringement actions',
      'Design piracy litigation',
      'Counterfeit enforcement and raid actions',
      'Contract breach disputes',
      'Anton Piller orders and interim injunctions',
      'Arbitration and mediation',
      'Regulatory proceedings',
      'Cross-border enforcement'
    ],
    whyChoose: 'We don\'t just litigate—we strategize. Our team has successfully obtained injunctions against major counterfeit operations, recovered damages for contract breaches, and defended brands against unfounded claims. We understand that litigation isn\'t just about winning in court; it\'s about protecting your brand reputation and business continuity.'
  },
  {
    id: 'influencer-law',
    num: '07',
    icon: '📱',
    title: 'Influencer Law',
    tagline: 'Your content. Your terms. Your protection.',
    description: 'Brand deals, ambassador contracts, ASCI compliance, copyright disputes — influencer law is a minefield.',
    services: ['Brand Collaboration Contracts', 'Ambassador Agreements', 'ASCI Compliance', 'Revenue Sharing', 'Content IP Rights', 'Influencer Disputes'],
    fullDescription: 'The influencer economy has created new opportunities and new legal challenges. Whether you\'re a content creator or a brand working with influencers, we help you navigate this complex landscape. For influencers, we review and negotiate brand deals to ensure fair compensation, protect your content rights, and ensure compliance with ASCI guidelines. For brands, we draft influencer agreements that clearly define deliverables, usage rights, and disclosure requirements. We also handle disputes over content ownership, payment issues, and reputational matters.',
    keyFeatures: [
      'Influencer and ambassador agreements',
      'Brand collaboration contracts',
      'ASCI compliance advisory',
      'Content ownership and licensing',
      'Revenue sharing structures',
      'Exclusivity and non-compete clauses',
      'Disclosure and transparency requirements',
      'Influencer dispute resolution'
    ],
    whyChoose: 'We\'re at the forefront of influencer law in India, having represented both top creators and leading brands. We understand the unique dynamics of influencer marketing—the speed of deals, the importance of content rights, and the regulatory landscape governed by ASCI guidelines. Our contracts protect your interests while being practical and enforceable.'
  },
  {
    id: 'media-entertainment-law',
    num: '08',
    icon: '🎬',
    title: 'Media & Entertainment Law',
    tagline: 'From set to screen. Legally protected.',
    description: 'Production agreements, OTT compliance, defamation cases, celebrity image rights — we advise content creators and production houses.',
    services: ['Production Agreements', 'OTT Compliance', 'Defamation & Reputation', 'Celebrity Rights', 'Content Takedowns'],
    fullDescription: 'The media and entertainment industry presents unique legal challenges, from protecting creative works to managing talent relationships. We advise production houses, OTT platforms, content creators, and talent across all aspects of media law. Our services include drafting production agreements that cover everything from development to distribution, advising on OTT platform compliance with regulatory requirements, protecting celebrity image rights, handling defamation claims, and managing content takedown requests. We also advise on music licensing, synchronization rights, and digital distribution agreements.',
    keyFeatures: [
      'Production and development agreements',
      'Talent and crew contracts',
      'OTT platform compliance',
      'Celebrity and personality rights',
      'Defamation and reputation management',
      'Content licensing and distribution',
      'Music and synchronization rights',
      'Content takedown and notice procedures'
    ],
    whyChoose: 'Our team includes lawyers with deep experience in the media industry. We understand the creative process and the business realities of content production. Whether you\'re an independent creator or a major production house, we provide practical legal advice that protects your work while enabling your creativity.'
  },
  {
    id: 'creator-economy-law',
    num: '09',
    icon: '🎙️',
    title: 'Creator Economy Law',
    tagline: 'New economy. Real legal needs.',
    description: 'YouTubers, podcasters, affiliate marketers, and digital creators face unique legal challenges.',
    services: ['Creator Contracts', 'Podcast Agreements', 'Affiliate Agreements', 'Monetization Structures', 'Platform Agreements'],
    fullDescription: 'The creator economy has exploded, with millions of people building careers through digital content. At Buzz Law, we specialize in helping creators protect their work, monetize their content, and build sustainable businesses. We advise YouTubers, podcasters, affiliate marketers, and other digital creators on all aspects of their business—from entity formation and tax planning to brand deals and platform agreements. We help you understand platform terms, negotiate with brands, protect your content rights, and structure your income streams. We also handle disputes over content ownership, copyright strikes, and unfair platform practices.',
    keyFeatures: [
      'Creator business structuring',
      'Platform agreement review and negotiation',
      'Brand deal and sponsorship contracts',
      'Affiliate marketing agreements',
      'Podcast production and distribution contracts',
      'Content licensing and syndication',
      'Copyright management and protection',
      'Monetization strategy advisory'
    ],
    whyChoose: 'We understand the creator economy because we\'ve built our practice around it. We know the platforms, the contracts, and the challenges that creators face. Our approach is practical and business-focused—we help you build a legal foundation that supports your creative work rather than hindering it.'
  }
]

export default function PracticeAreasPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <CustomCursor />
      <Navbar openModal={openModal} />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-6 md:px-[60px] mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-10 h-px bg-[#9866cb]" />
              <span className="text-[0.72rem] tracking-[0.2em] uppercase text-[#9866cb]">
                Our Expertise
              </span>
            </div>
            <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] mb-6">
              Practice Areas
            </h1>
            <p className="text-lg text-[rgba(245,240,232,0.7)] max-w-2xl mx-auto leading-relaxed">
              Nine specialized practice areas built exclusively for the creative economy. 
              Each practice is designed to address the unique legal needs of fashion brands, 
              influencers, creators, and media companies.
            </p>
          </div>
        </section>

        {/* Practice Areas Grid */}
        <section className="px-6 md:px-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {practices.map((practice, idx) => (
              <FadeInSection key={idx} delay={idx * 0.05}>
                <Link href={`practice-areas/${practice.id}`}>
                  <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(152,102,203,0.25)] p-8 hover:border-[#9866cb] transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                    <div className="text-4xl mb-4">{practice.icon}</div>
                    <div className="text-sm text-[#9866cb] font-mono mb-2">{practice.num}</div>
                    <h2 className="font-['Cormorant_Garamond'] text-2xl mb-3 text-[#f5f0e8] group-hover:text-[#9866cb] transition-colors">
                      {practice.title}
                    </h2>
                    <p className="text-[0.72rem] text-[#9866cb] italic mb-4">{practice.tagline}</p>
                    <p className="text-sm text-[rgba(245,240,232,0.6)] leading-relaxed mb-6">
                      {practice.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {practice.services.slice(0, 3).map((service, i) => (
                        <span key={i} className="text-xs px-3 py-1 border border-[rgba(152,102,203,0.25)] text-[rgba(245,240,232,0.5)]">
                          {service}
                        </span>
                      ))}
                      {practice.services.length > 3 && (
                        <span className="text-xs px-3 py-1 text-[#9866cb]">
                          +{practice.services.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#9866cb] group-hover:gap-3 transition-all">
                      <span>Learn more</span>
                      <span>→</span>
                    </div>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 md:px-[60px] py-20 mt-20">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-[rgba(152,102,203,0.1)] to-transparent p-12 rounded-2xl border border-[rgba(152,102,203,0.25)]">
            <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl mb-4">
              Need a custom legal solution?
            </h2>
            <p className="text-[rgba(245,240,232,0.7)] mb-8 max-w-2xl mx-auto">
              Every business is unique. If you don't see exactly what you're looking for, 
              let's talk. We'll create a tailored legal strategy for your specific needs.
            </p>
            <button
              onClick={openModal}
              className="bg-[#9866cb] text-[#0a0a0a] px-8 py-3 text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#b87eff] transition-all"
            >
              Book a Free Consultation →
            </button>
          </div>
        </section>
      </main>

      <Footer openModal={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}