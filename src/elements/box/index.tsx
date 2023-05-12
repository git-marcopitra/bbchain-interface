import stylin, { StylinComponentProps } from '@stylin.js/react';
import { FC, PropsWithChildren } from 'react';

import { BoxElementProps } from './box';

const BoxElement = stylin<BoxElementProps>('div')();

const Box: FC<PropsWithChildren<StylinComponentProps & BoxElementProps>> = ({
  children,
  ...props
}) => <BoxElement {...props}>{children}</BoxElement>;

export default Box;
