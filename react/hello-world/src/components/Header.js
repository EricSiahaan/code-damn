import React from 'react'

const amIAbove18 = true

function Header() {
    return <header>
        <h1>Header {amIAbove18 ? <p>
            I am above 18 </p> : <p>I am too small</p>} </h1>
    </header>

}

export default Header

