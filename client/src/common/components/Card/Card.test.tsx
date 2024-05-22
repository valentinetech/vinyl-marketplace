import { render, screen } from '@testing-library/react';
import { store } from 'app/store';
import { Provider } from 'react-redux';
import * as router from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Card from './Card';
import { ICard } from './Card.models';

describe('Card Component', () => {
	const navigate = vi.fn();
	// const button = userEvent.setup();
	beforeEach(() => {
		vi.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
	});
	it('should render card', () => {
		const props: ICard = {
			albumCover: 'url to album',
			albumName: 'album test',
			artistName: 'artist test',
			currentId: '1',
		};
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Card {...props} />
				</BrowserRouter>
			</Provider>,
		);
		screen.debug();
		// expect(button).toBeInTheDocument();
		// expect(button).toHaveTextContent('test');
		// expect(button).not.toBeDisabled();
	});
});
