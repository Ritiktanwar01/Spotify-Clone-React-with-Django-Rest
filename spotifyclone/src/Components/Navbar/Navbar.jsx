import React, { useState } from 'react'
import logo from '../Images/logo.jpg'
import bell from '../Images/bell.png'
import profile from '../Images/profile.png'
import search from '../Images/search.png'
// import { Link,useNavigate} from 'react-router-dom'
import { Link} from 'react-router-dom'

const Navbar = () => {
    const [show, setshow] = useState(false)
    const [shownew, setshownew] = useState(false)
    const handleshow = ()=>{
        setshow(!show)
    }
    const handleshownew = ()=>{
        setshownew(!shownew)
    }
  return (
    <header>
        <nav>
            <div className="left-brand">
                <div className="brand-img">
                    <img src={logo} alt="logo"/><span>
                        < Link to={'/'}><h2>Spotify</h2></Link>
                    </span>
                </div>
            </div>
            <div className="right-items">
            <div className="notifications">
                <Link to={'search'}><img src={search} alt="" /></Link>
                </div>
                <div className={show?"notifications-box":"remove"}>
                    <h1 style={{textAlign:'center'}}>Notifications</h1>
                </div>
                <div className="notifications" onClick={handleshow}>
                    <img src={bell} alt=""/>
                </div>
                <div className="account" onClick={handleshownew}>
                    <img src={profile} alt=""/>
                </div>
                <div className={shownew?"notifications-box":"remove"}>
                    <img src={profile} alt=""/>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar