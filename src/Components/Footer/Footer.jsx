import React from 'react'
import './Footer.css'
import km_logo from '../../assets/km_logo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer =() => {
    return(
       <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={km_logo} alt="" className='footer-km-logo'/>
                <p>I am a frontend developer from canada with 1 year of experience and intellifence</p>
            </div>

            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your emai' />
                </div>
                <div className="footer-subscribe">
                    Subscribe
                </div>
            </div>
        </div>
        <hr />
       <div className="footer-bottom">
        <div className="footer-bottom-left">
            @2024 kmakadia. All rights reserved 
        </div>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Conect with me</p>

            <p></p>
        </div>
       </div>
       </div>
    )
}
export default Footer