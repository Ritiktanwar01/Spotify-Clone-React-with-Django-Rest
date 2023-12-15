import React from 'react'

const FooterPlayer = () => {
  return (
    <footer>
        <div className="player-control">
            <p id="durationmedia" style={{color: 'white', textAlign: 'center', marginTop: '24px'}}></p>
            <div className="player-prog">
                <input type="range" name="" id="" />
            </div>
            <div className="controls">
                <div className="control-icons" style={{display: 'flex'}}>
                    <img src="./images/play.png" className="controlplay" alt="" />
                    <img src="./images/pause.png" className="controlpause remove" alt=""/>
                </div>
                <div className="control-icons">
                    <img src="./images/previous.png" alt=""/>
                </div>
                <div className="control-icons">
                    <img src="./images/next.png" alt="" />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default FooterPlayer