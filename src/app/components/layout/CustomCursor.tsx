'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show custom cursor on client side
    setIsVisible(true)

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as Element
      if (target && target.closest && target.closest('a, button, [onclick], .cursor-pointer')) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as Element
      if (target && target.closest && target.closest('a, button, [onclick], .cursor-pointer')) {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', updatePosition)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [])

  // Don't render on server side or if not visible
  if (!isVisible) return null

  return (
    <>
      <motion.div
        className="fixed w-[10px] h-[10px] rounded-full pointer-events-none z-[9999]"
        style={{ backgroundColor: '#9866cb' }}
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
      />
      <motion.div
        className="fixed w-[36px] h-[36px] rounded-full pointer-events-none z-[9998] opacity-60"
        style={{ border: '1px solid #9866cb' }}
        animate={{
          x: position.x - 18,
          y: position.y - 18,
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
    </>
  )
}