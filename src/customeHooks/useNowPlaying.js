import {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {API_TOKEN_ACCESS} from '../utils/constant'
import { addNowPlayingMovies } from '../utils/movieSlice'

const useNowPlaying = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
      getNowPlayingMovie()
    },[])
    
  const getNowPlayingMovie = async() => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_TOKEN_ACCESS)
  .then(response => response.json())
  .then(response => dispatch(addNowPlayingMovies(response.results)))
  .catch(err => console.error(err));
  }

}

export default useNowPlaying