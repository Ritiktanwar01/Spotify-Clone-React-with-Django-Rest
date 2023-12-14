import React from 'react'

const AlbumSingle = (props) => {
  return (
    <div className="album">
      <div className="album-img">
        <img src={props.image} alt="" />
      </div>
      <div className="album-name">
        <h4>{props.tittle}</h4>
      </div>
    </div>
  )
}

export default AlbumSingle