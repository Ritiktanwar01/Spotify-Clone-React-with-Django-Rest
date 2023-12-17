import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumSingle = (props) => {

  const Navigate = useNavigate()
  const playlistuid = props.playlistuid
  function handleSelect(){
    Navigate('/playlist', {
      state: {
        playlistName:props.tittle,
        playlistid: playlistuid,
      }
    });
  };
  return (
    <div className="album" onClick={handleSelect}>
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