import React from 'react'

function Navbar({ isLoggedIn, setIsLoggedIn }) {
    if(!isLoggedIn) {
        return <button onClick={() => setIsLoggedIn(true)}>Login</button>
    }
    return <button onClick={() => setIsLoggedIn(false)}>Logout</button>
}

export default Navbar