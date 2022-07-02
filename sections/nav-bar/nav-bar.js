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
} from "native-base";
import React, { useEffect, useState } from "react";
import { Pressable } from "react-native";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.svg";
import Login from "../Login/Login";

const cityItems = [
  {
    label: "Bangalore",
    value: "Bangalore",
  },
  {
    label: "Mumbai",
    value: "Mumbai",
  },
  {
    label: "Kolkata",
    value: "Kolkata",
  },
  {
    label: "Hyderabad",
    value: "Hyderabad",
  },
];

const menuItems = ["Profile", "Settings"];

const NavBar = ({ setActivePage }) => {
  const [searchInput, setSearchInput] = useState("");
  const [city, setCity] = useState("");
  const [menuValue, setMenuValue] = useState(null);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log("city", city);
  const handleLogOut = () => {
    setIsLoggedIn(false);
    signOut(auth);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
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

  return (
    <Box>
      <ScrollView>
        <HStack space={0} w="100%" px="0">
          <Flex direction="row" h="20" justify={"space-between"}>
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
                    {isLoggedIn ? (
                      <>
                        <Button
                          onPress={() => {
                            setActivePage("profile");
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
