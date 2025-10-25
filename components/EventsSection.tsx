'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Sun, 
  Music, 
  Heart, 
  Church, 
  UtensilsCrossed,
  Calendar,
  Clock,
  MapPin
} from 'lucide-react'
import EventCard from './EventCard'

const events = [
  {
    icon: Sun,
    title: 'Haldi Ceremony',
    date: 'Saturday, November 22nd, 2025',
    time: '10:00 AM - 12:00 PM',
    venue: 'Garden Villa, 456 Garden Street',
    description: 'Join us for the traditional Haldi ceremony where we apply turmeric paste for good luck and blessings.',
    color: 'bg-yellow-500',
    delay: 0.1
  },
  {
    icon: Music,
    title: 'Sangeet',
    date: 'Saturday, November 22nd, 2025',
    time: '7:00 PM - 11:00 PM',
    venue: 'Grand Ballroom, 789 Celebration Ave',
    description: 'An evening of music, dance, and celebration with family and friends. Come ready to dance!',
    color: 'bg-purple-500',
    delay: 0.2
  },
  {
    icon: Heart,
    title: 'Engagement Ceremony',
    date: 'Sunday, November 23rd, 2025',
    time: '6:00 PM - 9:00 PM',
    venue: 'St. Anthony\'s Church, Tembipada, Mumbai',
    description: 'A beautiful ceremony to celebrate our engagement with close family and friends.',
    color: 'bg-pink-500',
    delay: 0.3
  },
  {
    icon: Church,
    title: 'Wedding Mass',
    date: 'Monday, November 24th, 2025',
    time: '2:00 PM - 3:30 PM',
    venue: 'Our Lady of Lourdes Church, Orlem, Malad West, Mumbai',
    description: 'The sacred ceremony where we will exchange our vows in the presence of God and our loved ones.',
    color: 'bg-blue-500',
    delay: 0.4
  },
  {
    icon: UtensilsCrossed,
    title: 'Reception',
    date: 'Monday, November 24th, 2025',
    time: '7:00 PM - 11:00 PM',
    venue: 'Coco island, Manori, Malad',
    description: 'Join us for dinner, dancing, and celebration as we begin our new journey together.',
    color: 'bg-green-500',
    delay: 0.5
  }
]

export default function EventsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 px-4 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-wedding-gold rounded-full" />
        <div className="absolute top-32 right-20 w-16 h-16 border border-wedding-gold rounded-full" />
        <div className="absolute bottom-20 left-32 w-24 h-24 border border-wedding-gold rounded-full" />
        <div className="absolute bottom-32 right-10 w-18 h-18 border border-wedding-gold rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-script text-wedding-navy mb-4">
            Wedding Events
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-wedding-gold flex-1 max-w-32" />
            <Heart className="w-8 h-8 text-wedding-gold" />
            <div className="h-px bg-wedding-gold flex-1 max-w-32" />
          </div>
          <p className="text-lg text-wedding-navy/70 max-w-2xl mx-auto">
            Join us in celebrating our special moments leading up to our wedding day. 
            Each event is a cherished memory we'd love to share with you.
          </p>
        </motion.div>

        {/* Events Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-wedding-gold/30 transform md:-translate-x-0.5" />
          
          {/* Events */}
          <div className="space-y-8">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-wedding-gold rounded-full transform md:-translate-x-2 z-10" />
                
                {/* Event Card */}
                <div className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <EventCard {...event} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RSVP Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="wedding-card rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-script text-wedding-navy mb-4">
              We Can't Wait to Celebrate With You!
            </h3>
            <p className="text-lg text-wedding-navy/70 mb-8 max-w-2xl mx-auto">
              Your presence would make our special day even more meaningful. 
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
