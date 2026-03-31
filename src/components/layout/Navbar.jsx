import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import myIcon from '../../assets/icon.png';
import { GLOBALS, navigate } from '../../constants/general';

const Navbar = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Menü tıklandığında hem sayfaya git hem menüyü kapat
  const handleNavigate = (page) => {
    navigate(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg border-b border-gray-100 py-3 shadow-sm' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNavigate('home')} className="flex items-center focus:outline-none">
            <div className="rounded-xl overflow-hidden">
              <img src={myIcon} style={{ height: '70px', width: '70px', objectFit: 'contain' }} alt="Logo" />
            </div>
          </button>
          
          {/* Desktop Menü (lg ve üzeri) */}
          <div className="hidden lg:flex items-center space-x-2">
            <Button onClick={() => handleNavigate('contact')} variant="ghost">Contact Us</Button>
            <Button onClick={() => handleNavigate('pricing')} variant="ghost">Pricing</Button>
            <Button onClick={() => handleNavigate('roi')} variant="ghost">ROI Calculator</Button>
            <Button onClick={() => handleNavigate('demo')} variant="ghost">Live Demo</Button>
            <div className="w-px h-6 bg-gray-200 mx-2"></div>
            <Button 
              onClick={() => window.open(GLOBALS.CALENDAR, '_blank')} 
              variant="outline" 
              className="px-6 h-10"
            >
              Book a Demo
            </Button>
          </div>
          
          {/* Mobil Menü Butonu (Sadece mobilde görünür) */}
          <div className="lg:hidden flex items-center">
            <button 
              className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- EKSİK OLAN KISIM: MOBİL MENÜ İÇERİĞİ --- */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col p-6 space-y-4">
            <button 
              onClick={() => handleNavigate('contact')}
              className="text-left py-3 px-4 text-base font-bold text-gray-600 hover:bg-gray-50 rounded-xl"
            >
              Contact Us
            </button>
            <button 
              onClick={() => handleNavigate('roi')}
              className="text-left py-3 px-4 text-base font-bold text-gray-600 hover:bg-gray-50 rounded-xl"
            >
              ROI Calculator
            </button>
            <button 
              onClick={() => handleNavigate('demo')}
              className="text-left py-3 px-4 text-base font-bold text-gray-600 hover:bg-gray-50 rounded-xl"
            >
              Live Demo
            </button>
            
            <hr className="border-gray-100" />
            
            <Button 
              onClick={() => window.open(GLOBALS.CALENDAR, '_blank')} 
              variant="dark" 
              className="w-full py-4 text-center justify-center rounded-xl"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;