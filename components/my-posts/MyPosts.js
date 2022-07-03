import { Center, NativeBaseProvider } from 'native-base';
import React, { useEffect, useState } from 'react';
import FlatCard from '../flat-card/flat-card';
import FlatService from '../../services/flats.services';
import Header from '../header/Header';

const MyPosts = () => {
  const [flatLists, setFlatLists] = useState([]);
  const [showShimmer, setShowShimmer] = useState(true);

  const fetchFlats = async () => {
    const userData = localStorage.getItem('user');
    const parseData = JSON.parse(userData);
    const uid = parseData.uid;
    const flatData = await FlatService.getAllFlats().then((data) =>
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    const filterData = flatData.filter((fd) => fd.userId === uid);
    console.log(flatData);
    setFlatLists(filterData);
    setShowShimmer(false);
  };

  useEffect(() => {
    fetchFlats();
  }, []);

  return (
    <NativeBaseProvider>
      <Center mt="3">
        <Header />
      </Center>
      <FlatCard flatLists={flatLists} showShimmer={showShimmer} />
    </NativeBaseProvider>
  );
};

export default MyPosts;
