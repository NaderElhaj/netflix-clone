import React, { useEffect, useState } from 'react'
import './nav.css'

function Nav() {
    const [show, handleShow] = useState(false);
    const transitionNavBar = () => {
        if(window.scrollY>100){
            handleShow(true)
        }else{
            handleShow(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    },[])
  return (
    <div className={`nav ${show && 'nav_black' } `}>
        <div className="nav_contents">

        <img src="/images/netflix-logo.png" alt="Netflix" className='nav_logo' />
        <img src="/images/me.jpg" alt="Avatar"  className='nav_avatar' />
        </div>
    </div>
  )
}

export default Nav