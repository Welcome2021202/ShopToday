import React from 'react';
import '../Footer/Footer.css';
import Footer_Logo from '../Assets/logo_big.png';
import instagram from '../Assets/instagram_icon.png';
import whtsapp from '../Assets/whatsapp_icon.png';
import printer from '../Assets/pintester_icon.png';


function Footer() {
    return (
        <>
        <div className="footer">
        <div className="main-footer">
                <div className="first-row">
                    <img src={Footer_Logo} alt='Footer-Logo' />
                    <h2>SHOP TODAY <hr /></h2>
                    <p>Here you can use rows and columns<br /> here to organize your footer content.</p>
                </div>
                <div className="second-row">
                    <div className="news-letter">
                        <h1>Get Exclusive On  Your Mail</h1>
                        <p>Subscribe To Our NewsLetter & Stay Update</p>
                        <div className="newsletter-in-bt">
                            <input type='text' className='news-letter-inp' placeholder='subscribe Our NewsLetter'/>
                            <button className='news-letter-btn'>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="third-row">
                    <div className='social-media-img'>
                        <img src={instagram} alt="instagram" />
                        <img src={whtsapp} alt="whtsapp" />
                        <img src={printer} alt="printer" />
                    </div>
                    <p>Contact Number:9577776565</p>
                    <p>Email For Queries:shop@shoptoday.com</p>
                    <h2>SHOP TODAY <br />OUR SHOP</h2>
                    <div className="list-city">
                        <ul className='shops-list'>
                            <ol>Mumbai</ol>
                            <ol>Delhi</ol>
                            <ol>Banglore</ol>
                            <ol>Chennai</ol>
                            <ol>Ranchi</ol>
                            <ol>Kelra</ol>
                        </ul>
                    </div>
                </div>
                
            
            </div>
            <hr/>
            <p className='footer-copyrigth'>Copyrite @ 2024 - All Right Reserved</p>
        </div>
            
       
            
        </>
    )
}

export default Footer   