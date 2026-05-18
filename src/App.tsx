import Header from './components/Header';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import { ImageAutoSlider } from './components/ui/image-auto-slider';
import RoomsSection from './components/RoomsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <ImageAutoSlider />
        <RoomsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
