import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Product from '../components/Product.jsx';
import Partner from '../components/Partner.jsx';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Product />
      <Partner />
      <Footer />
    </div>
  );
}

export default App;
