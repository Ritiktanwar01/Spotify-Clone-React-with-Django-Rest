import React, { useRef, useState } from 'react'

import play from '../Images/play.png'
import pause from '../Images/pause.png'

const SongSingle = (props) => {
    const [isplaying, setisplaying]= useState(false)
    const [image,setimage]= useState(play)
    const audioRef = useRef(null)
    const playertoggle = ()=>{
        setisplaying(!isplaying)
        if (isplaying===true){
            audioRef.current.play()
            setimage(pause)
        }else{
            audioRef.current.pause()
            setimage(play)
        }
    }
  return (
    <div className="songsingle">
        <div className="song-image">
            <div className="song-image-round">
                <img src={'http://127.0.0.1:8000/media/'+props.image} alt="songimage" />
            </div>
        </div>
        <div className="song-name">
            <table>
                <thead></thead>
                <tbody>
                <tr>
                    <td>{props.playlistid}</td>
                </tr>
                <tr>
                    <td><p>{props.tittle}</p></td>
                </tr>
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>
        <div className="song-controls">
            <div className="play-pause-round" onClick={playertoggle}>
                <audio src={'http://127.0.0.1:8000/media/'+props.songfile} ref={audioRef}></audio>
                <img src={image} alt="playpause"/>
            </div>
        </div>
    </div>
  )
}

export default SongSingle