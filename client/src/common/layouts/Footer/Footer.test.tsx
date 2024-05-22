import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
	it('should render Footer', () => {
		const year = '2023';
		vi.setSystemTime('2023-10-10');
		const footer = render(<Footer />).getByRole('heading');
		expect(footer).toHaveTextContent(`© ${year} Vinyl Auction. All Rights Reserved.`);
	});
});
