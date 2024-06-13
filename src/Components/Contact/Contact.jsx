// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                <p>Feel free to reach out through contact from or find our contact information below. your feedback, questions, and suggextions are important to us as we strive to provide exceptional service to our university community.</p>
                <ul>
                    <li><img src={mail_icon} alt="" />Hassan.ehsani.am@gmail.com</li>
                    <li><img src={phone_icon} alt="" />+7 977-975-2029</li>
                    <li><img src={location_icon} alt="" />Russain Sant Petersburg</li>
                </ul>
            </div>
            <div className="contact-col">
                <form>
                    <label>Your name</label>
                    <input type="text" name='name' placeholder='Enter Your Name: ' required />
                    <label>Phone Number</label>
                    <input type="text" name='phone' placeholder='Enter your mobile number: ' required />
                    <label>Write your message here</label>
                    <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
                </form>
            </div>
        </div>
    )
}

export default Contact
