import React from 'react';
import './Breadcums.css';
import ArrowIcon from '../Assets/breadcrum_arrow.png';





 function Breadcums(props) {
  console.log( props);
 const product = props
  
  return (
    <>
      <div className="breadcums">
        Home<img src={ArrowIcon} alt="icon" />
        Shop<img src={ArrowIcon} alt="icon" />
         {product.category}
        <img src={ArrowIcon} alt="icon" />
          {product.name}
       
      </div>
    </>
  )
} 



export default Breadcums

