import React from 'react';

import { Center, NativeBaseProvider, extendTheme } from 'native-base';
import Login from './Login/Login';
import NavBar from './Nav-Bar/nav-bar';
import FlatCard from '../components/flat-card/flat-card';

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

// extend the theme
export const theme = extendTheme({ config });

export default function FlatFinderMain() {
  return (
    <NativeBaseProvider>
      <Center
        _dark={{ bg: 'blueGray.900' }}
        _light={{ bg: 'blueGray.50' }}
        px={4}
        flex={1}
      >
        <Login />
      </Center>
      <NavBar />
      <FlatCard />
    </NativeBaseProvider>
  );
}
