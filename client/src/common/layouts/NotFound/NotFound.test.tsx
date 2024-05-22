import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { store } from 'app/store';
import { Provider } from 'react-redux';
import * as router from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import NotFound from './NotFound';

describe('NotFound Component', () => {
	const navigate = vi.fn();
	const event = userEvent.setup();
	beforeEach(() => {
		vi.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
	});
	it('should render NotFound', async () => {
		const notFound = render(
			<Provider store={store}>
				<BrowserRouter>
					<NotFound />
				</BrowserRouter>
				,
			</Provider>,
		);
		const h2 = notFound.getByTestId('not-found-h2');
		const button = notFound.getByTestId('not-found-button');
		expect(h2).toHaveTextContent(`404: This page does&apost exit.`);
		expect(button).toHaveTextContent(`Go to HomePage...`);

		await event.click(button);
		expect(navigate).toHaveBeenCalledWith('/');
	});
});
