import React from 'react'

import './Contact.css'

export default function Contact() {
    return (
        <div className="contact_container">
            <div className="surfImg">
                <img src={ require('../../images/surfing10.jpg').default } alt="surfing" />
            </div>
            <div className="training_text">
                <h6>OUR CAMP</h6>
                <h2>Tincidunt nunc pulvinar<br /> sapien et ligula ullamcorper<br /> malesuada proin libero</h2>
                <span>GET IN TOUCH</span>
            </div>
        </div>
    )
}
