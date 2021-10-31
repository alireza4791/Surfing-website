import React, { useState } from 'react'

import './Shop.css'
import Carousel from './Carousel'
// style={{backgroundImage: require('../../images/ocean.png')}}

export default function Shop() {

    let [Count, setCount] = useState(0)

    const boards = [
        <div className="boards">
            <div>
                <img alt="surfboard" src={ require('../../images/board1.jpg').default } />
                <div className="surfB-name">
                    <h5>Funboards</h5>
                    <h3>boardName</h3>
                </div>
                <div className="boardPrice">
                    <h4>&#36;800</h4>
                    <h5>Buy</h5>
                </div>
            </div>
            <div>
                <img alt="surfboard" src={ require('../../images/board2.jpg').default } />
                <div className="surfB-name">
                    <h5>Funboards</h5>
                    <h3>boardName</h3>
                </div>
                <div className="boardPrice">
                    <h4>&#36;890</h4>
                    <h5>Buy</h5>
                </div>
            </div>
            <div>
                <img alt="surfboard" src={ require('../../images/board3.jpg').default } />
                <div className="surfB-name">
                    <h5>Surfboards</h5>
                    <h3>boardName</h3>
                </div>
                <div className="boardPrice">
                    <h4>&#36;570</h4>
                    <h5>Buy</h5>
                </div>
            </div>
        </div>,
        <div className="boards">
            <div>
                <img alt="surfboard" src={ require('../../images/board4.jpg').default } />
                <div className="surfB-name">
                    <h5>Surfboards</h5>
                    <h3>boardName</h3>
                </div>
                <div className="boardPrice">
                    <h4>&#36;730</h4>
                    <h5>Buy</h5>
                </div>
            </div>
            <div>
                <img alt="surfboard" src={ require('../../images/board5.jpg').default } />
                <div className="surfB-name">
                    <h5>Surfboards</h5>
                    <h3>boardName</h3>
                </div>
                <div className="boardPrice">
                    <h4>&#36;680</h4>
                    <h5>Buy</h5>
                </div>
            </div>
            <div>
                <img alt="surfboard" src={ require('../../images/board6.jpg').default } />
                <div className="surfB-name">
                    <h5>Funboards</h5>
                    <h3>boardName</h3>
                </div>
                <div className="boardPrice">
                    <h4>&#36;1000</h4>
                    <h5>Buy</h5>
                </div>
            </div>
        </div>
    ]

    const PreviousBoard = () => {
        console.log('1')
        if(Count === 1){
            setCount(--Count)
        }else if (Count === 0){
            setCount(++Count)
        }
    }

    const NextBoard = () => {
        if(Count === 0){
            setCount(++Count)
        }else if (Count === 1){
            setCount(--Count)
        }
    }


    const renderBoards = () => {
        return boards.map((board, index) => {
            if(index === Count) {
                return <div>{board}</div>
            }
            return null
        })
    }

    const renderSlider = () => {
        if(window.innerWidth > 320) {
            return renderBoards()
        } else {
            return (
                <div>
                    <Carousel />
                </div>
            )
        }
    }

    return (
        <div className="shop-container">
            <div className="shop-header">
                <h5>Shop</h5>
                <h2>Surfboards</h2>
            </div>
            <br />
            <div className="b-carousel">
                { renderSlider() }
                <div
                    className="prev" 
                    onClick={() => PreviousBoard()}>
                    &#10094;
                </div>
                <div
                    className="next" 
                    onClick={() => NextBoard()}>
                    &#10095;
                </div>
            </div>
            <div className="show-boards">
                <a href="#">Show all</a>
            </div>
        </div>
    )
}
