import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, MapPin, Hotel, DollarSign, ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.15, duration: 0.6, ease: 'easeOut' as const },
  }),
};

export default function Hero() {
  return (
    <section id="book" className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10" />

      {/* Floating particles effect */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white pt-16">
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
        >
          Discover Top Hotels, Compare Deals, and Book Your Perfect Stay
        </motion.h1>

        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-sm md:text-base text-white/80 mb-10 max-w-2xl mx-auto"
        >
          Search trusted hotels for unforgettable stays at unbeatable prices. Find the best hotels near you in seconds with ease and confidence.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-4 md:p-5 flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4 shadow-2xl max-w-3xl mx-auto"
        >
          <div className="flex-1 flex flex-col gap-1 text-left bg-white/10 rounded-2xl px-4 py-3 hover:bg-white/20 transition-colors">
            <span className="text-[10px] uppercase tracking-wider text-white/60 font-medium flex items-center gap-1">
              <MapPin className="w-3 h-3" /> Location
            </span>
            <Select defaultValue="dubai">
              <SelectTrigger className="bg-transparent text-sm font-medium text-white border-0 p-0 h-auto shadow-none focus:ring-0 [&>svg]:text-white/60">
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dubai">Dubai</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="jaipur">Jaipur</SelectItem>
                <SelectItem value="goa">Goa</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="hidden md:block w-px h-10 bg-white/20" />

          <div className="flex-1 flex flex-col gap-1 text-left bg-white/10 rounded-2xl px-4 py-3 hover:bg-white/20 transition-colors">
            <span className="text-[10px] uppercase tracking-wider text-white/60 font-medium flex items-center gap-1">
              <Hotel className="w-3 h-3" /> Type
            </span>
            <Select defaultValue="luxury">
              <SelectTrigger className="bg-transparent text-sm font-medium text-white border-0 p-0 h-auto shadow-none focus:ring-0 [&>svg]:text-white/60">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="luxury">Luxury Hotel</SelectItem>
                <SelectItem value="boutique">Boutique Hotel</SelectItem>
                <SelectItem value="resort">Resort</SelectItem>
                <SelectItem value="business">Business Hotel</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="hidden md:block w-px h-10 bg-white/20" />

          <div className="flex-1 flex flex-col gap-1 text-left bg-white/10 rounded-2xl px-4 py-3 hover:bg-white/20 transition-colors">
            <span className="text-[10px] uppercase tracking-wider text-white/60 font-medium flex items-center gap-1">
              <DollarSign className="w-3 h-3" /> Price
            </span>
            <Select defaultValue="3k-5k">
              <SelectTrigger className="bg-transparent text-sm font-medium text-white border-0 p-0 h-auto shadow-none focus:ring-0 [&>svg]:text-white/60">
                <SelectValue placeholder="Select price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3k-5k">3,000 - 5,000</SelectItem>
                <SelectItem value="5k-10k">5,000 - 10,000</SelectItem>
                <SelectItem value="10k-20k">10,000 - 20,000</SelectItem>
                <SelectItem value="20k+">20,000+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-white text-black text-sm font-semibold px-6 py-6 rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2 w-full md:w-auto">
              <Search className="w-4 h-4" />
              Search Hotel
            </Button>
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-white/80 hover:text-white transition-all group"
        >
          Let's know us
          <motion.span
            className="inline-block"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.span>
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
