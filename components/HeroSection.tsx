"use client";

import { motion } from "framer-motion";
import { Heart, Calendar, MapPin, Cross } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-wedding-cream via-wedding-ivory to-wedding-cream opacity-90" />

      {/* Floating Hearts */}
      <div className="absolute top-20 left-10 floating-element">
        <Heart className="w-8 h-8 text-wedding-rose/30" />
      </div>
      <div
        className="absolute top-32 right-16 floating-element"
        style={{ animationDelay: "1s" }}
      >
        <Heart className="w-6 h-6 text-wedding-gold/40" />
      </div>
      <div
        className="absolute bottom-32 left-20 floating-element"
        style={{ animationDelay: "2s" }}
      >
        <Heart className="w-10 h-10 text-wedding-rose/20" />
      </div>
      <div
        className="absolute bottom-20 right-10 floating-element"
        style={{ animationDelay: "3s" }}
      >
        <Heart className="w-7 h-7 text-wedding-gold/30" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* bible verse */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="my-8 flex items-center justify-center"
        >
          {/* cross icon */}
          <Cross className="w-6 h-6 text-wedding-gold mb-4" />
          <p className="text-xl font-script text-wedding-navy mb-4 mx-4">
            Therefore what God has joined together, let no one separate
          </p>
          <Cross className="w-6 h-6 text-wedding-gold mb-4" />
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="my-8"
        >
          <h1 className="text-6xl md:text-8xl font-script text-wedding-navy mb-4">
            Together with our families
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-wedding-gold flex-1 max-w-32" />
            <Heart className="w-8 h-8 text-wedding-gold" />
            <div className="h-px bg-wedding-gold flex-1 max-w-32" />
          </div>
          <p className="text-xl md:text-2xl font-elegant text-wedding-navy/80">
            request the pleasure of your company
          </p>
        </motion.div>

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <div className="wedding-card rounded-3xl p-8 md:p-12 mx-4 pulse-glow">
            <h2 className="text-5xl md:text-7xl font-script text-wedding-navy mb-4">
              Prashant & Nancy
            </h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Heart className="w-6 h-6 text-wedding-gold" />
              <span className="text-2xl font-elegant text-wedding-gold">•</span>
              <Heart className="w-6 h-6 text-wedding-gold" />
            </div>
            <p className="text-lg md:text-xl text-wedding-navy/70 font-medium">
              are getting married!
            </p>
          </div>
        </motion.div>

        {/* Wedding Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calendar className="w-6 h-6 text-wedding-gold" />
            <h3 className="text-2xl md:text-3xl font-elegant text-wedding-navy">
              Monday, November 24th, 2025
            </h3>
          </div>
          <p className="text-lg text-wedding-navy/70">
            at 10:00 AM in the morning
          </p>
        </motion.div>

        {/* Venue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <MapPin className="w-5 h-5 text-wedding-gold" />
            <p className="text-lg font-elegant text-wedding-navy">
            Our Lady of Lourdes Church
            </p>
          </div>
          <p className="text-wedding-navy/70">
            Orlem, Malad West, Mumbai
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-sm text-wedding-navy/60 font-medium">
            Scroll to see all events
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-wedding-gold rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-wedding-gold rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
