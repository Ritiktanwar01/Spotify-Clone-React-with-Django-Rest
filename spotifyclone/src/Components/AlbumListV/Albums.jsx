import React from 'react'
import AlbumSingle from '../AlbumSingle/AlbumSingle'
import one from '../Images/one.jpg'

const Albums = () => {
  return (
    <div className="side-slide-albums">
                <div className="flexitem-ablbum-slide">
                    <AlbumSingle image={one} tittle={"Legion"}/>
                </div>
            </div>
  )
}

export default Albums