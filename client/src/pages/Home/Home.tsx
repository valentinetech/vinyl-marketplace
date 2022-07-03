import Header from 'common/layouts/Header';
import Footer from 'common/layouts/Footer';
import Hero from 'pages/Home/Hero';
import Explore from 'pages/Home/Explore';
import About from 'pages/Home/About';

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
