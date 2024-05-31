import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import RequireAuth from './RequireAuth';

describe('RequireAuth component', () => {
	it('should renders the Outlet component when user is authenticated', () => {
		vi.spyOn(sessionStorage, 'getItem').mockReturnValueOnce('token');
		const { getByText } = render(
			<MemoryRouter initialEntries={['/protected']}>
				<Routes>
					<Route element={<RequireAuth />}>
						<Route path="/protected" element={<div>Protected Content</div>} />
					</Route>
				</Routes>
			</MemoryRouter>,
		);

		expect(getByText('Protected Content')).toBeInTheDocument();
	});
});
