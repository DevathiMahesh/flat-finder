import {
  Box,
  Button,
  Center,
  ChevronDownIcon,
  Flex,
  HStack,
  Image,
  Input,
  Popover,
  ScrollView,
  Select,
} from 'native-base';
import React, { useState } from 'react';
import { Pressable } from 'react-native';
import logo from '../../assets/logo.png';
import profile from '../../assets/profile.svg';
import Login from '../Login/Login';

const cityItems = [
  {
    label: 'Bangalore',
    value: 'Bangalore',
  },
  {
    label: 'Mumbai',
    value: 'Mumbai',
  },
  {
    label: 'Kolkata',
    value: 'Kolkata',
  },
  {
    label: 'Hyderabad',
    value: 'Hyderabad',
  },
];

const menuItems = ['Profile', 'Settings'];

const NavBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const [city, setCity] = useState('');
  const [menuValue, setMenuValue] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log('city', city);

  return (
    <Box>
      <ScrollView>
        <HStack space={0} w="100%" px="0">
          <Flex direction="row" h="20" justify={'space-between'}>
            <Center w="20rem">
              <Image source={logo} alt="logo" width={180} height={8} />
            </Center>
            <Center w="40rem">
              <Flex direction="row">
                <Select
                  selectedValue={city}
                  minWidth="50"
                  accessibilityLabel="Select a City"
                  placeholder="Anywhere..."
                  onValueChange={(itemValue) => setCity(itemValue)}
                >
                  {cityItems.map((cityItem) => (
                    <Select.Item
                      label={cityItem.label}
                      value={cityItem.value}
                    />
                  ))}
                </Select>
                <Input
                  placeholder="Enter the area..."
                  onChange={(e) => setSearchInput(e.target.value)}
                  value={searchInput}
                  width="15rem"
                />
              </Flex>
            </Center>
            <Center w="20rem">
              <Popover
                trigger={(triggerProps) => {
                  return (
                    <Button {...triggerProps} colorScheme="danger">
                      <img src={profile} alt="logo" />
                    </Button>
                  );
                }}
              >
                <Popover.Content accessibilityLabel="Delete Customerd" w="56">
                  <Popover.Header>
                    <Login />
                  </Popover.Header>
                  <Popover.Header>SignUp</Popover.Header>
                </Popover.Content>
              </Popover>
            </Center>
          </Flex>
        </HStack>
      </ScrollView>
    </Box>
  );
};

export default NavBar;
