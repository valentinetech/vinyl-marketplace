import Hero from 'components/layouts/Home/Hero/Hero';
import Header from 'components/layouts/Header/Header';
import Explore from 'components/layouts/Home/Explore/Explore';
import About from 'components/layouts/Home/About/About';
import Footer from 'components/layouts/Footer/Footer';

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
