import React, { useEffect, useState } from 'react'
import AlbumSingle from '../AlbumSingle/AlbumSingle'
import axios from 'axios'

const Albums = () => {
  const [maindata,setmaindata] = useState([])
  useEffect(()=>{
    async function getdata(){
      try{
        const newdata =  await axios.get('http://127.0.0.1:8000/songsplayer/playlists/')
        setmaindata(newdata.data.list_playlist)
      }catch (error){
        console.log(error)
      }
    }getdata()
  },[])
  return (
    <div className="side-slide-albums">
                <div className="flexitem-ablbum-slide">
                { maindata.map((list_playlist, i)=>{
              return (
                <AlbumSingle key={i} tittle={list_playlist.Play_List_Name} image={list_playlist.Playlist_Cover} playlistuid={list_playlist.unique_id}/>
              )
            })
            }
                </div>
            </div>
  )
}

export default Albums