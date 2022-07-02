import React from 'react';

import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
<<<<<<< HEAD
} from "native-base";
import Login from "./Login/Login";
=======
} from 'native-base';
import NavBar from './Nav-Bar/nav-bar';
>>>>>>> 127ee23 (Navbar created)

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
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <Login />
      </Center>
      <NavBar />
    </NativeBaseProvider>
  );
}
