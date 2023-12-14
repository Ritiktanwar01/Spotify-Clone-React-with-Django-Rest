import React from 'react'
import Albums from '../AlbumListV/Albums'

const Home = () => {
  return (
    <div className='home'>
      <div className="section">
        <div className="innnersec">
            <div className="album-stat">
                <h3>Latest Albums</h3>
            </div>
            <Albums />
        </div>
    </div>
    </div>
  )
}

export default Home