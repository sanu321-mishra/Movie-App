
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState,useEffect } from 'react';
import Movielist from './components/Movielist';
import Movielistheading from './components/Movielistheading';
import SearchBox from './components/SearchBox';

function App() {
  const [movies, setMovies] = useState([]);
  const [serachValue,setSearchValue] = useState('')


  const myMovie = async ()=>{
    const url =`http://www.omdbapi.com/?s=${serachValue}&apikey=dbbad710`;

    const response= await fetch(url);
    const responceJson = await response.json();

    if(responceJson.Search){
      setMovies(responceJson.Search);
    }
    
  };
  useEffect(()=>{
    myMovie(serachValue);
  }, [serachValue])

  return (
    <div className="container-fluid">
      <div className='row d-flex align-item-center mt-4 mb-4' style={{width:"88.8%",position:"relative",left:"5%"}}>
        <Movielistheading heading="MoviesApp"></Movielistheading>
        <SearchBox serachValue={serachValue} setSearchValue={setSearchValue}></SearchBox>


      </div>
      <div className='row'>
        <Movielist movies={movies}></Movielist>
      </div>




    </div>
  );
}

export default App;
