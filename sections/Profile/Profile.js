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
} from "native-base";

export default function Profile({ setActivePage }) {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
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
  );
}
