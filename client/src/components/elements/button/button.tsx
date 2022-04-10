import React, { Children, HTMLAttributes, ReactNode } from 'react';
import { StyledButton } from './Button.styles';
import styled from 'styled-components';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode | null;
  variant: 'primary' | 'secondary';
  type?: 'submit' | 'reset';
  onClick?: () => void;
}

export const Button = ({ children, variant = 'primary', ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
//One file evertthing - > Refactor to different files
