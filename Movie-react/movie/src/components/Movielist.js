import React from 'react'
import '../App.css'

function Movielist(props) {
  return (
    <>
      {props.movies.map((movie, index) =>

        <div className="card mt-2 container-fluid" style={{ width: "20rem", margin: "5px", position: "relative", left: "5%" }}>
          <div className="card-body">
            <div className='image-container'>
              <img src={movie.Poster} alt="movie" style={{ width: "14rem", margin: "5px", border: "2px solid blue", borderRadius: "10px" }} />




              <h5 className='title'>{movie.Title}</h5>
              <p className='title'>Realese Year: {movie.Year}</p>
            </div>
            <a href="#" className="btn button btn-danger mt-2 btn-sm">Download</a>






          </div>
        </div>


      )}




    </>
  )
}

export default Movielist
