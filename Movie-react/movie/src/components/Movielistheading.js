import React from 'react'
import '../App.css';

function Movielistheading(props) {
  return (
    <div className='col'>
        <h1 className='title' style={{width:"10px",fontWeight:"bold",color:"yellow"}}>{props.heading}</h1>
        <img src="https://cdn-icons-png.flaticon.com/512/3163/3163508.png" alt="icon" style={{width:"60px",position:"absolute",bottom:"8px",left:"17%"}} />
        
      
    </div>
  )
}

export default Movielistheading
