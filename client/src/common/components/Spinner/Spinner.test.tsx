import { render } from '@testing-library/react';
import Spinner from './Spinner';

describe('Spinner Component', () => {
	it('should render Spinner', () => {
		const spinner = render(<Spinner />).getByTestId('spinner');
		expect(spinner).toBeInTheDocument();
	});
});
