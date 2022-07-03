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
  Button,
  VStack,
  Switch,
  Badge,
} from "native-base";
import React, { useState } from "react";
import CardShimmer from "./CardShimmer";
import FlatCardFallback from "../error/FlatCardFallback";
import Heart from "react-heart";
import FlatService from "../../services/flats.services";
import Gallery from "./Gallery";

const HeartComponent = ({ flatObj }) => {
  const [currentLikes, setCurrentLikes] = useState(flatObj.likes ?? 0);
  const [isClick, setClick] = useState(false);
  const handleUpdateLikes = (likes) => {
    FlatService.updateFlat(flatObj.id, { ...flatObj, likes: likes });
  };
  return (
    <>
      <Flex
        style={{ width: "1rem" }}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Heart
          isActive={isClick}
          onClick={() => {
            if (isClick) {
              setCurrentLikes(currentLikes - 1);
              handleUpdateLikes(currentLikes - 1);
            } else {
              setCurrentLikes(currentLikes + 1);
              handleUpdateLikes(currentLikes + 1);
            }

            setClick(!isClick);
          }}
        />
        <Text>{currentLikes}</Text>
      </Flex>
    </>
  );
};

const AvailableComp = ({ isAvailable, flatObj }) => {
  const [currentAvailable, setCurrentAvailable] = useState(isAvailable);
  const handleUpdateAvailable = (temp) => {
    FlatService.updateFlat(flatObj.id, { ...flatObj, available: temp });
  };
  return (
    <Flex direction="row" justify="center" alignItems="center" ml="55px">
      <Badge mr={2} colorScheme={currentAvailable ? "success" : "danger"}>
        {currentAvailable ? "Available" : "Not Available"}
      </Badge>
      {currentAvailable && (
        <Switch
          isChecked={currentAvailable}
          colorScheme="emerald"
          onToggle={() => {
            handleUpdateAvailable(!currentAvailable);
            setCurrentAvailable(!currentAvailable);
          }}
        />
      )}
    </Flex>
  );
};

const FlatCard = ({ flatLists, showShimmer }) => {
  const [range, setRange] = useState({ start: 0, end: 6 });
  const pageSize = 6;
  const totalPages = parseInt(Math.ceil(flatLists.length / 6));
  const onPageChange = (pageNum) => {
    setRange({ start: pageNum * pageSize, end: pageNum * pageSize + pageSize });
  };
  const [galleryUrls, setShowGalleryUrls] = useState([]);

  return (
    <>
      <Divider />
      {showShimmer ? (
        <HStack
          direction="row"
          flexWrap={"wrap"}
          justify="space-around"
          ml="10"
          mt={"10"}
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
            flexWrap={"wrap"}
            justify="space-around"
            ml={"10"}
            mt={"10"}
          >
            {flatLists.slice(range.start, range.end).map((flatList) => {
              return (
                <Box
                  key={flatList.id}
                  w={80}
                  rounded="lg"
                  overflow="hidden"
                  borderColor="coolGray.200"
                  borderWidth="1"
                  _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700",
                  }}
                  _web={{
                    shadow: 2,
                    borderWidth: 0,
                  }}
                  _light={{
                    backgroundColor: "gray.50",
                  }}
                  mb="10"
                  mr="10"
                >
                  <Box>
                    <AspectRatio w="100%" ratio={16 / 9}>
                      <Image
                        source={{
                          uri: flatList.urls[0],
                        }}
                        alt="image"
                        style={{ cursor: "pointer" }}
                        onClick={() => setShowGalleryUrls(flatList.urls)}
                      />
                    </AspectRatio>
                    <Center
                      bg="red.500"
                      _dark={{
                        bg: "red.400",
                      }}
                      _text={{
                        color: "red.50",
                        fontWeight: "700",
                        fontSize: "xs",
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
                    <HStack justifyContent="space-between">
                      <VStack space={2}>
                        <Heading size="md" ml="-1">
                          {flatList.name}
                        </Heading>
                        <Text
                          fontSize="xs"
                          _light={{
                            color: "red.500",
                          }}
                          _dark={{
                            color: "red.400",
                          }}
                          fontWeight="500"
                          ml="-0.5"
                          mt="-1"
                        >
                          {flatList.area}, {flatList.city}
                        </Text>
                      </VStack>
                      <Box>
                        <HeartComponent flatObj={flatList} key={flatList?.id} />
                      </Box>
                    </HStack>
                    <Flex direction="row" justify={"space-between"}>
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
                      <HStack
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Box>
                          <Text
                            color="coolGray.600"
                            _dark={{
                              color: "warmGray.200",
                            }}
                            fontWeight="400"
                          >
                            6 mins ago
                          </Text>
                        </Box>
                        <Box>
                          <AvailableComp
                            isAvailable={flatList?.available}
                            flatObj={flatList}
                          />
                        </Box>
                      </HStack>
                    </HStack>
                  </Stack>
                </Box>
              );
            })}
          </Flex>
          <Flex direction="row" flexWrap={"wrap"} mb={3}>
            {[...Array(totalPages)].map((page, index) => {
              return (
                <Button
                  onPress={() => {
                    onPageChange(index);
                  }}
                  mr={2}
                  variant={
                    range.start === index * pageSize ? "solid" : "outline"
                  }
                >
                  {index + 1}
                </Button>
              );
            })}
          </Flex>
        </Box>
      )}
      {galleryUrls?.length > 0 && (
        <Box style={{ position: "absolute", top: "50px" }}>
          <Gallery urls={galleryUrls} setShowGalleryUrls={setShowGalleryUrls} />
        </Box>
      )}
    </>
  );
};

export default FlatCard;
