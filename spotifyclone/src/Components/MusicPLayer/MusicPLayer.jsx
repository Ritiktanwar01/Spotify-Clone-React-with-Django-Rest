import React from 'react'
import image from '../Images/logo.jpg'
import next from '../Images/next.png'
import prev from '../Images/previous.png'
import play from '../Images/play.png'

const MusicPLayer = (props) => {
  return (
<div className='musicPlayer'>
    <div className="animated-disc">
      <div className="animated-disc-image">
        <img src={image} alt="" />
      </div>
    </div>
    <div className="music-name">
      <p style={{color:'white'}}>Hass Hass</p>
    </div>
    <div className="music-controls">
      <div className="controls">
        <img src={prev} alt="" />
      </div>
      <div className="controls">
        <img src={play} alt=""/>
      </div>
      <div className="controls">
        <img src={next} alt="" />
      </div>
    </div>
</div>
  )
}

export default MusicPLayer