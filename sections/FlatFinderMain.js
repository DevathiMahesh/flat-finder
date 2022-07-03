import React, { useState, useEffect } from 'react';

import { Center, NativeBaseProvider, extendTheme } from 'native-base';
import Login from './Login/Login';
import NavBar from './Nav-Bar/nav-bar';
import FlatCard from '../components/flat-card/flat-card';
import Profile from './Profile/profile';
import FlatService from '../services/flats.services';

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

// extend the theme
export const theme = extendTheme({ config });

export default function FlatFinderMain() {
  const [activePage, setActivePage] = useState('home');
  const [flatLists, setFlatLists] = useState([]);
  const [showShimmer, setShowShimmer] = useState(true);

  const fetchFlats = async () => {
    const flatData = await FlatService.getAllFlats().then((data) =>
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    console.log(flatData);
    setFlatLists(flatData);
    setShowShimmer(false);
  };

  const fetchFlatsOnSearch = async (city, area) => {
    setShowShimmer(true);
    const flatData = await FlatService.getFlatsOnSearch(city, area).then(
      (data) => data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    console.log(flatData);
    setFlatLists(flatData);
    setShowShimmer(false);
  };

  useEffect(() => {
    fetchFlats();
  }, []);

  return (
    <NativeBaseProvider>
      <NavBar setActivePage={setActivePage} />
      {activePage === 'home' && (
        <>
          <NavBar
            setActivePage={setActivePage}
            fetchFlatsOnSearch={fetchFlatsOnSearch}
          />
          <FlatCard flatLists={flatLists} showShimmer={showShimmer} />
        </>
      )}
      {activePage === 'profile' && <Profile setActivePage={setActivePage} />}
    </NativeBaseProvider>
  );
}
