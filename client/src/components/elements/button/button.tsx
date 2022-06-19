import { HTMLAttributes, ReactNode } from 'react';
import { ButtonPrimary, ButtonSecondary } from './Button.styles';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

const Button = ({ children, variant = 'primary', ...props }: ButtonProps) => {
  return (
    <>
      {variant === 'primary' ? (
        <ButtonPrimary {...props}> {children}</ButtonPrimary>
      ) : (
        <ButtonSecondary {...props}> {children}</ButtonSecondary>
      )}
    </>
  );
};

export default Button;
