import { HTMLAttributes } from 'react';

export type BoxElementProps = HTMLAttributes<
  Omit<HTMLDivElement, 'color' | 'translate'>
>;
