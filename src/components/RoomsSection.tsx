import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Star, MapPin, ArrowRight, ZoomIn } from 'lucide-react';

const categories = ['All', 'Popular', 'Luxury', 'Best Value', 'Trending'];

const rooms = [
  {
    id: 1,
    name: 'Ashram View Hotel',
    location: 'Rishikesh, India',
    price: '3,500',
    rating: 4.8,
    image: '/images/Ashram.jpeg',
    tag: 'Popular',
  },
  {
    id: 2,
    name: 'J Residency Hotel',
    location: 'Delhi, India',
    price: '4,200',
    rating: 4.9,
    image: '/images/J Residency.jpeg',
    tag: 'Luxury',
  },
  {
    id: 3,
    name: 'Preet Palace',
    location: 'Amritsar, India',
    price: '2,800',
    rating: 4.7,
    image: '/images/Preet.jpeg',
    tag: 'Best Value',
  },
  {
    id: 4,
    name: 'Samrat Residency',
    location: 'Jaipur, India',
    price: '3,900',
    rating: 4.8,
    image: '/images/Samrath.jpeg',
    tag: 'Trending',
  },
];

export default function RoomsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [likedRooms, setLikedRooms] = useState<number[]>([]);
  const [hoveredRoom, setHoveredRoom] = useState<number | null>(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  const filteredRooms =
    activeCategory === 'All'
      ? rooms
      : rooms.filter((room) => room.tag === activeCategory);

  const toggleLike = (id: number) => {
    setLikedRooms((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    );
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setPopupPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="rooms" className="w-full bg-gray-50 py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-4 block">
              Featured Stays
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Explore Stays, About Comfort.<br />
              Your Stay, Our Priority
            </h2>
          </motion.div>
          <motion.a
            href="#"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors group"
          >
            View all hotels
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <Tabs value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="bg-white border border-gray-200 rounded-full p-1 h-auto">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className="rounded-full px-5 py-2 text-sm font-medium data-[state=active]:bg-black data-[state=active]:text-white transition-all duration-300"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Room Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredRooms.map((room, index) => (
              <motion.div
                key={room.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -30 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="group bg-white border-0 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-default">
                  <div 
                    className="relative aspect-[4/3] overflow-hidden"
                    onMouseEnter={() => setHoveredRoom(room.id)}
                    onMouseLeave={() => setHoveredRoom(null)}
                    onMouseMove={handleMouseMove}
                  >
                    <motion.img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Hover Preview Icon */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ 
                        opacity: hoveredRoom === room.id ? 1 : 0, 
                        scale: hoveredRoom === room.id ? 1 : 0.5 
                      }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                        <ZoomIn className="w-5 h-5 text-gray-800" />
                      </div>
                    </motion.div>

                    <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800 hover:bg-white backdrop-blur-sm font-medium text-xs">
                      {room.tag}
                    </Badge>
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => toggleLike(room.id)}
                      className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm ${
                        likedRooms.includes(room.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white/90 text-gray-600 hover:bg-white'
                      }`}
                    >
                      <Heart
                        className={`w-4 h-4 ${likedRooms.includes(room.id) ? 'fill-current' : ''}`}
                      />
                    </motion.button>
                  </div>

                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-semibold text-gray-900 group-hover:text-black transition-colors">
                        {room.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                        <span className="text-xs font-medium text-gray-700">{room.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-gray-400 mb-4">
                      <MapPin className="w-3 h-3" />
                      <span className="text-xs">{room.location}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-gray-900">₹{room.price}</span>
                        <span className="text-xs text-gray-400"> / night</span>
                      </div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="bg-black text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-lg">
                          Book Now
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Floating Image Popup on Hover */}
      <AnimatePresence>
        {hoveredRoom !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed z-[100] pointer-events-none"
            style={{
              left: Math.min(popupPosition.x + 20, window.innerWidth - 420),
              top: Math.min(popupPosition.y - 100, window.innerHeight - 320),
            }}
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="relative w-[380px] h-[280px]">
                <img
                  src={rooms.find((r) => r.id === hoveredRoom)?.image}
                  alt={rooms.find((r) => r.id === hoveredRoom)?.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-semibold text-lg">
                    {rooms.find((r) => r.id === hoveredRoom)?.name}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <MapPin className="w-3 h-3 text-white/80" />
                    <span className="text-white/80 text-sm">
                      {rooms.find((r) => r.id === hoveredRoom)?.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
