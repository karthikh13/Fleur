import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Carousel from './components/Carousel/Carousel';
import Blog from './components/Blog/Blog';
import Testimonials from './components/Testimonials/Testimonials';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Counters from './components/Counters/Counters';
import Team from './components/Team/Team';
import Products from './components/Products/Products';
import Clients from './components/Clients/Clients';
import FooterWidgets from './components/FooterWidgets/FooterWidgets';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Carousel />
        <Blog />
        <Testimonials />
        <Skills />
        <Portfolio />
        <Counters />
        <Team />
        <Products />
        <Clients />
      </main>
      <FooterWidgets />
      <Footer />
      <BackToTop />
    </>
  );
}
