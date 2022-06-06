import Hero from 'components/layouts/Hero';
import Header from 'components/layouts/Header';
import Explore from 'components/layouts/Explore';
import About from 'components/layouts/About';
import Footer from 'components/layouts/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Explore />
      <About />
      <Footer />
    </>
  );
};

export default Home;
