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
} from "native-base";

export default function Profile({ setActivePage }) {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <Flex mt="2" justifyContent="center" width="md">
      <Box ml="auto" onClick={() => setActivePage("home")}>
        <CloseIcon />
      </Box>
      <HStack justifyContent="space-between" width="xs" mb="2">
        <Box>
          <Image
            width="100px"
            height="100px"
            source={{
              uri: user?.photoURL,
            }}
            alt="profile_image"
          />
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
      <Divider />
    </Flex>
  );
}
