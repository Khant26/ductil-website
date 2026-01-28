// src/components/Hero.jsx
import heroBg from '../assets/hero.jpg';
import ductilLogoHero from '../assets/Ductil-W.gif';

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative min-h-screen
        bg-cover bg-center
        flex items-center justify-center
        px-4 sm:px-8 md:px-0
        overflow-x-hidden
      "
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-cyan-900/65"></div>

      <div className="relative z-10 flex flex-col items-center text-center w-full">

        {/* Logo */}
        <img
          src={ductilLogoHero}
          alt="Ductil Logo"
          className="
            w-4/6
            -mb-4 sm:-mb-5 md:-mb-6
            max-w-[320px]
            sm:max-w-[480px]
            md:max-w-[600px]
            lg:max-w-[900px]
            2xl:max-w-[1200px]
            3xl:max-w-[1500px]
            drop-shadow-2xl
          "
        />

        {/* Tagline */}
        <p
          className="
            -mt-1 sm:-mt-2 md:-mt-3
            mb-8
            text-lg
            sm:text-2xl
            md:text-3xl 
            2xl:text-5xl
            3xl:text-6xl
            font-light
            text-white/90
            tracking-widest
          "
        >
          HiTech for your Concrete ®
        </p>

        {/* CTA */}
        <a
          href="#product"
          className="
            mt-6 md:mt-10
            px-6 py-3
            sm:px-10 sm:py-4
            bg-white text-black
            font-medium rounded-md shadow-lg
            hover:bg-gray-100 hover:scale-105
            transition inline-block
          "
        >
          Let&apos;s Explore
        </a>

      </div>
    </section>
  );
};

export default Hero;
