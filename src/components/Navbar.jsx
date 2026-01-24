import { useState, useEffect } from 'react';
import navbarLogo from '../assets/Ductil-W.gif';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
        setIsMenuOpen(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="bg-[#1D2224]/45 backdrop-blur-xs border-b border-white/5 overflow-x-hidden">
        {/* Top bar */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-5 flex items-center justify-between">

          {/* Left spacer (sm + md) */}
          <div className="w-6 lg:hidden"></div>

          {/* Logo (center on sm+md, left on lg+) */}
          <a href="#home" className="mx-auto lg:mx-0">
            <img
              src={navbarLogo}
              alt="Ductil Logo"
              className="h-14 w-auto object-contain"
            />
          </a>

          {/* Hamburger (sm + md) */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>

          {/* Desktop Navigation (lg+) */}
          <div className="hidden lg:flex items-center gap-12">
            <a href="#home" className="text-white hover:text-[#0D9FB4] text-xl font-medium tracking-wide transition-colors">
              Home
            </a>
            <a href="#about" className="text-white hover:text-[#0D9FB4] text-xl font-medium tracking-wide transition-colors">
              About us
            </a>
            <a href="#product" className="text-white hover:text-[#0D9FB4] text-xl font-medium tracking-wide transition-colors">
              Product
            </a>
            <a href="#partner" className="text-white hover:text-[#0D9FB4] text-xl font-medium tracking-wide transition-colors">
              Partner
            </a>
          </div>
        </div>

        {/* Mobile / Tablet Menu (sm + md) */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col items-center gap-6 py-6 bg-[#191919]/50 backdrop-blur-sm">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-white text-lg hover:text-[#0D9FB4]">
              Home
            </a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-white text-lg hover:text-[#0D9FB4]">
              About us
            </a>
            <a href="#product" onClick={() => setIsMenuOpen(false)} className="text-white text-lg hover:text-[#0D9FB4]">
              Product
            </a>
            <a href="#partner" onClick={() => setIsMenuOpen(false)} className="text-white text-lg hover:text-[#0D9FB4]">
              Partner
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
