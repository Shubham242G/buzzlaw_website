// app/client-layout.tsx
'use client'

import { useState, useEffect } from 'react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Modal } from './components/ui/Modal'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <Navbar openModal={openModal} />
      <main className="relative">
        {children}
      </main>
      <Footer openModal={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}