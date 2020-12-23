import React from 'react'
import { ArrowDownCircle } from 'react-feather';

const Arrow = () => {
    return (
        <div style={{ position: "absolute", bottom: '5%' }}>
            <ArrowDownCircle stroke-width="1" width="30" height="30" style={{ fontSize: "1.5rem", marginTop: ".5rem" }}/>
            <p style={{ fontSize: "1.5rem" }}>Find out more about me</p>
        </div>
    )
}

export default Arrow
