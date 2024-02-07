import React from 'react';
import '../Offers/Offers.css';
import Exclusive from '../Assets/exclusive_image.png';

function Offers() {
  return (
    <>
    <div className="container">
        <div className="left-container">
            <h1 className='banner-heading'>EXCLUSIVE <br/>OFFERS FOR YOU</h1>
            <p className='offer-para'>ONLY ON BEST SELLER PRODUCT</p>
            <button className='btn-collection'>Check Now</button>
        </div>
        <div className="right-container">
            <img src={Exclusive} alt='banner-image' className='banner-img'/>
        </div>
    </div>
    </>
  )
}

export default Offers