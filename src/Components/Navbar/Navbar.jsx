import React, { useState } from 'react';
import '../Navbar/Navbar.css';
import logo from '../Assets/logo.png';
import crat_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menu,setMenu]=useState('Shop');
  return (
    <>
      <div className="nav-bar">
        <div className="nav-logo">
          <p>SHOP TODAY<hr/></p>
          <img src={logo} alt="logo"></img>
        </div>
        <ul className='list-Items'>
          <li onClick={()=>setMenu("shop")}>
            <Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
          <li onClick={()=>setMenu("mens")}>
            <Link to='/mens'>Mens</Link>{menu==="mens"?<hr/>:<></>}</li>
          <li onClick={()=>setMenu("womens")}>
            <Link to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
          <li onClick={()=>setMenu("kids")}>
            <Link to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className='log-in-cart'>
          <button className='btn-login'><Link to='./login'>LOG IN</Link></button>
         <Link to='/cart' ><img src={crat_icon} alt="cart-Icon" /></Link>
          <div className='cart-count'>0</div>
        </div>
      </div>
    </>
  )
}

export default Navbar