import React, { useState } from 'react'
import logo from '../Images/logo.jpg'
import bell from '../Images/bell.png'
import profile from '../Images/profile.png'
import search from '../Images/search.png'

const Navbar = () => {
    const [show, setshow] = useState(false)
    const handleshow = ()=>{
        setshow(!show)
    }
  return (
    <header>
        <nav>
            <div className="left-brand">
                <div className="brand-img">
                    <img src={logo} alt="logo"/><span>
                        <h2>Spotify</h2>
                    </span>
                </div>
            </div>
            <div className="right-items">
            <div className="notifications">
                <img src={search} alt="" />
                </div>
                <div className={show?"notifications-box":"remove"}>

                </div>
                <div className="notifications" onClick={handleshow}>
                    <img src={bell} alt=""/>
                </div>
                <div className="account">
                    <img src={profile} alt=""/>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar