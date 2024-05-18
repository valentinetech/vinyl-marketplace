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
	const dateToString = endDate.toString();
	const endDateFormated = new Date(dateToString);
	const endDateMili = endDateFormated.getTime();

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
		<>
			{endDateMili ? (
				<div>
					<CountdownTitle>Time Remaining</CountdownTitle>
					<CountdownComponent>
						<Countdown date={endDateMili} renderer={renderer}></Countdown>
					</CountdownComponent>
				</div>
			) : null}
		</>
	);
};
export default CountdownTimer;
