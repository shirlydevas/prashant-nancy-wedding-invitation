'use client'

import { motion } from 'framer-motion'
import { Heart, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-wedding-navy text-wedding-ivory py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-script text-wedding-ivory mb-4">
            Thank You for Being Part of Our Journey
          </h3>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-wedding-gold flex-1 max-w-32" />
            <Heart className="w-8 h-8 text-wedding-gold" />
            <div className="h-px bg-wedding-gold flex-1 max-w-32" />
          </div>
          <p className="text-lg text-wedding-ivory/80 max-w-2xl mx-auto">
            Your love, support, and presence mean the world to us. 
            We can't wait to celebrate this special day with all of you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="text-xl font-elegant text-wedding-gold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-wedding-gold" />
                <span className="text-wedding-ivory/80">+91 00000 00000</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 text-wedding-gold" />
                <span className="text-wedding-ivory/80">prashantandnancy@wedding.com</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4 text-wedding-gold" />
                <span className="text-wedding-ivory/80">Orlem, Malad West, Mumbai</span>
              </div>
            </div>
          </motion.div>

          {/* Wedding Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="text-xl font-elegant text-wedding-gold mb-4">Wedding Details</h4>
            <div className="space-y-3">
              <p className="text-wedding-ivory/80">Monday, November 24th, 2025</p>
              <p className="text-wedding-ivory/80">10:00 AM</p>
              <p className="text-wedding-ivory/80">Our Lady of Lourdes Church</p>
              <p className="text-wedding-ivory/80">Reception to follow</p>
            </div>
          </motion.div>

          {/* Special Thanks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="text-xl font-elegant text-wedding-gold mb-4">Special Thanks</h4>
            <div className="space-y-3">
              <p className="text-wedding-ivory/80">Our Parents</p>
              <p className="text-wedding-ivory/80">Wedding Party</p>
              <p className="text-wedding-ivory/80">All Our Loved Ones</p>
              <p className="text-wedding-ivory/80">God's Blessings</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-wedding-gold/20 pt-8 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-wedding-gold" />
            <span className="text-wedding-ivory/80">Made with love for our special day</span>
            <Heart className="w-5 h-5 text-wedding-gold" />
          </div>
          <p className="text-wedding-ivory/60 text-sm">
            © 2025 Prashant & Nancy's Wedding. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
