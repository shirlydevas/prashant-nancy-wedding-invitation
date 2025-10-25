'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ElegantSplashScreen from '@/components/ElegantSplashScreen'
import ParticleBackground from '@/components/ParticleBackground'
import HeroSection from '@/components/HeroSection'
import EventsSection from '@/components/EventsSection'
import Footer from '@/components/Footer'
import MusicPlayer from '@/components/MusicPlayer'
import { MusicProvider } from '@/contexts/MusicContext'

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)
  const [showMainContent, setShowMainContent] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleSplashComplete = () => {
    setIsTransitioning(true)
    setShowSplash(false)
    // Immediate transition to prevent blank screen
    setShowMainContent(true)
  }

  return (
    <MusicProvider>
      {/* Music Player - Available throughout entire experience */}
      <MusicPlayer />

      {/* Splash Screen */}
      <AnimatePresence mode="wait">
        {showSplash && (
          <ElegantSplashScreen onComplete={handleSplashComplete} />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        {showMainContent && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: 'easeInOut'
            }}
            className="relative min-h-screen"
          >
            <ParticleBackground />
            
            <HeroSection />
            
            <EventsSection />
            
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </MusicProvider>
  )
}
