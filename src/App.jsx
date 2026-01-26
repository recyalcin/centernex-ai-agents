import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import ROICalculator from './pages/ROICalculator';
import ContactUs from './pages/ContactUs';
import Demo from './pages/Demo';

export default function App() {
  const [page, setPage] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      setPage(['home', 'pricing', 'roi', 'contact', 'demo'].includes(hash) ? hash : 'home');
      window.scrollTo(0, 0);
    };
    
    window.addEventListener('hashchange', handleHash);
    handleHash();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);


  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar scrolled={scrolled} />
      
      <main>
        {page === 'home' && <Home />}
        {page === 'pricing' && <Pricing />}
        {page === 'roi' && <ROICalculator />}
        {page === 'contact' && <ContactUs />}
        {page === 'demo' && <Demo />}
      </main>

      <Footer />
    </div>
  );
}