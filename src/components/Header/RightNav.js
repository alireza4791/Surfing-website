import React from 'react'
import styled from 'styled-components'


    // flex-flow: row nowrap;

const UL = styled.ul`
    list-style: none;
    display: flex;
    width: 100%;

    @media (max-width: 320px) {
        flex-flow: column nowrap;
        background-color: #0D2538;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: -30px;
        right: 0px;
        height: 100vh;
        width: 400px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        z-index: 10;
        li {
          color: #fff;
          margin-top: 20px;
          margin-left: 20px
        }
      }
`

export default function RightNav({ open }) {
    return (
        <UL open={open}>
            <li key="stories">stories</li>
            <li key="events">events</li>
            <li key="places">places</li>
            <li key="boards">boards</li>
        </UL>
    )
}
