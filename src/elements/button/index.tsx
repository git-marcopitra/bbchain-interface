import stylin, { StylinComponentProps } from '@stylin.js/react';
import { FC, PropsWithChildren } from 'react';

import { ButtonElementProps } from './button.types';

const ButtonElement = stylin<ButtonElementProps>('button')();

const Button: FC<
  PropsWithChildren<StylinComponentProps & ButtonElementProps>
> = ({ children, ...props }) => (
  <ButtonElement
    py="1rem"
    px="2rem"
    bg="#5555ff"
    border="none"
    color="#ffffff"
    fontWeight="700"
    cursor="pointer"
    borderRadius="0.5rem"
    transition="transform 300ms ease-in-out"
    nHover={{
      transform: 'translateY(-0.2rem)',
    }}
    {...props}
  >
    {children}
  </ButtonElement>
);

export default Button;
