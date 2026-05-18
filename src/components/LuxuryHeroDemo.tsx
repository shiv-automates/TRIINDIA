import { motion } from 'framer-motion';

/**
 * LuxuryHeroDemo — Sample section demonstrating the TRIINDIA
 * luxury typography system with Cormorant Garamond & DM Sans.
 */
export default function LuxuryHeroDemo() {
  return (
    <section className="luxury-theme w-full min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Accent vertical line */}
      <div className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 w-px h-32 bg-[#d4af37] opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-24">
        {/* Section Label — DM Sans, 11px, 4px tracking, uppercase, gold muted */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="luxury-label"
        >
          Welcome to TRIINDIA
        </motion.span>

        {/* H1 — Cormorant Garamond 400, 64px/36px, line-height 1.1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          Where Heritage Meets
          <br />
          <span className="luxury-gold">Unparalleled Luxury</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="luxury-divider origin-left"
        />

        {/* Tagline / Pull Quote — Cormorant Garamond italic 300 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="luxury-tagline mb-10 max-w-2xl"
        >
          "An ode to the art of Indian hospitality —
          where every stay becomes a cherished memory."
        </motion.p>

        {/* H2 Subheading — Cormorant Garamond 400, 42px */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-6"
        >
          Curated Stays Across the Subcontinent
        </motion.h2>

        {/* Body Paragraph — DM Sans 300, 16px, line-height 1.8, color #c8b8a2 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="luxury-body max-w-xl mb-12"
        >
          From the sun-kissed palaces of Rajasthan to the serene backwaters of Kerala,
          TRIINDIA curates the finest collection of heritage hotels, boutique resorts,
          and contemporary luxury properties. Each destination is handpicked to offer
          an authentic experience that celebrates India&apos;s rich cultural tapestry
          while delivering world-class comfort and service.
        </motion.p>

        {/* Buttons — DM Sans 400 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="luxury-btn">
            Explore Collection
          </button>
          <button className="luxury-btn luxury-btn-outline">
            Reserve Your Stay
          </button>
        </motion.div>
      </div>

      {/* Corner accent ornament */}
      <div className="absolute bottom-12 right-12 md:right-24 text-[#d4af37] opacity-40">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 0V40M0 20H40" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
    </section>
  );
}
