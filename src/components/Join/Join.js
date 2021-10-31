import React, { useState } from 'react'

import './Join.css'

export default function Join() {

    const [input, setInput] = useState('')

    const onSubmit = Event =>{
        Event.preventDefault();
    }

    return (
        <div class="join_container">
            <div class="join">
                <h2>
                    Join the Club
                </h2>
                <p>
                    Justo donec enim diam vulputate ut pharetra sit amet aliquam.<br /> Egestas egestas fringilla
                </p>
                <div>
                    <form onSubmit={Event => onSubmit(Event)}>
                        <input onChange={Event => setInput(Event.target.value)} value={input} type="text" placeholder="YOUR E-MAIL"/>
                        <button type="submit">&#10095;</button>
                    </form>
                    
                </div>
                
            </div>
        </div>
    )
}
