import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import * as router from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Avatar from './Avatar';

describe('Avatar Component', () => {
	const navigate = vi.fn();
	const button = userEvent.setup();
	beforeEach(() => {
		vi.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
	});
	it('should render desktop version', () => {
		render(
			<BrowserRouter>
				<Avatar variant="desktop" />
			</BrowserRouter>,
		);
		expect(screen.getByRole('button')).toHaveClass('sc-gswNZR dXHmgi');
	});
	it('should render mobile version', () => {
		render(
			<BrowserRouter>
				<Avatar variant="mobile" />
			</BrowserRouter>,
		);
		expect(screen.getByRole('button')).toHaveClass('sc-bcXHqe ekdDDN');
	});
	it('should navigate to profile desktop', async () => {
		render(
			<BrowserRouter>
				<Avatar variant="desktop" />
			</BrowserRouter>,
		);
		expect(button).toBeTruthy();
		await button.click(screen.getByRole('button'));
		expect(navigate).toHaveBeenCalledWith('/profile');
	});
	it('should navigate to profile mobile', async () => {
		render(
			<BrowserRouter>
				<Avatar variant="mobile" />
			</BrowserRouter>,
		);
		expect(button).toBeTruthy();
		await button.click(screen.getByRole('button'));
		expect(navigate).toHaveBeenCalledWith('/profile');
	});
});
