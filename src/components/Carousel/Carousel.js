import React, { useState } from 'react'

import './carousel.css'


export default function Carousel() {

    let [count, setCount] = useState(1)

    const slides = [
        <div className="SurfingSlide">
            <img src={require('../../images/surfing1.jpg').default } alt="surfingImage" />
            <div className="text">
                <h5>Your</h5>
                <h2>one ipsum</h2>
                <p>Tempor orci dapibus ultrices in iaculis nunc. Netus et malesuada fames ac turpis egestas <br /> integer eget aliquet
                </p>
            </div>
        </div>,
    <div className="SurfingSlide">
        <img alt="surfingPicture" src={require('../../images/surfing2.jpg').default} />
        <div className="text">
            <h5>Your</h5>
            <h2>two ipsum</h2>
            <p>Massa tincidunt dui ut ornare <br />lectus sit amet est placerat. Bibendum<br /> neque egestas congue quisque egestas.
            </p>
        </div>
    </div>,
    <div className="SurfingSlide">
        <img alt="surfingPicture" src={require('../../images/surfing3.jpg').default} />
        <div className="text">
            <h5>Your</h5>
            <h2>three ipsum</h2>
            <p>  pretium. Posuere ac ut consequat semper viverra nam libero. Nibh ipsum consequat nisl <br />vel pretium lectus. Vel orci porta non pulvinar neque laoreet. Porta nibh venenatis cras sed felis eget velit aliquet sagittis.
            </p>
        </div>
    </div>,
    <div className="SurfingSlide">
        <img alt="surfingPicture" src={require('../../images/surfing4.jpg').default} />
        <div className="text">
            <h5>Your</h5>
            <h2>four ipsum</h2>
            <p>Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. A lacus vestibulum sed arcu non odio euismod lacinia at. Netus et malesuada fames ac turpis egestas integer eget. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum.
            </p>
        </div>
    </div>,
    <div className="SurfingSlide">
        <img alt="surfingPicture" src={require('../../images/surfing5.jpg').default} />
        <div className="text">
            <h5>Your</h5>
            <h2>five ipsum</h2>
            <p>Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Euismod quis viverra nibh cras pulvinar mattis nunc. Lobortis scelerisque fermentum dui faucibus in. Vulputate enim nulla aliquet porttitor.
            </p>
        </div>
    </div>
    ]

    const renderCarousel = () => {
        return slides.map((slide, index) =>{
            if(++index === count) {
                return <div>{slide}</div>
            }
            return null
        })
    }

    const reduceCount = () => {
        if(count > 1){
            setCount(--count)
        }
        else{
            setCount(5)
        }
    }

    const increaseCount = () => {
        if(count < 5){
            setCount(++count)
        }
        else{
            setCount(1)
        }
    }

    return (
        <div className="Main-carousel">
            {renderCarousel()}
            <div id="carousel_btn">
                <div className="prev" onClick={() => reduceCount()}>&#10094;</div>
                <div className="numbertext">
                    <span className="counter">{count}</span> / 5
                </div>
                <div className="next" onClick={() => increaseCount()}>&#10095;</div>
            </div>
            <div className="social-icons">
                <ul>
                    <li key="Telegram">
                        <img alt="telegram" width="24" height="24" src="https://img.icons8.com/ios-filled/50/000000/telegram-app.png"/>
                    </li>
                    <li key="Twitter">
                        <svg alt="Twitter" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/></svg>
                    </li>
                    <li key="Vimeo">
                        <svg alt="Vimeo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.82 11.419c-1.306 2.792-4.463 6.595-6.458 6.595-1.966 0-2.25-4.192-3.324-6.983-.527-1.372-.868-1.058-1.858-.364l-.604-.779c1.444-1.27 2.889-2.745 3.778-2.826.998-.096 1.615.587 1.845 2.051.305 1.924.729 4.91 1.472 4.91.577 0 2.003-2.369 2.076-3.215.13-1.24-.912-1.277-1.815-.89 1.43-4.689 7.383-3.825 4.888 1.501z"/></svg>
                    </li>
                </ul>
            </div>
        </div>
    )
}
