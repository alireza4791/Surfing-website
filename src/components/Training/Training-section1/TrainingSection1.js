import React from 'react'

import '../Training.css'

export default function TrainingSection1() {
    return (
        <div className="training-container1">
            <div className="training_text">
                <div>
                    <h2><span>S</span>urf Training</h2>
                    <span className="number">01</span>
                </div>
                <p>Tincidunt nunc pulvinar sapien et ligula<br /> ullamcorper malesuada proin libero.<br /> Euismod quis viverra nibh cras pulvinar mattis nunc.<br />Lobortis scelerisque fermentum dui faucibus in.</p>
                <span href="#">Read More</span>
            </div>
            <div className="surfImg">
                <img src={ require('../../../images/surfing7.jpg').default } alt="surfing" />
            </div>
        </div>
    )
}
