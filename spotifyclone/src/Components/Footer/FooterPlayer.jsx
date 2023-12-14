import React from 'react'

const FooterPlayer = () => {
  return (
    <footer>
        <div class="player-control">
            <p id="durationmedia" style={{color: 'white', textAlign: 'center', marginTop: '24px'}}></p>
            <div class="player-prog">
                <input type="range" name="" id="" />
            </div>
            <div class="controls">
                <div class="control-icons" style={{display: 'flex'}}>
                    <img src="./images/play.png" class="controlplay" alt="" id="playerbtn" onclick="playerplay()" />
                    <img src="./images/pause.png" class="controlpause remove" alt="" id="playerbtnpause" onclick="playerpause()"/>
                </div>
                <div class="control-icons">
                    <img src="./images/previous.png" alt="" />
                </div>
                <div class="control-icons">
                    <img src="./images/next.png" alt="" />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default FooterPlayer