import React from 'react'

const AlbumSingle = (props) => {
  const player = () =>{
    const song = new Audio('http://127.0.0.1:8000/' + props.songlink)
    song.play()
  }
  return (
    <div className="album" onClick={player}>
      <div className="album-img">
        <img src={'http://127.0.0.1:8000/'+props.image} alt="" />
      </div>
      <div className="album-name" style={{textAlign:'center'}}>
        <h4>{props.tittle}</h4>
      </div>
    </div>
  )
}

export default AlbumSingle