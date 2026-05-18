import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#', reload: true },
  { label: 'About Us', href: '#about' },
  { label: 'Hotels', href: '#rooms' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY > 20);
    });
  }

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100'
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center gap-2"
          whileTap={{ scale: 0.95 }}
        >
          <div className="overflow-hidden rounded-md">
            <img
              src="/triindia-logo.jpeg"
              alt="TRIINDIA"
              className="h-9 w-auto object-contain transition-transform duration-[600ms] ease-out hover:scale-105"
            />
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                if (link.reload) {
                  e.preventDefault();
                  window.location.reload();
                }
              }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
              className="relative px-4 py-2 text-[11px] font-medium uppercase tracking-[3px] text-gray-600 hover:text-gray-900 transition-colors group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-black rounded-full group-hover:w-3/4 transition-all duration-300" />
            </motion.a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
        </div>

        {/* Mobile Sheet */}
        <Sheet>
          <SheetTrigger>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col h-full pt-8">
              <div className="flex items-center gap-2 mb-10">
                <div className="overflow-hidden rounded-md">
                  <img
                    src="/triindia-logo.jpeg"
                    alt="TRIINDIA"
                    className="h-8 w-auto object-contain transition-transform duration-[600ms] ease-out hover:scale-105"
                  />
                </div>
              </div>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.reload) {
                          e.preventDefault();
                          window.location.reload();
                        }
                      }}
                      className="block px-4 py-3 text-[11px] font-medium uppercase tracking-[3px] text-gray-700 hover:text-black hover:bg-gray-50 rounded-xl transition-all"
                    >
                      {link.label}
                    </a>
                  </motion.div>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
