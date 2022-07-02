import {
  AspectRatio,
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from 'native-base';
import React from 'react';

const flatLists = [
  {
    houseName: 'Mannat',
    area: 'Bandra',
    city: 'Mumbai',
    size: '680sq.ft',
    bhk: '2',
    price: {
      rent: 30000,
      deposit: 150000,
    },
  },
  {
    houseName: 'Galaxy',
    area: 'Bandra',
    city: 'Mumbai',
    size: '680sq.ft',
    bhk: '2',
    price: {
      rent: 30000,
      deposit: 150000,
    },
  },
  {
    houseName: 'Daisy House',
    area: 'Bandra',
    city: 'Mumbai',
    size: '680sq.ft',
    bhk: '2',
    price: {
      rent: 30000,
      deposit: 150000,
    },
  },
  {
    houseName: 'Raj Avenue',
    area: 'Bandra',
    city: 'Mumbai',
    size: '680sq.ft',
    bhk: '2',
    price: {
      rent: 30000,
      deposit: 150000,
    },
  },
  {
    houseName: 'SG Apartment',
    area: 'Bandra',
    city: 'Mumbai',
    size: '680sq.ft',
    bhk: '2',
    price: {
      rent: 30000,
      deposit: 150000,
    },
  },
  {
    houseName: 'Balaji Homes',
    area: 'Bandra',
    city: 'Mumbai',
    size: '680sq.ft',
    bhk: '2',
    price: {
      rent: 30000,
      deposit: 150000,
    },
  },
];

const FlatCard = () => {
  return (
    <>
      <Divider />
      <Box alignItems="center">
        <Flex direction="row" flexWrap={'wrap'} justify="space-around" m={'10'}>
          {flatLists.map((flatList) => {
            return (
              <Box
                w={80}
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                _dark={{
                  borderColor: 'coolGray.600',
                  backgroundColor: 'gray.700',
                }}
                _web={{
                  shadow: 2,
                  borderWidth: 0,
                }}
                _light={{
                  backgroundColor: 'gray.50',
                }}
                mb="10"
              >
                <Box>
                  <AspectRatio w="100%" ratio={16 / 9}>
                    <Image
                      source={{
                        uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
                      }}
                      alt="image"
                    />
                  </AspectRatio>
                  <Center
                    bg="red.500"
                    _dark={{
                      bg: 'red.400',
                    }}
                    _text={{
                      color: 'red.50',
                      fontWeight: '700',
                      fontSize: 'xs',
                    }}
                    position="absolute"
                    bottom="0"
                    px="3"
                    py="1.5"
                  >
                    PHOTOS
                  </Center>
                </Box>
                <Stack p="4" space={3}>
                  <Stack space={2}>
                    <Heading size="md" ml="-1">
                      {flatList.houseName}
                    </Heading>
                    <Text
                      fontSize="xs"
                      _light={{
                        color: 'red.500',
                      }}
                      _dark={{
                        color: 'red.400',
                      }}
                      fontWeight="500"
                      ml="-0.5"
                      mt="-1"
                    >
                      {flatList.area}
                    </Text>
                  </Stack>
                  <Flex direction="row" justify={'space-between'}>
                    <Text fontWeight="400">
                      <b>&#8377; {flatList.price.rent}</b>/month
                    </Text>
                    <Text fontWeight="400">
                      Deposit <b>&#8377;{flatList.price.deposit}</b>
                    </Text>
                    <Text fontWeight="400">{flatList.bhk} BHK</Text>
                  </Flex>
                  <HStack
                    alignItems="center"
                    space={4}
                    justifyContent="space-between"
                  >
                    <HStack alignItems="center">
                      <Text
                        color="coolGray.600"
                        _dark={{
                          color: 'warmGray.200',
                        }}
                        fontWeight="400"
                      >
                        6 mins ago
                      </Text>
                    </HStack>
                  </HStack>
                </Stack>
              </Box>
            );
          })}
        </Flex>
      </Box>
    </>
  );
};

export default FlatCard;
