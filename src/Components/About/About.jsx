import React from "react";
import './About.css'
import theme_pattern from'../../assets/theme_pattern.svg'
import my_photo from'../../assets/my_photo.jpg'

const About =() => {
    return(
        <div id="about" className="about">
            <div className="about-title">
                <h1>About me </h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={my_photo} alt="" style={{width:"100%", height:"70%"}} />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>
                        "I am a student at Centennial College with a strong background in front-end development and currently studying software engineering. My technical skills include Python, C++/C, HTML, CSS, Java, JavaScript, Git, Linux, Microsoft Office, data structures, algorithms, digital logic design, and web design. I am passionate about creating efficient and user-friendly applications, and I continuously seek opportunities to enhance my knowledge in both software and web development."
                        </p>
                        <p>
                        "I am a dedicated student at Centennial College, with a strong foundation in front-end development and currently expanding my expertise in software engineering. My passion for technology drives me to continuously learn and improve, as I work on building dynamic, user-friendly applications that deliver impactful digital experiences."
                        </p>
                        <div className="about-skills">                    
                        <div className="about-skill"><p> HTML &CSS</p> <hr style ={{width:"50%"}} /></div>
                        <div className="about-skill"><p> React JS</p> <hr style ={{width:"50%"}} /></div>
                        <div className="about-skill"><p> Javascript</p> <hr style ={{width:"50%"}} /></div>
                        <div className="about-skill"><p> Node JS</p> <hr style ={{width:"50%"}} /></div>   
                        </div>
                    </div>

                </div>

                </div>
                <div className="about-achievements">
                    <div className="about-achievement">
                        <h1>1+</h1>
                        <p>years of experience</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1>6+</h1>
                        <p>projects completed</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1>1+</h1>
                        <p>happy clients</p>
                    </div>

                
            </div>

        </div>
    )

}
export default About