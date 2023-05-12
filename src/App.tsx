import { FC, useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { Container, Engine } from 'tsparticles-engine';

import ConnectWallet from './components/connect-wallet';
import { particles } from './constants';
import Box from './elements/box';

const App: FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    await console.log(container);
  }, []);

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box width="100vw" height="100vh" position="absolute">
        <Particles
          id="tsparticles"
          options={particles}
          init={particlesInit}
          loaded={particlesLoaded}
        />
      </Box>
      <Box position="relative">
        <ConnectWallet />
      </Box>
    </Box>
  );
};

export default App;
