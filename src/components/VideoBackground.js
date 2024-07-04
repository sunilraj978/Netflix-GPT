import React, { useEffect, useState } from 'react'
import { API_TOKEN_ACCESS } from '../utils/constant';

const VideoBackground = ({movieId}) => {
  
  const [trailer, setTrailer] = useState("");

  const getMovieTralier = async() =>{
const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_TOKEN_ACCESS)
const json = await data.json()
const filterTrailer = json.results.filter((movie) => movie.type === 'Trailer')
const trailers = filterTrailer.length ? filterTrailer[0] : json.results[0]
setTrailer(trailers)
}

  useEffect(() => {
    getMovieTralier()
  },[])

  return (
    <div className='w-screen'>
      <iframe className='w-screen aspect-video'
      src={"https://www.youtube.com/embed/"+trailer.key +"?autoplay=1&mute=1" }
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  )
}

export default VideoBackground