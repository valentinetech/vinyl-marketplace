import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import * as router from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'store/store';
import Card from './Card';
import { ICard } from './Card.models';

describe('Card Component', () => {
	const navigate = vi.fn();
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
	});
});
