import React from 'react'
import { useLocation } from "react-router-dom";
import SongList from '../SongList/SongList';
import MusicPLayer from '../MusicPLayer/MusicPLayer';

const PlayListDetailPage = () => {
const Location = useLocation()
const playlistName = Location.state.playlistName
const playlistId = Location.state.playlistid
  return (
    <div className='home'>
      <div className="sectionflex">
        <div className="innnersecplayerleft">
            <div className="album-stat">
                <h3 style={{color:'white'}}>{playlistName}</h3>
                <SongList  playlistid ={playlistId}/>
            </div>
        </div>
        <div className="innnersecplayerright">
            <div className="album-stat">
            <h3 style={{color:'white'}}>Now Playing</h3>
            <MusicPLayer />
            </div>
        </div>
    </div>
    </div>
  )
}

export default PlayListDetailPage