import { render } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
	test('It should render the landing page', () => {
		render(<App />);
	});
});
