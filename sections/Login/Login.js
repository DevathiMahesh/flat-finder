import React, { useState } from "react";
import {
  Modal,
  Box,
  HStack,
  Button,
  Text,
  FormControl,
  Input,
  Spinner,
} from "native-base";
import { auth } from "../../firebase.config";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import { useToast } from "native-base";

export default function Login({ setShowSignUpModal, setIsLoggedIn }) {
  const [showLoader, setShowLoader] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const provider = new GoogleAuthProvider();
  const toast = useToast();

  const handleEmailPasswordLogin = () => {
    setShowLoader(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setShowSignUpModal(false);
        setIsLoggedIn(true);
        toast.show({
          render: () => {
            return (
              <Box bg="green.500" px="2" py="1" rounded="sm" mb={5}>
                <Text bold color="white">
                  Logged in successfully
                </Text>
              </Box>
            );
          },
        });
      })
      .catch((_) => {
        toast.show({
          render: () => {
            return (
              <Box bg="red.500" px="2" py="1" rounded="sm" mb={5}>
                <Text bold color="white">
                  Login Failed. Please Try Again.
                </Text>
              </Box>
            );
          },
        });
      });
    setShowLoader(false);
  };
  const handleEmailPasswordSignup = () => {
    setShowLoader(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setShowSignUpModal(false);
        setIsLoggedIn(true);
        toast.show({
          render: () => {
            return (
              <Box bg="green.500" px="2" py="1" rounded="sm" mb={5}>
                <Text bold color="white">
                  Account Created successfully.
                </Text>
              </Box>
            );
          },
        });
      })
      .catch((_) => {
        toast.show({
          render: () => {
            return (
              <Box bg="red.500" px="2" py="1" rounded="sm" mb={5}>
                <Text bold color="white">
                  SignUp Failed. Please Try Again.
                </Text>
              </Box>
            );
          },
        });
      });
    setShowLoader(false);
  };

  const handleGoogleLogin = () => {
    provider.addScope("profile");
    provider.addScope("email");
    signInWithPopup(auth, provider)
      .then(function (result) {
        var token = result.user.accessToken;
        var user = result.user;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setShowSignUpModal(false);
        setIsLoggedIn(true);
        toast.show({
          render: () => {
            return (
              <Box bg="green.500" px="2" py="1" rounded="sm" mb={5}>
                <Text bold color="white">
                  Account Created successfully.
                </Text>
              </Box>
            );
          },
        });
      })
      .catch((_) => {
        toast.show({
          render: () => {
            return (
              <Box bg="red.500" px="2" py="1" rounded="sm" mb={5}>
                <Text bold color="white">
                  SignUp Failed. Please Try Again.
                </Text>
              </Box>
            );
          },
        });
      });
  };

  return (
    <>
      <Modal
        isOpen={true}
        onClose={() => {
          setShowSignUpModal(false);
          setIsLoggedIn(true);
        }}
      >
        <Modal.Content
          maxWidth="400px"
          style={{ marginBottom: "auto", marginTop: "100px" }}
        >
          {showLoader && (
            <Spinner
              size="lg"
              style={{ position: "absolute", top: "45%", left: "45%" }}
            />
          )}
          <Modal.Header>
            Let's Get In
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <HStack justifyContent="center">
              <Button
                onPress={handleEmailPasswordLogin}
                my="10px"
                width="150px"
                mr="10px"
              >
                Login
              </Button>
              <Button
                onPress={handleEmailPasswordSignup}
                my="10px"
                width="150px"
              >
                Signup
              </Button>
            </HStack>
            <Button onPress={handleGoogleLogin}>Sign In With Google</Button>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
}
