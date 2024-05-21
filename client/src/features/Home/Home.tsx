import Footer from 'common/layouts/Footer';
import Header from 'common/layouts/Header';
import Explore from 'features/Home/Explore';
import Hero from 'features/Home/Hero';

const Home = () => {
	return (
		<>
			<Header />
			<Hero />
			<Explore />
			<Footer />
		</>
	);
};

export default Home;
