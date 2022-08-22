import { SectionContainer, CopyrightText } from './Footer.styles';

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<>
			<SectionContainer>
				<CopyrightText>&copy; {year} Vinyl Auction. All Rights Reserved.</CopyrightText>
			</SectionContainer>
		</>
	);
};

export default Footer;
