import React, { useEffect, useState } from 'react'
import SongSingle from '../SongSingle/SongSingle'
import axios from 'axios'

const SongList = (props) => {
  const [sondata,setsongdata] = useState([])
  useEffect(()=>{
    async function getsongs(){
      const playlistUniqueid = props.playlistid
      const url = "http://127.0.0.1:8000/songsplayer/songs/"
      const data = {"playlistuid":playlistUniqueid}
      try{
      const response =  await axios.post(url,data)
      setsongdata(response.data. songlist)
      }catch (error){
        console.log(error)
      }
    } getsongs()
  },[])
  return (
    <div>
      {
        sondata.map((songList, i)=>{
          return <SongSingle key={i} tittle={songList.Song_Name} image ={songList.Song_Cover} songfile={songList.Song_File}/>
        })
      }
    </div>
  )
}

export default SongList