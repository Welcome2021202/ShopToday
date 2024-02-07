import React from 'react';
import '../Item/Item.css'
import { Link } from 'react-router-dom';

function Item(props) {
    return (
        <>
            <div className="item">
                <Link to={`/product/${props.id}`}>
                <img src={props.image} alt="img"  className='item-imges'/>
                </Link>
                
                <div className="description-box">
                    <h3>Product Name & Description <hr/></h3>
                    <p> {props.name}</p>
                    <div className="item-prise">
                        <div className="item-old-prise">Old Prise:: {props.old_price}</div>
                        <div className="item-new-prise">New Prise:: {props.new_price}</div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Item