import React, { useState } from "react";

import { Center, NativeBaseProvider, extendTheme } from "native-base";
import Login from "./Login/Login";
import NavBar from "./Nav-Bar/nav-bar";
import FlatCard from "../components/flat-card/flat-card";
import Profile from "./Profile/profile";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function FlatFinderMain() {
  const [activePage, setActivePage] = useState("home");
  return (
    <NativeBaseProvider>
      {activePage === "home" && (
        <>
          <NavBar setActivePage={setActivePage} />
          <FlatCard />
        </>
      )}
      {activePage === "profile" && <Profile setActivePage={setActivePage} />}
    </NativeBaseProvider>
  );
}
