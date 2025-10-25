'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { useMusic } from '@/contexts/MusicContext'

export default function MusicPlayer() {
  const { isPlaying, isMuted, showPlayer, togglePlay, toggleMute } = useMusic()

  return (
    <AnimatePresence>
      {showPlayer && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-6 right-8 z-50"
        >
          <div className="wedding-card rounded-2xl p-4 shadow-2xl">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="p-2 rounded-full bg-wedding-gold text-wedding-navy hover:bg-wedding-gold/80 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4" />
                )}
              </button>
              
              <button
                onClick={toggleMute}
                className="p-2 rounded-full bg-wedding-navy/10 text-wedding-navy hover:bg-wedding-navy/20 transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
