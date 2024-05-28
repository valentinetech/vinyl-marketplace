import { InputHTMLAttributes } from 'react';
import InputStyles from './Input.styles';

const Input = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {
	return <InputStyles {...props} />;
};

export default Input;
