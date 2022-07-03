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
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
    label: 'Hyderabad',
    value: 'Hyderabad',
  },
  {
    label: 'Gurgoan',
    value: 'Gurgoan',
  },
];

const areaItems = {
  Bangalore: [
    {
      label: 'Marthahalli',
      value: 'Marthahalli',
    },
    {
      label: 'Bellandur',
      value: 'Bellandur',
    },
    {
      label: 'KR Puram',
      value: 'KR Puram',
    },
    {
      label: 'Mahadevapura',
      value: 'Mahadevapura',
    },
    {
      label: 'HSR Layout',
      value: 'HSR Layout',
    },
  ],
  Mumbai: [
    { label: 'Andheri', value: 'Andheri' },
    { label: 'Navi Mumbai', value: 'Navi Mumbai' },
    { label: 'Boraveli', value: 'Boraveli' },
    { label: 'Wankhede', value: 'Wankhede' },
    { label: 'Amrut Nagar', value: 'Amrut Nagar' },
  ],
  Gurgoan: [
    {
      label: 'MG Road',
      value: 'MG Road',
    },
    {
      label: 'DLF City',
      value: 'DLF City',
    },
    {
      label: 'Arjun Nagar',
      value: 'Arjun Nagar',
    },
    {
      label: 'Greenwood City',
      value: 'Greenwood City',
    },
    {
      label: 'Farukh Nagar',
      value: 'Farukh Nagar',
    },
  ],
  Hyderabad: [
    {
      label: 'Jubliee Hills',
      value: 'Jubliee Hills',
    },
    {
      label: 'Sanjay Nagar',
      value: 'Sanjay Nagar',
    },
    {
      label: 'Gachibowli',
      value: 'Gachibowli',
    },
    {
      label: 'Hitech City',
      value: 'Hitech City',
    },
    {
      label: 'DilShuknagar',
      value: 'DilShuknagar',
    },
  ],
};

const menuItems = ['Profile', 'Settings'];

const NavBar = ({ setActivePage, fetchFlatsOnSearch }) => {
  const [area, setArea] = useState('');
  const [city, setCity] = useState('');
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogOut = () => {
    setIsLoggedIn(false);
    signOut(auth);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    toast.show({
      render: () => {
        return (
          <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
            <Text bold color="white">
              Logged Out Successfully.
            </Text>
          </Box>
        );
      },
    });
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Box>
      <ScrollView>
        <HStack space={0} px="0">
          <Flex
            direction="row"
            h="20"
            w="100%"
            pl="10"
            pr="10"
            justify={'space-between'}
          >
            <Center>
              <Image
                source={logo}
                alt="logo"
                width={180}
                height={8}
                style={{ cursor: 'pointer' }}
                onClick={() => window.location.reload()}
              />
            </Center>
            <Center>
              <Flex direction="row">
                <Select
                  selectedValue={city}
                  minWidth="50"
                  accessibilityLabel="Select a City"
                  placeholder="Choose One..."
                  onValueChange={(itemValue) => {
                    setCity(itemValue);
                    setArea('');
                  }}
                  mr="2"
                >
                  {cityItems.map((cityItem, index) => (
                    <Select.Item
                      label={cityItem.label}
                      value={cityItem.value}
                      key={index}
                    />
                  ))}
                </Select>
                <Select
                  selectedValue={area}
                  minWidth="50"
                  accessibilityLabel="Select Area"
                  placeholder="Choose One..."
                  onValueChange={(itemValue) => setArea(itemValue)}
                  mr="2"
                >
                  {areaItems[city]?.map((areaItem) => (
                    <Select.Item
                      label={areaItem.label}
                      value={areaItem.value}
                    />
                  ))}
                </Select>
                <Button onPress={() => fetchFlatsOnSearch(city, area)}>
                  Search
                </Button>
              </Flex>
            </Center>
            <Center>
              <Button colorScheme={'red'}>
                <Link
                  to="/create-post"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  Add Post
                </Link>
              </Button>
            </Center>
            <Center>
              <Popover
                trigger={(triggerProps) => {
                  return (
                    <Button
                      {...triggerProps}
                      colorScheme="white"
                      style={{
                        border: '1.5px solid #ff585d',
                      }}
                    >
                      <img src={profile} alt="logo" />
                    </Button>
                  );
                }}
              >
                <Popover.Content accessibilityLabel="Delete Customerd" w="56">
                  <Popover.Header>
                    {isLoggedIn ? (
                      <>
                        <Button
                          onPress={() => {
                            setActivePage('profile');
                          }}
                          mb="2"
                        >
                          Profile
                        </Button>
                        <Button onPress={handleLogOut}>Logout</Button>
                      </>
                    ) : (
                      <Button onPress={() => setShowSignUpModal(true)} mb="2">
                        Login / Signup
                      </Button>
                    )}
                  </Popover.Header>
                </Popover.Content>
              </Popover>
            </Center>
          </Flex>
        </HStack>
      </ScrollView>
      {showSignUpModal && (
        <Box>
          <Login
            setShowSignUpModal={setShowSignUpModal}
            setIsLoggedIn={setIsLoggedIn}
          />
        </Box>
      )}
    </Box>
  );
};

export default NavBar;
