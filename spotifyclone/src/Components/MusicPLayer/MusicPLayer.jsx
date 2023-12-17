import React from 'react'
import image from '../Images/logo.jpg'

const MusicPLayer = () => {
  return (
<div className='musicPlayer'>
    <div className="animated-disc">
      <div className="animated-disc-image">
        <img src={image} alt="" />
      </div>
    </div>
</div>
  )
}

export default MusicPLayer