import { render } from '@testing-library/react';
import CountdownTimer from './CountdownTimer';

describe('CountdownTimer Component', () => {
	const setIsSold = vi.fn().mockReturnValue(false);
	it('should render closed auction when it is completed', () => {
		vi.setSystemTime('2023-10-10');
		const endDate = '2023-10-09';
		const countdownTimer = render(<CountdownTimer endDate={endDate} setIsSold={setIsSold} />);
		expect(countdownTimer.getByTestId('auction-closed')).toHaveTextContent('Auction closed.');
	});
	it('should render when more than day left', () => {
		vi.setSystemTime('2023-10-10');
		const endDate = '2023-10-12';
		const countdownTimer = render(<CountdownTimer endDate={endDate} setIsSold={setIsSold} />);
		expect(countdownTimer.getByTestId('auction-remaining-time-days')).toBeInTheDocument();
	});
	it('should render when less than day left', () => {
		vi.setSystemTime('2023-10-10T10:00:00');
		const endDate = '2023-10-10T14:00:00';
		const countdownTimer = render(<CountdownTimer endDate={endDate} setIsSold={setIsSold} />);
		expect(countdownTimer.getByTestId('auction-remaining-time')).toBeInTheDocument();
	});
});
