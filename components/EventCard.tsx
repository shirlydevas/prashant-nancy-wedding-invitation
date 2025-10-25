'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { LucideIcon } from 'lucide-react'

interface EventCardProps {
  icon: LucideIcon
  title: string
  date: string
  time: string
  venue: string
  description: string
  color: string
  delay: number
}

export default function EventCard({ 
  icon: Icon, 
  title, 
  date, 
  time, 
  venue, 
  description, 
  color,
  delay 
}: EventCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
      className="wedding-card rounded-2xl p-6 md:p-8 mx-4 mb-8 hover:scale-105 transition-transform duration-300"
    >
      <div className="flex items-start gap-4 lg:flex-row flex-col">
        <div className={`p-3 rounded-full ${color} flex-shrink-0`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-elegant text-wedding-navy mb-2">
            {title}
          </h3>
          <p className="text-wedding-navy/70 mb-4 leading-relaxed">
            {description}
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-wedding-gold font-medium">Date:</span>
              <span className="text-wedding-navy">{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-wedding-gold font-medium">Time:</span>
              <span className="text-wedding-navy">{time}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-wedding-gold font-medium">Venue:</span>
              <span className="text-wedding-navy">{venue}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
