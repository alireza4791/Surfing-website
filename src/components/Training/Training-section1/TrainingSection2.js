import React from 'react'

import '../Training.css'

export default function TrainingSection2() {
    return (
        <div className="training-container2">
            <div className="surfImg">
                <img src={ require('../../../images/surfing8.jpg').default } alt="surfing" />
            </div>
            <div className="training_text">
                <div>
                    <h2><span>P</span>oint Break</h2>
                    <span className="number">02</span>
                </div>
                <p>Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Euismod quis viverra nibh cras pulvinar mattis nunc. Lobortis scelerisque fermentum dui faucibus in. Vulputate enim nulla aliquet porttitor.</p>
                <span>Read More</span>
            </div>
        </div>
    )
}
