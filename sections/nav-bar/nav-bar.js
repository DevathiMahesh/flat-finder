import {
  Box,
  Center,
  ChevronDownIcon,
  Flex,
  HStack,
  Image,
  Input,
  ScrollView,
  Select,
} from 'native-base';
import React, { useState } from 'react';
import { Pressable } from 'react-native';
import logo from '../../assets/logo.png';

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
              <ChevronDownIcon />
              {/* <Menu
                w="190"
                placement="right"
                trigger={(triggerProps) => {
                  console.log(triggerProps);
                  return (
                    <Pressable {...triggerProps}>
                      <ChevronDownIcon />
                    </Pressable>
                  );
                }}
              >
                <Menu.OptionGroup
                  onChange={(value) => console.log(value)}
                  value={menuValue}
                >
                  {menuItems.map((menu) => (
                    <Menu.Item>{menu}</Menu.Item>
                  ))}
                </Menu.OptionGroup>
              </Menu> */}
            </Center>
          </Flex>
        </HStack>
      </ScrollView>
    </Box>
  );
};

export default NavBar;
