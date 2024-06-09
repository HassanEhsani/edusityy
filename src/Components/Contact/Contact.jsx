// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                <p>Feel free to reach out through contact from or find our contact information below. your feedback, questions, and suggextions are important to us as we strive to provide exceptional service to our university community.</p>
                <ul>
                    <li>Hassan.ehsani.am@gmail.com</li>
                    <li>+7 977-975-2029</li>
                    <li>Russain Sant Petersburg</li>
                </ul>
            </div>
            <div className="contact-col"></div>
        </div>
    )
}

export default Contact
