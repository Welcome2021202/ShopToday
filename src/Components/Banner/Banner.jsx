import React from 'react';
import '../Banner/Banner.css'
import handImg from '../Assets/hand_icon.png';
import bannerImg from '../Assets/hero_image.png';

function Banner() {
  return (
    <>
    <div className="container">
        <div className="left-container">
            <h1 className='banner-heading'>NEW COLLECTION<br />FOR EVEERYONE</h1>
            <button className='btn-collection'>Latest Collection</button>
        </div>
        <div className="right-container">
            <img src={bannerImg} alt='banner-image' className='banner-img'/>
        </div>
    </div>
    </>
  )
}

export default Banner