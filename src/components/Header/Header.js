import React from 'react'
import styled from 'styled-components'

import Logo from '../../images/logo.png'


import './header.css'
import Burger from './Burger'

const NAV = styled.nav`
    width: 100%;
    height: 55px;
    padding: 0 20px;
    display: flex;
`

export default function Header() {

    return (
        <div className="header_container">
            <div className="Header">
                <NAV className="NAV">
                    <div className="Logo">
                        <img alt="logo" src={Logo}/>
                    </div>
                    <div style={{width: '100%', paddingLeft: '1.5%'}}>
                        <Burger />
                    </div>
                </NAV>
            </div>
            <div className="FSM">
                <pre>First Surfing Magazine</pre>
            </div>
        </div>
    )
}