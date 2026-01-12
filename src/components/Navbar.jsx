// src/components/Navbar.jsx
import navbarLogo from '../assets/Ductil-W.gif'; // your specific navbar logo

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Main navbar container with #1D2224 + 22% opacity */}
      <div className="bg-[#1D2224]/35 backdrop-blur-xs border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          
          {/* Logo - left side */}
          <a href="#home">
            <img
              src={navbarLogo}
              alt="Ductil Logo"
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* Navigation links - right side */}
          <div className="flex items-center gap-12">
            <a
              href="#home"
              className="text-white/90 hover:text-white text-lg font-medium tracking-wide transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white/90 hover:text-white text-lg font-medium tracking-wide transition-colors duration-200"
            >
              About us
            </a>
            <a
              href="#product"
              className="text-white/90 hover:text-white text-lg font-medium tracking-wide transition-colors duration-200"
            >
              Product
            </a>
            <a
              href="#partner"
              className="text-white/90 hover:text-white text-lg font-medium tracking-wide transition-colors duration-200"
            >
              Partner
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;