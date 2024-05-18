import { render } from '@testing-library/react';
import Avatar from './Avatar';

describe('App Component', () => {
	test('renders the landing page', () => {
		render(<Avatar variant="desktop" />);
	});
});
