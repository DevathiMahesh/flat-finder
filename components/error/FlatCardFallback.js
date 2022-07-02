import React from "react";
import fallbackBanner from "../../assets/fallback-banner.png";
import { Center, Image } from "native-base";

export default function FlatCardFallback() {
  return (
    <>
      <Center>
        <Image
          source={require("../../assets/fallback-banner.png")}
          alt="Fallback Banner"
          width="80%"
          height="350px"
          marginTop="100px"
        />
      </Center>
    </>
  );
}
