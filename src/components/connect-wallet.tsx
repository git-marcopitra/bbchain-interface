import { FC } from 'react';

import Button from '../elements/button';
import { metaMask } from '../sdk';
import hooks from '../sdk';

const {
  usePriorityIsActive,
  usePriorityIsActivating,
  usePriorityConnector,
  useSelectedAccount,
} = hooks;

const ConnectWallet: FC = () => {
  const isActive = usePriorityIsActive();
  const connector = usePriorityConnector();
  const account = useSelectedAccount(connector);
  const isActivating = usePriorityIsActivating();

  if (!isActive && !isActivating)
    return <Button onClick={() => metaMask.activate()}>Connect Wallet</Button>;

  return <Button bg="#55BB55">{account}</Button>;
};

export default ConnectWallet;
