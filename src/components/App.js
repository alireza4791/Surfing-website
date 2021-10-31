import React, { Component } from 'react'

import Header from './Header/Header'
import Carousel from './Carousel/Carousel'
import Quote from './Quote/Quote'
import SeperatorLine from './SeperatorLine/SeperatorLine'
import Promotion from './Promotion/Promotion'
import Shop from './Shop/Shop'
import TrainingSection1 from './Training/Training-section1/TrainingSection1'
import TrainingSection2 from './Training/Training-section1/TrainingSection2'
import Join from './Join/Join'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

export default class App extends Component {
    render() {
        return (
            <div className="ui container">
                <Header />
                <Carousel />
                <Quote />
                <SeperatorLine />
                <Promotion />
                <Shop />
                <TrainingSection1 />
                <TrainingSection2 />
                <SeperatorLine />
                <Join />
                <Contact />
                <Footer />
            </div>
        )
    }
}
