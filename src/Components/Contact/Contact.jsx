import React from "react";
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from'../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "9c960aa3-421d-4035-a90c-99aaea8e9b39");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
         if (res.success) {
         alert(res.message);

         
        }
      };

    return (
       <div id="contact" className="contact">
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>lets talk </h1>
                <p>I'm currently available to take on new projects, so feel free to me a message about anything that 
                    you want me to work on. you can contact me anytime.</p>
<div className="contact-details">
    <div className="contact-detail">
       <img src={mail_icon} alt="" /> <p> khushimakadia9@gmail.com</p>
    </div>
    
    <div className="contact-detail"> <p>+333-444-555</p>
    <img src={call_icon} alt="" />
    </div>
    
        <div className="contact-detail"> <p>  Toronto, ON, Canada</p>
        <img src={location_icon} alt="" />
    </div>

</div>

            </div>

            <form onSubmit={onSubmit} action="" className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text"  placeholder="Enter your name" name="name" />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder="Enter your email" name="email"/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message"  rows="10" placeholder="write your message here"></textarea>
                <button type="submit" className="contact-submit"> Submit now</button>
            </form>

        </div>

       </div>
    )
}
export default Contact