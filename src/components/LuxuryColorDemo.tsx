import { motion } from 'framer-motion';

/**
 * LuxuryColorDemo — Shows the complete TRIINDIA color system
 * in action: navigation bar, card, button, and input field.
 */
export default function LuxuryColorDemo() {
  return (
    <div className="bg-luxury-primary min-h-screen">
      {/* ========== NAVIGATION BAR ========== */}
      <nav className="luxury-nav fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-[var(--color-gold)] flex items-center justify-center">
              <span className="text-[var(--color-gold)] text-xs font-bold tracking-widest">T</span>
            </div>
            <span className="text-[var(--color-text-primary)] text-sm tracking-[3px] uppercase font-medium">
              TRIINDIA
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {['Rooms', 'Dining', 'Spa', 'Experiences', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="luxury-nav-link text-[11px] uppercase tracking-[4px]"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a href="#" className="btn-luxury hidden md:inline-block">
            Book Now
          </a>

          {/* Mobile Hamburger */}
          <button className="md:hidden text-[var(--color-gold)]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-20" />

      {/* ========== DEMO CONTENT ========== */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[11px] uppercase tracking-[4px] text-[var(--color-text-muted)] block mb-6">
            Color System Demo
          </span>
          <h1 className="text-[var(--color-text-primary)] mb-6">
            A Complete Luxury Palette
          </h1>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mb-16">
            Every surface, border, and accent has been carefully mapped to CSS custom properties.
            Hover over the card and button below to see the interactive states.
          </p>
        </motion.div>

        {/* ========== CARD + FORM GRID ========== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* --- LUXURY CARD --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="luxury-card p-8 md:p-10">
              {/* Card Label */}
              <span className="text-[11px] uppercase tracking-[4px] text-[var(--color-text-muted)] block mb-4">
                Suite Preview
              </span>

              {/* Card Title */}
              <h2 className="luxury-card-title mb-4">
                The Maharaja Suite
              </h2>

              {/* Decorative line */}
              <div className="w-12 h-px bg-[var(--color-gold)] opacity-50 mb-6" />

              {/* Card Body */}
              <p className="luxury-card-body mb-6">
                An expansive 120 sqm sanctuary overlooking the Aravalli hills.
                Hand-carved teak furnishings, private plunge pool, and butler service.
              </p>

              {/* Card Meta */}
              <div className="flex items-center justify-between mb-8">
                <span className="luxury-card-caption text-[11px] uppercase tracking-[3px]">
                  Jaipur, Rajasthan
                </span>
                <span className="text-[var(--color-gold)] text-lg font-medium">
                  ₹45,000 <span className="text-[var(--color-text-muted)] text-sm font-normal">/ night</span>
                </span>
              </div>

              {/* Card Image Placeholder with overflow-hidden for hover zoom */}
              <div className="overflow-hidden rounded-sm">
                <img
                  src="/images/Ashram.jpeg"
                  alt="Maharaja Suite"
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-[600ms] ease-out"
                />
              </div>
            </div>
          </motion.div>

          {/* --- FORM + BUTTON DEMO --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-8"
          >
            {/* Input Group */}
            <div className="luxury-card p-8 md:p-10">
              <span className="text-[11px] uppercase tracking-[4px] text-[var(--color-text-muted)] block mb-6">
                Reserve Your Stay
              </span>

              <div className="space-y-5">
                <div>
                  <label className="text-[11px] uppercase tracking-[3px] text-[var(--color-text-muted)] block mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Arjun Mehta"
                    className="luxury-input"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-[3px] text-[var(--color-text-muted)] block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="arjun@example.com"
                    className="luxury-input"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] uppercase tracking-[3px] text-[var(--color-text-muted)] block mb-2">
                      Check In
                    </label>
                    <input
                      type="text"
                      placeholder="DD / MM / YYYY"
                      className="luxury-input"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] uppercase tracking-[3px] text-[var(--color-text-muted)] block mb-2">
                      Check Out
                    </label>
                    <input
                      type="text"
                      placeholder="DD / MM / YYYY"
                      className="luxury-input"
                    />
                  </div>
                </div>
              </div>

              {/* Primary CTA */}
              <div className="mt-8">
                <button className="btn-luxury w-full">
                  Confirm Reservation
                </button>
              </div>
            </div>

            {/* Button Variants Showcase */}
            <div className="luxury-card p-8 md:p-10">
              <span className="text-[11px] uppercase tracking-[4px] text-[var(--color-text-muted)] block mb-6">
                Button Variants
              </span>
              <div className="flex flex-wrap gap-4">
                <button className="btn-luxury">Outline Gold</button>
                <button className="btn-luxury btn-luxury-filled">Filled Gold</button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="luxury-footer py-16 mt-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <span className="text-[var(--color-text-primary)] text-sm tracking-[3px] uppercase font-medium block mb-4">
                TRIINDIA
              </span>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                Curating India's finest heritage hotels and luxury resorts since 2010.
              </p>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-[3px] text-[var(--color-text-muted)] block mb-4">
                Explore
              </span>
              <ul className="space-y-2">
                {['Destinations', 'Collections', 'Offers', 'Journal'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors duration-400">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-[3px] text-[var(--color-text-muted)] block mb-4">
                Company
              </span>
              <ul className="space-y-2">
                {['About Us', 'Careers', 'Press', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors duration-400">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-[3px] text-[var(--color-text-muted)] block mb-4">
                Legal
              </span>
              <ul className="space-y-2">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors duration-400">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-[var(--color-border)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-[11px] uppercase tracking-[3px] text-[var(--color-text-muted)]">
              © 2026 TRIINDIA Hotels
            </span>
            <span className="text-[11px] uppercase tracking-[3px] text-[var(--color-text-muted)]">
              Designed with precision
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
