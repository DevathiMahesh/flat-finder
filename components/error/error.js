import React from "react";
import fallbackBanner from "../../assets/fallback-banner.png";

function error() {
  return (
    <>
      <Center>
        <Image
          source={{
            uri: { fallbackBanner },
          }}
          alt="Fallback Banner"
          size="xl"
        />
      </Center>
    </>
  );
}

export default error;
