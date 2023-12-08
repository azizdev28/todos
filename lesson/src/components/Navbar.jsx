import React, { useState } from 'react'

const menuBar = () => {
  const [nav , setNav] = useState(false)
 const burgerClick =() =>[
 setNav(!nav)
]

  return (
    <div className='container'>
<div>
    <div className='navbar'>
        <div className='logo'>
            <h1>
                Logo
            </h1>
        </div>
        <div className={nav ?"navbarBlok" : "navbarSite"}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Server</li>
                <li>Register</li>
            </ul>
            
        </div>
        <button className='burger' onClick={ burgerClick}>Buger</button>
    </div>
    </div>
    </div>
  )
}

export default menuBar