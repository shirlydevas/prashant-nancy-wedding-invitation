'use client'

import { createContext, useContext, useRef, useState, useEffect, ReactNode } from 'react'

interface MusicContextType {
  isPlaying: boolean
  isMuted: boolean
  showPlayer: boolean
  togglePlay: () => void
  toggleMute: () => void
  startMusic: () => void
  stopMusic: () => void
}

const MusicContext = createContext<MusicContextType | undefined>(undefined)

export function MusicProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showPlayer, setShowPlayer] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Auto-show player after 3 seconds
    const timer = setTimeout(() => {
      setShowPlayer(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const startMusic = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.play().catch(console.error)
      setIsPlaying(true)
    }
  }

  const stopMusic = () => {
    if (audioRef.current && isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play().catch(console.error)
        setIsPlaying(true)
      }
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <MusicContext.Provider value={{
      isPlaying,
      isMuted,
      showPlayer,
      togglePlay,
      toggleMute,
      startMusic,
      stopMusic
    }}>
      {children}
      
      {/* Background Music */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onEnded={() => setIsPlaying(false)}
      >
        <source src="/audio/Harmony-of-the-Earth-chosic.com_.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </MusicContext.Provider>
  )
}

export function useMusic() {
  const context = useContext(MusicContext)
  if (context === undefined) {
    throw new Error('useMusic must be used within a MusicProvider')
  }
  return context
}
