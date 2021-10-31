import React from 'react'

import './Contact.css'

export default function Contact() {
    return (
        <div class="contact_container">
            <div class="surfImg">
                <img src={ require('../../images/surfing10.jpg').default } alt="surfing" />
            </div>
            <div class="training_text">
                <h6>OUR CAMP</h6>
                <h2>Tincidunt nunc pulvinar<br /> sapien et ligula ullamcorper<br /> malesuada proin libero</h2>
                <a href="#">GET IN TOUCH</a>
            </div>
        </div>
    )
}
