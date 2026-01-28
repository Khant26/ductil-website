// src/components/Footer.jsx
import ductilLogo from '../assets/footer.png';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-8 pb-8 border-t border-cyan-900/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* LEFT COLUMN */}
          <div className="space-y-5 sm:space-y-6 md:space-y-8">
            <div>
              <img
                src={ductilLogo}
                alt="DUCTIL"
                className="
                  h-9 sm:h-10 md:h-20 w-auto
                  ml-0 sm:ml-0
                  -ml-5 md:-ml-3
                "
              />
            </div>

            {/* Social media */}
            <div className="flex items-center gap-4 sm:gap-5 md:gap-6 text-lg sm:text-xl md:text-2xl">
              <a href="#" aria-label="Facebook" className="hover:text-[#0D9FB4] transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-[#0D9FB4] transition-colors">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-[#0D9FB4] transition-colors">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-[#0D9FB4] transition-colors">
                <FaTwitter />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-[#0D9FB4] transition-colors">
                <FaYoutube />
              </a>
            </div>

            <div className="font-oswald text-xs sm:text-sm md:text-lg">
              <a
                href="mailto:info@ductil.com"
                className="hover:text-[#0D9FB4] transition-colors"
                style={{ wordSpacing: '0.15em' }}
              >
                info@ductil.com
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 mt-4 md:mt-6">

            {/* Germany */}
            <div>
              <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-[#0D9FB4] mb-2 sm:mb-3 md:mb-4">
                Contact
              </h3>

              {/* Mobile (single sentence) */}
              <p
                className="sm:hidden font-oswald text-xs text-gray-300"
                style={{ wordSpacing: '0.15em' }}
              >
                Ductil GmbH, Breedeneyer Str. 2B, 45133 Essen, Germany
              </p>

              {/* Tablet & Desktop (multiline) */}
              <p
                className="hidden sm:block font-oswald text-sm md:text-lg text-gray-300 leading-relaxed"
                style={{ wordSpacing: '0.15em' }}
              >
                Ductil GmbH<br />
                Breedeneyer Str. 2B<br />
                45133 Essen<br />
                Germany
              </p>

              <p className="font-oswald mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-lg">
                Email:
                <a
                  href="mailto:ralf@ductil.com"
                  className="text-gray-300 hover:text-[#0D9FB4] transition-colors ml-2"
                >
                  ralf@ductil.com
                </a>
              </p>
            </div>

            {/* Thailand */}
            <div className="mt-5 sm:mt-0 md:mt-11">

              {/* Mobile (single sentence) */}
              <p
                className="sm:hidden font-oswald text-xs text-gray-300"
                style={{ wordSpacing: '0.15em' }}
              >
                Ductil Co., Ltd., 16 Soi Navamin 163 Lane 6, Ram Inthra, Khan Nayaok, Bangkok 10230, Thailand
              </p>

              {/* Tablet & Desktop (multiline) */}
              <p
                className="hidden sm:block font-oswald text-sm md:text-lg text-gray-300 leading-relaxed"
                style={{ wordSpacing: '0.15em' }}
              >
                Ductil Co., Ltd.<br />
                16 Soi Navamin 163 Lane 6<br />
                Ram Inthra, Khan Nayaok<br />
                Bangkok 10230<br />
                Thailand
              </p>

              <p className="font-oswald mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-lg">
                Email:
                <a
                  href="mailto:narongkorn@ductil.com"
                  className="text-gray-300 hover:text-[#0D9FB4] transition-colors ml-2"
                >
                  narongkorn@ductil.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-5 sm:mt-6 md:mt-8 pt-4 sm:pt-6 md:pt-8 border-t border-gray-800 text-center text-[10px] sm:text-xs md:text-sm text-white/60">
          ductil. © 2024. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
