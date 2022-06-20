import React from 'react'
import '../App.css';

function SearchBox(props) {
  return (
    <div className='col col-sm-4'>
        <input className='form-control' value={props.value} onChange={(e)=> props.setSearchValue(e.target.value)} placeholder='Search Your Movie' style={{fontSize:"20px",border:"2px solid blue"}} />
      
    </div>
  )
}

export default SearchBox
