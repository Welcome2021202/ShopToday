import React, { useContext } from 'react';
import './Style/Shopcategories.css'
import { shopContext } from '../Context/Shopcontext';
import Item from "../Components/Item/Item";
import Offers from '../Components/Offers/Offers';

function Shopcategories(props) {
  const  all_product  = useContext(shopContext);
  

  return (
    <>
      <div className="shop-categories">
        {<Offers />}
      </div>
      <div className="shop-categories-wiese-sort">  
        {
          all_product.map((item, i) => {
            if (props.category === item.category) {
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            } else {
              return null
            }
          })}
      </div>
    </>
  )
}

export default Shopcategories