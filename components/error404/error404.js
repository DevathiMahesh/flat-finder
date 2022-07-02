import React from "react";
import { Alert } from "native-base";

function Error404() {
  return (
    <Center>
      <Alert w="90%" maxW="400" status="info" colorScheme="info">
        <VStack space={2} flexShrink={1} w="100%">
          <HStack
            flexShrink={1}
            space={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <HStack flexShrink={1} space={2} alignItems="center">
              <Alert.Icon />
              <Text fontSize="md" fontWeight="medium" color="coolGray.800">
                404 Error
              </Text>
            </HStack>
            <IconButton
              variant="unstyled"
              _focus={{
                borderWidth: 0,
              }}
              icon={<CloseIcon size="3" color="coolGray.600" />}
            />
          </HStack>
          <Box
            pl="6"
            _text={{
              color: "coolGray.600",
            }}
          >
            Oh snap! This page does not exists!
          </Box>
        </VStack>
      </Alert>
    </Center>
  );
}

export default Error404;
