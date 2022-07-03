import React, { useEffect, useState } from "react";
import {
  Box,
  HStack,
  VStack,
  Text,
  Button,
  Image,
  Container,
  Center,
  Divider,
  CloseIcon,
  Flex,
  Heading,
  Avatar,
  NativeBaseProvider,
} from "native-base";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Profile({ setActivePage }) {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <NativeBaseProvider>
      <Flex w="90%" m="2" justify={"space-between"} direction="row">
        <Image
          source={logo}
          alt="logo"
          width={180}
          style={{ cursor: "pointer" }}
        />
        <Button colorScheme={"red"}>
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            Go to Homepage
          </Link>
        </Button>
      </Flex>
      <Divider />
      <Flex mt="2" justifyContent="center" width="90%">
        <Center>
          <HStack
            justifyContent="space-between"
            alignItems="center"
            space={4}
            width="xs"
            mb="2"
            p="2"
          >
            <Box rounded>
              <Avatar
                bg="purple.600"
                alignSelf="center"
                size="2xl"
                source={{
                  uri: user?.photoURL,
                }}
              >
                Profile
              </Avatar>
            </Box>
            <Box>
              <Text fontSize="md" bold>
                {user?.displayName}{" "}
              </Text>
              <Text fontSize="md" bold>
                {user?.email}
              </Text>
              <Text fontSize="md" bold>
                {9876543210}
              </Text>
            </Box>
          </HStack>
        </Center>
      </Flex>
    </NativeBaseProvider>
  );
}
