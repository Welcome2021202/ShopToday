import React from 'react';
import '../Newcollection/Newcollection.css';
import new_collections from '../Assets/new_collections.js';
import Item from '../Item/Item';

function Newcollection() {
  return (
    <>
    <div className="new-collection">
                <h1 className='new-collection-heading'><hr/>NEW COLLECTION<hr/></h1>

                <div className="new-collection-product">
                    {
                        new_collections.map((item,i) => {
                            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                        })
                    }
                </div>
            </div>
    </>
  )
}

export default Newcollection