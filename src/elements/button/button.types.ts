import { ButtonHTMLAttributes } from 'react';

export type ButtonElementProps = ButtonHTMLAttributes<
  Omit<HTMLButtonElement, 'color' | 'translate'>
>;
