import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movie = useSelector((store)=> store.movie)

  return (
    <div>
      <MovieList title={"Now Playing"} movies={movie.nowPlayingMovie} />
      <MovieList title={"Popular"} movies={movie.popularMovie} />
      <MovieList title={"Top Rated"} movies={movie.topRatedMovie} />
      <MovieList title={"Upcoming"} movies={movie.upComingMovie} />
    </div>
  )
}

export default SecondaryContainer