import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import Profile from './Profile';

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

const mockSessionStorage = {
	userId: '55',
	username: 'john',
};

describe('Profile', () => {
	beforeEach(() => {
		sessionStorage.clear();
	});

	it('renders header, section, and footer', () => {
		vi.spyOn(sessionStorage, 'getItem').mockImplementation((key: string) => {
			if (key === 'userId' || key === 'username') {
				return mockSessionStorage[key];
			} else {
				return null;
			}
		});
		render(<Profile />);
		expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Welcome back john!');
		expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent('Your user ID is: 55');
	});
});
