import React from 'react'

export default function Carousel() {
    return (
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                {/* <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">1</button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">2</button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">3</button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">4</button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">5</button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">6</button>
                </div> */}
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img alt="surfboard" src={ require('../../images/board1.jpg').default } class="d-block w-100" />
                    </div>
                    <div class="carousel-item">
                        <img alt="surfboard" src={ require('../../images/board2.jpg').default } class="d-block w-100" />
                    </div>
                    <div class="carousel-item">
                        <img alt="surfboard" src={ require('../../images/board3.jpg').default } class="d-block w-100" />
                    </div>
                    <div class="carousel-item">
                        <img alt="surfboard" src={ require('../../images/board4.jpg').default } class="d-block w-100" />
                    </div>
                    <div class="carousel-item">
                        <img alt="surfboard" src={ require('../../images/board5.jpg').default } class="d-block w-100" />
                    </div>
                    <div class="carousel-item">
                        <img alt="surfboard" src={ require('../../images/board6.jpg').default } class="d-block w-100" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
    )
}
