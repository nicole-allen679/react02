import React from 'react'
import Navbar from './Navbar'

function Header({ isLoggedIn, setIsLoggedIn }) {
    return (
    <>
    <Navbar
     isLoggedIn={isLoggedIn} 
     setIsLoggedIn={setIsLoggedIn} />
    <h1>Welcome {isLoggedIn ? 'back' : 'guest'}! </h1>
    </>
    )
}

export default Header