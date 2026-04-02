'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react' // Install: npm install lucide-react

interface NavbarProps {
  openModal: () => void
}

export const Navbar = ({ openModal }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-[60px] transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0a0a]/98 py-4 md:py-[18px]'
            : 'bg-gradient-to-b from-[#0a0a0a]/95 to-transparent py-6 md:py-7'
        }`}
      >
        {/* Mobile Menu Button - Left */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#f5f0e8] z-[101]"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Left Section - Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 list-none">
             <li>
              <Link 
                href="/components/sections/about-Us" 
                className="text-[#f5f0e8] text-xs tracking-[0.12em] uppercase opacity-70 hover:opacity-100 hover:text-[#9866cb] transition-opacity"
              >
                About us
              </Link>
            </li>
            <li>
              <Link 
                href="/components/sections/practice-areas" 
                className="text-[#f5f0e8] text-xs tracking-[0.12em] uppercase opacity-70 hover:opacity-100 hover:text-[#9866cb] transition-opacity"
              >
                Practice Areas
              </Link>
            </li>
            <li>
              <Link 
                href="/components/sections/how-We-Work" 
                className="text-[#f5f0e8] text-xs tracking-[0.12em] uppercase opacity-70 hover:opacity-100 hover:text-[#9866cb] transition-opacity"
              >
                How we work
              </Link>
            </li>
            <li>
              <Link 
                href="/components/sections/contact-Us" 
                className="text-[#f5f0e8] text-xs tracking-[0.12em] uppercase opacity-70 hover:opacity-100 hover:text-[#9866cb] transition-opacity"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Center Section - Logo */}
         
      <div className="absolute left-1/2 transform -translate-x-1/2">
  <Link href="/">
    <Image
      src="/assets/buzzLaw.png"
      alt="Buzz Law Logo"
      width={200}
      height={56}
      className="cursor-pointer hover:scale-105 transition-transform duration-300"
      style={{ objectFit: 'contain' }}
    />
  </Link>
</div>

        {/* Right Section - Consult Button */}
        <div>
          <button
            onClick={openModal}
            className="border border-[#9866cb] text-[#9866cb] text-xs tracking-[0.12em] uppercase py-2.5 px-4 md:px-6 transition-all hover:bg-[#9866cb] hover:text-[#0a0a0a] bg-transparent cursor-pointer"
          >
            Book a Consult
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="fixed top-0 left-0 bottom-0 w-64 bg-[#0a0a0a]/98 backdrop-blur-lg z-[99] pt-24 px-6 md:hidden"
        >
          <ul className="flex flex-col gap-6">
            <li>
              <Link 
                href="/components/sections/about-Us" 
                className="text-[#f5f0e8] text-sm tracking-[0.12em] uppercase hover:text-[#9866cb] transition-colors block"
                onClick={() => setMobileMenuOpen(false)}
              >
                About us
              </Link>
            </li>
            <li>
              <Link 
                href="/components/sections/practice-areas" 
                className="text-[#f5f0e8] text-sm tracking-[0.12em] uppercase hover:text-[#9866cb] transition-colors block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Practice Areas
              </Link>
            </li>
            <li>
               <Link 
                href="/components/sections/how-We-Work" 
                className="text-[#f5f0e8] text-sm tracking-[0.12em] uppercase hover:text-[#9866cb] transition-colors block"
                onClick={() => setMobileMenuOpen(false)}
              >
                How We Work
              </Link>
            </li>
            <li>
              <Link 
                href="/components/sections/contact-Us" 
                className="text-[#f5f0e8] text-xs tracking-[0.12em] uppercase opacity-70 hover:opacity-100 hover:text-[#9866cb] transition-opacity"
              >
                Contact Us
              </Link>
            </li>
            <li className="pt-4">
              <button
                onClick={() => {
                  openModal()
                  setMobileMenuOpen(false)
                }}
                className="border border-[#9866cb] text-[#9866cb] text-xs tracking-[0.12em] uppercase py-2.5 px-6 transition-all hover:bg-[#9866cb] hover:text-[#0a0a0a] w-full"
              >
                Book a Consult
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </>
  )
}