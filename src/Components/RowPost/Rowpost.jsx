import axios from '../../axios'
import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import { API_KEY, imageUrl } from '../../Constants'



function Rowpost(props) {
  const [movies, setMovies] = useState([])
  const [trailer, setTrailer] = useState('')
  useEffect(() => {
    axios.get(props.url).then(Response=>{
        setMovies(Response.data.results)
    })
  }, [])
   
  
  
  return (
    <div className='row'>
      <h2 className='row-title'>{props.title}</h2>
      <div className="posters">
        {movies.map((obj)=>
         <img key={obj.id} className={props.isSmall? 'smallposter':'poster'} src={`${props.isSmall? imageUrl+obj.backdrop_path : imageUrl+obj.poster_path}`} alt="poster"  /> 
        )}
      
      </div>
      
    </div>
  )
}

export default Rowpost