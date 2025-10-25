'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Church, Sparkles, Flower } from 'lucide-react'
import { useMusic } from '@/contexts/MusicContext'

interface ElegantSplashScreenProps {
  onComplete: () => void
}

export default function ElegantSplashScreen({ onComplete }: ElegantSplashScreenProps) {
  const [currentPhase, setCurrentPhase] = useState(0) // 0: Logo, 1: Couple, 2: Transition, 3: Content
  const [showTransition, setShowTransition] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const { startMusic } = useMusic()

  useEffect(() => {
    // Start music immediately when splash screen begins
    startMusic()

    const timers = [
      // Phase 0: Logo appears (3 seconds)
      setTimeout(() => setCurrentPhase(1), 3000),
      // Phase 1: Couple appears (4 seconds)
      setTimeout(() => setCurrentPhase(2), 7000),
      // Phase 2: Transition starts (1 second)
      setTimeout(() => setShowTransition(true), 8000),
      // Phase 3: Content shows (1.5 seconds)
      setTimeout(() => setShowContent(true), 9000),
      // Complete (2 seconds) - longer delay for smooth transition
      setTimeout(() => onComplete(), 10500)
    ]

    return () => timers.forEach(clearTimeout)
  }, [onComplete, startMusic])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-50 bg-gradient-to-br from-wedding-cream via-wedding-ivory to-wedding-cream overflow-hidden"
      >
        {/* Background Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0],
                x: [0, Math.random() * 400 - 200],
                y: [0, Math.random() * 400 - 200]
              }}
              transition={{
                duration: 6,
                delay: Math.random() * 4,
                repeat: Infinity,
                repeatDelay: Math.random() * 5
              }}
              className="absolute bg-wedding-gold rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`
              }}
            />
          ))}
        </div>

        {/* Phase 0: Logo */}
        <AnimatePresence mode="wait">
          {currentPhase === 0 && (
            <motion.div
              key="logo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative">
                {/* Logo Image */}
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="relative"
                >
                  <img
                    src="/images/initials-logo.avif"
                    alt="Wedding Logo"
                    className="w-64 h-64 md:w-80 md:h-80 object-contain"
                  />
                  
                  {/* Glowing effect around logo */}
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 bg-wedding-gold/20 rounded-full blur-xl -z-10"
                  />
                </motion.div>

                {/* Welcome text */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="text-center mt-8"
                >
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <h1 className="text-2xl md:text-3xl font-script text-wedding-navy">
                      Wedding Invitation
                    </h1>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                  <Heart className="w-6 h-6 text-wedding-gold" />
                    <span className="text-lg font-elegant text-wedding-navy/80">
                      Prashant & Nancy
                    </span>
                    <Heart className="w-6 h-6 text-wedding-gold" />
                  </div>
                </motion.div>

                {/* Floating hearts around logo */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 2 + i * 0.2 }}
                    className="absolute"
                    style={{
                      left: `${20 + Math.cos(i * 60 * Math.PI / 180) * 120}%`,
                      top: `${20 + Math.sin(i * 60 * Math.PI / 180) * 120}%`
                    }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                    >
                      <Heart className="w-4 h-4 text-wedding-rose/60" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Phase 1: Couple Image */}
        <AnimatePresence mode="wait">
          {currentPhase === 1 && (
            <motion.div
              key="couple"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative">
                {/* Couple Image */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 2, delay: 0.5 }}
                  className="relative"
                >
                  <img
                    src="/images/couple-image.jpg"
                    alt="Wedding Couple"
                    className="w-80 h-96 md:w-96 md:h-[28rem] object-cover rounded-3xl shadow-2xl border-4 border-wedding-gold/30"
                  />
                  
                  {/* Elegant frame overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-transparent to-wedding-gold/10" />
                  
                  {/* Glowing effect */}
                  <motion.div
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-0 bg-wedding-gold/20 rounded-3xl blur-xl -z-10"
                  />
                </motion.div>

                {/* Romantic text overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, delay: 1.5 }}
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center"
                >
                  <div className="bg-wedding-ivory/90 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-wedding-gold/20">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Heart className="w-5 h-5 text-wedding-gold" />
                      <span className="text-lg font-script text-wedding-navy">
                        Together Forever
                      </span>
                      <Heart className="w-5 h-5 text-wedding-gold" />
                    </div>
                    <p className="text-sm text-wedding-navy/70 font-elegant">
                      Join us in celebrating our love
                    </p>
                  </div>
                </motion.div>

                {/* Floating elements around couple */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 2 + i * 0.15 }}
                    className="absolute"
                    style={{
                      left: `${15 + Math.cos(i * 45 * Math.PI / 180) * 140}%`,
                      top: `${15 + Math.sin(i * 45 * Math.PI / 180) * 140}%`
                    }}
                  >
                    <motion.div
                      animate={{ 
                        rotate: 360,
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                        scale: { duration: 3, repeat: Infinity }
                      }}
                    >
                      <Heart className="w-5 h-5 text-wedding-gold/70" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Phase 2: Elegant Transition */}
        <AnimatePresence>
          {showTransition && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 z-20"
            >
              {/* Golden Wave Transition */}
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: '-100%' }}
                transition={{ duration: 2, ease: 'easeInOut' }}
                className="absolute inset-0 bg-gradient-to-b from-wedding-gold/80 via-wedding-gold/60 to-wedding-gold/80"
                style={{
                  background: 'linear-gradient(180deg, rgba(212, 175, 55, 0.9) 0%, rgba(212, 175, 55, 0.7) 50%, rgba(212, 175, 55, 0.9) 100%)'
                }}
              >
                {/* Sparkle effects during transition */}
                <div className="absolute inset-0">
                  {[...Array(30)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        x: [0, Math.random() * 200 - 100],
                        y: [0, Math.random() * 200 - 100]
                      }}
                      transition={{
                        duration: 1,
                        delay: Math.random() * 0.5,
                        repeat: Infinity,
                        repeatDelay: 0.5
                      }}
                      className="absolute"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                      }}
                    >
                      <Sparkles className="w-4 h-4 text-white" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Elegant fade overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute inset-0 bg-gradient-to-br from-wedding-cream/20 via-wedding-ivory/30 to-wedding-cream/20"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating golden orbs */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`orb-${i}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
                y: [0, -300, -600]
              }}
              transition={{
                duration: 10,
                delay: i * 0.5,
                repeat: Infinity,
                repeatDelay: 3
              }}
              className="absolute w-6 h-6 bg-wedding-gold/60 rounded-full blur-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 50 + 50}%`
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
