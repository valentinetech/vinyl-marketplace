import { render } from '@testing-library/react';
import Input from './Input';

describe('Input Component', () => {
	it('should render input', () => {
		const input = render(<Input name="test" />).getByRole('textbox');
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute('name', 'test');
	});
});
