import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import{ shopContext } from '../Context/Shopcontext'
import Breadcums from '../Components/Breadcums/Breadcums';
import Product_display from '../Components/Product_display/Product_display';


function Product() {
  const  all_product  = useContext(shopContext);
  const  productId  = useParams();
  const product = all_product;
  product.find((item) => item.id === Number(productId.productId));
  

  return (
    <>
      <Breadcums product ={product}/>
      <Product_display product={product}/>
    </>
  )
}

export default Product


