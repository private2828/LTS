import React from 'react'
import location_icon from './assets/Images/location-icon.png'
import mail_icon from './assets/Images/mail-icon.png'
import msg_icon from './assets/Images/msg-icon.png'
import phone_icon from './assets/Images/phone-icon.png'
import white_arrow from './assets/Images/white-arrow.png'
import './ContactUs.css'
import Footer from '../../components/Footer/Footer'

const ContactUs = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e69753e0-4956-44ea-b2f3-3ee4966b8421");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };




  return (
    <>
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /> </h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggesttions are important to us as we strive to provide exceptional service to our university community.</p>
      <ul>
        <li><img src={mail_icon} alt="" /> Contact@chetan.mallah</li>
      <li> <img src={phone_icon} alt="" />+91 1800-244-3201</li>
      <li> <img src={location_icon} alt="" />456 Oak Street, Springfield
CA 12345, India</li>
      </ul>
        </div>
        <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your full name' required/>
            <label >Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            <label >Gmail</label>
            <input type="email" name='email' placeholder='Enter your working  Gmail ' required/>
            <label >Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message here' required></textarea>
       <button type = 'submit' className='btn dark-btn'>
        Submit Now 
       </button>
        </form>
        <span>{result}</span>
    </div>
    
    </div>
    <Footer/>
    </>
    
  )
}

export default ContactUs;