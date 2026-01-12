import heroBg from '../assets/hero.jpg';
import ductilLogoHero from '../assets/Ductil-W.gif'; // Replace with your Ductil logo image

const Hero = () => {
  return (
    <section
        id="home"
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        >
        <div className="absolute inset-0 bg-cyan-900/65"></div>

        <div className="relative z-10 flex flex-col items-center text-center">
            <img
            src={ductilLogoHero}
            alt="Ductil Logo"
            className="w-4/5 max-w-[580px] md:max-w-[720px] lg:max-w-[900px] drop-shadow-2xl"
            />
            <p className="mb-6 text-2xl md:text-4xl font-light text-white/90 tracking-wider">
            HiTech for your Concrete ®
            </p>
            <button className="mt-15 px-10 py-4 bg-white text-cyan-900 font-medium rounded-lg shadow-lg hover:bg-gray-100 transition">
            Let's Explore
            </button>
        </div>
    </section>
  );
};

export default Hero;