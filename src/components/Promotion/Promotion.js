import React from 'react'

import './Promotion.css'

export default function Promotion() {
    return (
        <div className="promotion">
            <div className="video-wrapper">
                <video className="video" id="video" preload="metadata" poster={require('../../images/surfboard.jpg').default}>
                    <source src="https://www.youtube.com/watch?v=W7h-Yho8EB0" type="video/mp4" />
                </video>

                <div className="play-button-wrapper">
                    <div title="Play video" className="play-gif" id="circle-play-b">
                        <img alt="play" src="https://img.icons8.com/emoji/48/000000/play-button-emoji.png"/>
                    </div>
                </div>
            </div>
            <div className="promotionalImg">
                <img alt="surfingPromotionalPicture" src={ require('../../images/surfing6.jpg').default } />
            </div>
            <div className="promotion-text">
                <p>
                    massa sapien faucibus et molestie ac. Fermentum <br />iaculis eu non diam phasellus vestibulum.
                </p>
                <br />
                <span className="Read">Read More</span>
            </div>
        </div>
    )
}
