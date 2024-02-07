import React from 'react';
import Banner from '../Components/Banner/Banner';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import Newcollection from '../Components/Newcollection/Newcollection';


function Shop() {
  return (
    <>
      <Offers />
      <Popular />
      <Banner />
      <Newcollection />
    </>
  )
}

export default Shop