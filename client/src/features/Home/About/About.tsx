import { SectionContainer, SectionName, AboutText } from './About.styles';

const About = () => {
	const about = {
		h1: 'Discover the World of Vinyl Records!',
		p: `Vinyl Auction are the No.1 auction house worldwide for rare & collectable vinyl records, selling around 500,000 records every year in our specialist vinyl record auctions.  We cover ALL genres, the only criteria is that the records are considered collectable. \n
    Items accepted include LPs, 7" singles, 12" singles, acetates, demos etc, cd's and tapes.  If you're looking to sell your vinyl record collection we can help you to achieve the best possible price in one of our specialist vinyl auctions.  We love record collections and can make house calls for large collections, including estate sales, shop closure stock and radio station stock. We're interested in most kinds of music but the main emphasis is on rock & pop, indie, soul, dance, jazz, punk, psych, soul, northern soul, folk, blues and reggae.
`,
	};

	return (
		<>
			<SectionContainer id='about'>
				<SectionName>About</SectionName>
				<AboutText>{about.p}</AboutText>
			</SectionContainer>
		</>
	);
};

export default About;
