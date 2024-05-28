import { render } from '@testing-library/react';
import Search from './Search';

describe('Search Component', () => {
	it('should render Search', () => {
		const input = render(<Search name="test" />).getByRole('textbox');
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute('name', 'test');
		expect(input).toHaveAttribute('placeholder', 'Search...');
	});
});
