import React, { useState } from 'react'

const SearchRes = () => {
    const [show, setshow]= useState(false)
    
  return (
    <div className='search' >
        <div className="search-box flex">
            <div className="filters flex">
                <div className="gener">
                    <label htmlFor="gener">Select Genere</label>
                    <select className='selector' name="gener" id="">
                        <option value="" selected>Select Opt</option>
                        <option value="Bollywood">Bollywood</option>
                    </select>
                </div>
                <div className="singers">
                    <label htmlFor="singers">Select Singer</label>
                    <select className='selector' name="singers" id="">
                        <option value="" selected>Select Opt</option>
                        <option value="Masoom Sharma">Masoom Sharma</option>
                    </select>
                </div>
            </div>
            <div className="form-box flex">
                <input className='form-box-inp' type="text"  placeholder='Search' onClick={()=>setshow(true)}/>
                <div className={show?"history":"remove"}>

                </div>
            </div>
        </div>
        <div className="search-box-main" onClick={()=>setshow(false)}>

        </div>
    </div>
  )
}

export default SearchRes