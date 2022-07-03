import React from "react";
import { Image, Modal, AspectRatio } from "native-base";
export default function Gallery({ urls, setShowGalleryUrls }) {
  return (
    <Modal
      isOpen={true}
      onClose={() => {
        setShowGalleryUrls([]);
      }}
    >
      <Modal.Content
        maxWidth="80%"
        maxHeight="80%"
        padding="2%"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        flexWrap="wrap"
      >
        {urls.map((url) => {
          return (
            <AspectRatio w={["90%", "50%", "24%"]} ratio={1 / 1} mr={2} mb={2}>
              <Image
                source={{
                  uri: url,
                }}
                alt="image"
                style={{ cursor: "pointer", marginRight: "2" }}
              />
            </AspectRatio>
          );
        })}
      </Modal.Content>
    </Modal>
  );
}
