import { Button, Flex, Image, NativeBaseProvider } from 'native-base';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <Flex w="90%" pb="4" justify={'space-between'} direction="row">
      <Image
        source={logo}
        alt="logo"
        width={180}
        style={{ cursor: 'pointer' }}
      />
      <Button colorScheme={'red'}>
        <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>
          Go to Homepage
        </Link>
      </Button>
    </Flex>
  );
};

export default Header;
