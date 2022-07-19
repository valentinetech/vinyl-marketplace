import Header from 'common/layouts/Header';
import Footer from 'common/layouts/Footer';
import Hero from 'features/Home/Hero';
import Explore from 'features/Home/Explore';
import About from 'features/Home/About';

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
