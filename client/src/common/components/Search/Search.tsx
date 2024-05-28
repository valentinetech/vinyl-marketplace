import { InputHTMLAttributes } from 'react';
import { Container, Input } from './Search.styles';

const Search = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {
	return (
		<Container>
			<Input placeholder="Search..." {...props} />
		</Container>
	);
};

export default Search;
