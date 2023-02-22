import { Dispatch, SetStateAction } from 'react';
import Countdown, { zeroPad } from 'react-countdown';
import { CountdownComponent, CountdownTitle } from './CountdownTimer.styles';

export interface ICountdown {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
	completed: boolean;
}

interface ICountdownTimer {
	endDate: string;
	setIsSold: Dispatch<SetStateAction<boolean>>;
}

const CountdownTimer = ({ endDate, setIsSold }: ICountdownTimer) => {
	const dateToString = endDate?.toString();
	const endDateFormated = new Date(dateToString);
	const endDateMili = endDateFormated.getTime();
	const date15MinMilli = Date.now() + 900000;

	const renderer = ({ days, hours, minutes, seconds, completed }: ICountdown) => {
		if (completed) {
			setIsSold(completed);

			return <span style={{ color: '#F45B69', fontWeight: 'bold' }}>Auction closed.</span>;
		} else {
			return (
				<>
					{days ? (
						<span>
							{zeroPad(days)} : {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
						</span>
					) : (
						<span>
							{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
						</span>
					)}
				</>
			);
		}
	};

	return (
		<div>
			<CountdownTitle>Time Remaining</CountdownTitle>
			<CountdownComponent>
				<Countdown date={endDateMili ? endDateMili : date15MinMilli} renderer={renderer}></Countdown>
			</CountdownComponent>
		</div>
	);
};
export default CountdownTimer;
