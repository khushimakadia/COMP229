import React from 'react'
import './Hero.css'
import my_photo from '../../assets/my_photo.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () =>{
    return(
        <div id='home' className='hero'> 
        <img src={my_photo} alt="" />
        <h1><span> I'm Khushi Makadia, </span> frontend developer based 
            in Canada.
        </h1>
        <p> "I am a dedicated student at Centennial College, with a strong foundation in front-end development and 
            currently expanding my expertise in software engineering.
            My passion for technology drives me to continuously learn and improve, as I work on building dynamic,
            user-friendly applications that deliver impactful digital experiences." </p>

        
        <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'> Connect with me </AnchorLink></div>
        <div className='hero-resume'>My resume</div>
        </div>
        
    </div>
    )
}
export default Hero