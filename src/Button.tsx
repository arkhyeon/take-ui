import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/css';

export type ButtonProps = {
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  size?: 'lg' | 'md' | 'sm';
};

const SIZES = {
  sm: css`
    --button-font-size: 0.875rem;
    --button-padding: 8px 12px;
    --button-radius: 4px;
  `,
  md: css`
    --button-font-size: 1rem;
    --button-padding: 12px 16px;
    --button-radius: 8px;
  `,
  lg: css`
    --button-font-size: 1.25rem;
    --button-padding: 16px 20px;
    --button-radius: 12px;
  `,
};

const TakeButton = styled.button`
  border: none;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: var(--button-font-size, 1rem);
  padding: var(--button-padding, 12px 16px);
  border-radius: var(--button-radius, 8px);
  background: var(--button-bg-color, #20c977);
  color: var(--button-color, #ffffff);

  &:active,
  &:hover,
  &:focus {
    background: var(--button-hover-bg-color, #025ce2);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #025ce2);
  }
`;

function Button({ children, type, size = 'sm' }: ButtonProps) {
  const sizeStyle: string = SIZES[size];
  return (
    <TakeButton type={type} className={sizeStyle}>
      {children}
    </TakeButton>
  );
}

Button.defaultProps = {
  type: 'button',
  children: null,
  size: 'sm',
};

export default Button;
