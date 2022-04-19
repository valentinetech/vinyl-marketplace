import React, { Children, HTMLAttributes, ReactNode } from 'react';
import { ButtonPrimary, ButtonSecondary } from './Button.styles';
import styled from 'styled-components';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode | null;
  variant: 'primary' | 'secondary';
  type?: 'submit' | 'reset';
  onClick?: () => void;
}

export const Button = ({ children, variant = 'primary', ...props }: ButtonProps) => {
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
