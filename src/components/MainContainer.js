import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    const movie = useSelector((store)=> store.movie?.nowPlayingMovie)

    if(!movie) return;

    console.log(movie[0])

    const {original_title, overview, id} = movie[0]

  return (
    <div>
        <VideoTitle title={original_title} desc={overview} />
        <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer