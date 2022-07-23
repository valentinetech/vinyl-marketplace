import { InputHTMLAttributes, ReactNode } from 'react';
import InputStyles from './Input.styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
}

const Input = ({ children, ...props }: InputProps) => {
  return <InputStyles {...props}>{children}</InputStyles>;
};

export default Input;
