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
import React, { useState } from 'react';
import CardShimmer from './CardShimmer';
import FlatCardFallback from '../error/FlatCardFallback';

const FlatCard = ({ flatLists, showShimmer }) => {
  return (
    <>
      <Divider />
      {showShimmer ? (
        <HStack
          direction="row"
          flexWrap={'wrap'}
          justify="space-around"
          mr={'-10'}
          mt={'10'}
        >
          <CardShimmer />
          <CardShimmer />
          <CardShimmer />
          <CardShimmer />
          <CardShimmer />
          <CardShimmer />
          <CardShimmer />
          <CardShimmer />
        </HStack>
      ) : flatLists?.length === 0 ? (
        <FlatCardFallback />
      ) : (
        <Box display="flex" alignItems="center">
          <Flex
            direction="row"
            flexWrap={'wrap'}
            justify="space-around"
            mr={'-10'}
            mt={'10'}
          >
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
                  mr="10"
                  key={flatList.id}
                >
                  <Box>
                    <AspectRatio w="100%" ratio={16 / 9}>
                      <Image
                        source={{
                          uri: flatList.urls[0],
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
                        {flatList.name}
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
                        {flatList.area}, {flatList.city}
                      </Text>
                    </Stack>
                    <Flex direction="row" justify={'space-between'}>
                      <Text fontWeight="400">
                        <b>&#8377; {flatList.rent}</b>/month
                      </Text>
                      <Text fontWeight="400">
                        Deposit <b>&#8377;{flatList.deposit}</b>
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
      )}
    </>
  );
};

export default FlatCard;
