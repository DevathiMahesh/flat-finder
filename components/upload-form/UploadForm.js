import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  Heading,
  Image,
  Input,
  NativeBaseProvider,
  useToast,
  VStack,
} from "native-base";
import React, { useState } from "react";
import FlatService from "../../services/flats.services";
import { storage } from "../../firebase.config";
import { Navigate, Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const UploadForm = () => {
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [image, setImage] = React.useState(null);
  const [imageUrl, setImageUrl] = React.useState([]);
  const [percent, setPercent] = React.useState(null);
  const toast = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    if (formData.name === undefined) {
      setErrors({ ...errors, name: "Name is required" });
      return false;
    } else if (formData.name.length < 3) {
      setErrors({ ...errors, name: "Name is too short" });
      return false;
    }

    return true;
  };

  const fileUploadHandler = () => {
    console.log(image);
    if (image === null) return;
    const storageRef = ref(storage, `${image.name}`);
    console.log(storageRef);
    const uploadTask = uploadBytesResumable(storageRef, image);
    console.log(uploadTask.snapshot.state);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
          setImageUrl(url);
        });
      }
    );
  };

  const onSubmit = () => {
    const fullFormData = {
      ...formData,
      urls: [imageUrl],
      likes: 0,
      available: true,
    };
    console.log(fullFormData);
    // console.log(validate());
    // const ser = validate()
    //   ? FlatService.addFlat(fullFormData)
    //   : console.log('Validation Failed');
    // console.log(ser);
    if (validate()) {
      const res = FlatService.addFlat(fullFormData);
      toast.show({
        title: "Hurray! Your ad is posted...",
        placement: "top",
      });
      setIsSubmitted(true);
    } else {
      toast.show({
        title: "Sorry! There was some issue with your form. Try again.",
      });
    }
  };

  return (
    <NativeBaseProvider>
      <Center flex={1} m="5">
        {isSubmitted && <Navigate replace to="/home" />}
        <Flex w="90%" pb="4" justify={"space-between"} direction="row">
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
        <Heading mb="4" mt="3" style={{ color: "#484848" }}>
          Put your Home on Rent
        </Heading>
        <VStack width="90%" mx="3" maxW="300px" mt="2">
          <FormControl isRequired isInvalid={"name" in errors}>
            <FormControl.Label
              _text={{
                bold: true,
              }}
            >
              Name
            </FormControl.Label>
            <Input
              placeholder="John"
              onChangeText={(value) => setData({ ...formData, name: value })}
            />
            {"name" in errors ? (
              <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>
            ) : (
              <FormControl.HelperText>
                Name should contain atleast 3 character.
              </FormControl.HelperText>
            )}
            <FormControl.Label
              _text={{
                bold: true,
              }}
            >
              Area
            </FormControl.Label>
            <Input
              placeholder="Indira Nagar"
              onChangeText={(value) => setData({ ...formData, area: value })}
            />
            {"area" in errors ? (
              <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>
            ) : (
              <FormControl.HelperText>
                Area should contain atleast 2 character.
              </FormControl.HelperText>
            )}
            <FormControl.Label
              _text={{
                bold: true,
              }}
            >
              City
            </FormControl.Label>
            <Input
              placeholder="Bangalore"
              onChangeText={(value) => setData({ ...formData, city: value })}
            />
            {"city" in errors ? (
              <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>
            ) : (
              <FormControl.HelperText>
                City should contain atleast 3 character.
              </FormControl.HelperText>
            )}
            <FormControl.Label
              _text={{
                bold: true,
              }}
            >
              Rent
            </FormControl.Label>
            <Input
              placeholder="10000"
              onChangeText={(value) => setData({ ...formData, rent: value })}
            />
            {"rent" in errors ? (
              <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>
            ) : (
              <FormControl.HelperText>
                Rent should have atleast 1 character.
              </FormControl.HelperText>
            )}
            <FormControl.Label
              _text={{
                bold: true,
              }}
            >
              Deposit
            </FormControl.Label>
            <Input
              placeholder="50000"
              onChangeText={(value) => setData({ ...formData, deposit: value })}
            />
            {"deposit" in errors ? (
              <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>
            ) : (
              <FormControl.HelperText>
                Deposit should contain atleast 3 character.
              </FormControl.HelperText>
            )}
            <FormControl.Label
              _text={{
                bold: true,
              }}
            >
              Size (in Sqft.)
            </FormControl.Label>
            <Input
              placeholder="500"
              onChangeText={(value) => setData({ ...formData, size: value })}
            />
            {"size" in errors ? (
              <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>
            ) : (
              <FormControl.HelperText>
                Size should contain atleast 3 character.
              </FormControl.HelperText>
            )}
            <FormControl.Label
              _text={{
                bold: true,
              }}
            >
              BHK
            </FormControl.Label>
            <Input
              placeholder="2"
              onChangeText={(value) => setData({ ...formData, bhk: value })}
            />
            {"bhk" in errors ? (
              <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>
            ) : (
              <FormControl.HelperText>
                BHK should contain atleast 1 character.
              </FormControl.HelperText>
            )}
            <FormControl.Label
              _text={{
                bold: true,
              }}
            >
              Images
            </FormControl.Label>
            <input
              type={"file"}
              placeholder="Choose Files"
              onChange={(e) => setImage(e.target.files[0])}
              style={{ marginBottom: "10px" }}
            />
            {percent !== null && (
              <p style={{ marginBottom: "10px" }}>
                {percent}% {percent === 100 && "done"}
              </p>
            )}
            <Button onPress={fileUploadHandler}>Upload Image</Button>
          </FormControl>
          <Button
            onPress={onSubmit}
            mt="5"
            colorScheme="cyan"
            isDisabled={percent !== 100}
          >
            Submit
          </Button>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
};

export default UploadForm;
