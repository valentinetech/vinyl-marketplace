import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import About from './About';

vi.mock('common/layouts/Header', () => {
	return {
		__esModule: true,
		default: () => <div>Header</div>,
	};
});

vi.mock('common/layouts/Footer', () => {
	return {
		__esModule: true,
		default: () => <div>Footer</div>,
	};
});

describe('About component', () => {
	it('renders the About section with correct text', () => {
		render(<About />);
		expect(screen.getByText('About')).toBeInTheDocument();
	});
});
