'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

export const Modal = ({ isOpen, onClose }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleSubmit = () => {
    alert("Thank you! We'll be in touch within 24 hours to confirm your consultation.")
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[1000] bg-[#0a0a0a]/92 flex items-center justify-center"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose()
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="bg-[#0a0a0a] border border-[rgba(152,102,203,0.25)] p-8 md:p-[60px] max-w-[560px] w-[90%] relative"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 bg-transparent border-none text-[#888] text-xl hover:text-[#9866cb] transition-colors"
            >
              ✕
            </button>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-[30px] h-px bg-[#9866cb]"></div>
              <span className="text-[0.68rem] tracking-[0.22em] uppercase text-[#9866cb]">Free Consultation</span>
            </div>
            <h3 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl mb-2">
              Let's talk about
              <br />
              <em className="italic text-[#9866cb]">your brand.</em>
            </h3>
            <p className="text-sm text-[#888] mb-8 leading-relaxed">
              30 minutes. No obligation. We'll tell you exactly where you stand legally and what you should do first.
            </p>
            <div className="space-y-5">
              <div>
                <label className="block text-[0.68rem] tracking-[0.15em] uppercase text-[#9866cb] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Priya Sharma"
                  className="w-full bg-transparent border border-[rgba(152,102,203,0.25)] text-[#f5f0e8] font-['DM_Sans'] text-sm p-3.5 outline-none focus:border-[#9866cb] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[0.68rem] tracking-[0.15em] uppercase text-[#9866cb] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="priya@yourbrand.com"
                  className="w-full bg-transparent border border-[rgba(152,102,203,0.25)] text-[#f5f0e8] font-['DM_Sans'] text-sm p-3.5 outline-none focus:border-[#9866cb] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[0.68rem] tracking-[0.15em] uppercase text-[#9866cb] mb-2">
                  I am a...
                </label>
                <select className="w-full bg-transparent border border-[rgba(152,102,203,0.25)] text-[#f5f0e8] font-['DM_Sans'] text-sm p-3.5 outline-none focus:border-[#9866cb] transition-colors">
                  <option className="bg-[#1a1a1a]">Fashion Brand / Label</option>
                  <option className="bg-[#1a1a1a]">Influencer / Content Creator</option>
                  <option className="bg-[#1a1a1a]">Media / Production House</option>
                  <option className="bg-[#1a1a1a]">D2C / E-Commerce Brand</option>
                  <option className="bg-[#1a1a1a]">Celebrity / Talent</option>
                  <option className="bg-[#1a1a1a]">Manufacturer / Vendor</option>
                  <option className="bg-[#1a1a1a]">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-[0.68rem] tracking-[0.15em] uppercase text-[#9866cb] mb-2">
                  What do you need help with?
                </label>
                <textarea
                  placeholder="Tell us briefly what you're dealing with..."
                  className="w-full bg-transparent border border-[rgba(152,102,203,0.25)] text-[#f5f0e8] font-['DM_Sans'] text-sm p-3.5 outline-none focus:border-[#9866cb] transition-colors h-[100px] resize-vertical"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-[#9866cb] text-[#0a0a0a] py-4 text-xs tracking-[0.15em] uppercase font-medium hover:bg-[#b87eff] transition-all"
              >
                Book My Free Call →
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}