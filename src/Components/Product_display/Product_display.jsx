import React from 'react';
import './Product_display.css';
import starIcon from '../Assets/star_icon.png';
import starDullIcon from '../Assets/star_dull_icon.png';



function Product_display(props) {
    const product = props;
    console.log(product)
  return (
    <>
    <div className="product-display">
        <div className="product-left-display">
            <div className="product-display-imglist">
                <img src={product.image} alt='product-img'/>
                <img src={product.image} alt='product-img'/>
                <img src={product.image} alt='product-img'/>
                <img src={product.image} alt='product-img'/>
            </div>
            <div className="display-main-img">
                <img src={product.image} className='img-main' alt='img'/>
            </div>
        </div>
        <div className="product-right-display">
            <h1>{product.name}</h1>
            <div className="star-icon">
                <img src={starIcon} alt='star-icon'/>
                <img src={starIcon} alt='star-icon'/>
                <img src={starIcon} alt='star-icon'/>
                <img src={starIcon} alt='star-icon'/>
                <img src={starDullIcon} alt='star-icon'/>
            </div>
        </div>
    </div>

    </>
  )
}

export default Product_display