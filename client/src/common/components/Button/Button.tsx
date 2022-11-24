import { HTMLAttributes, ReactNode } from 'react';
import { ButtonPrimary, ButtonSecondary } from './Button.styles';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant?: 'primary' | 'secondary';
	onClick?: () => void;
	disabled?: boolean;
}

const Button = ({ children, variant = 'primary', disabled, ...props }: ButtonProps) => {
	return (
		<>
			{variant === 'primary' ? (
				<ButtonPrimary {...props} disabled={disabled}>
					{' '}
					{children}
				</ButtonPrimary>
			) : (
				<ButtonSecondary {...props} disabled={disabled}>
					{' '}
					{children}
				</ButtonSecondary>
			)}
		</>
	);
};

export default Button;
