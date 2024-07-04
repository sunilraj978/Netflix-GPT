import {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {API_TOKEN_ACCESS} from '../utils/constant'
import { addPopularMovies } from '../utils/movieSlice'

const usePopularMovie = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
      getPopularPlayingMovie()
    },[])
    
  const getPopularPlayingMovie = async() => {
    fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_TOKEN_ACCESS)
  .then(response => response.json())
  .then(response => dispatch(addPopularMovies(response.results)))
  .catch(err => console.error(err));
  }

}

export default usePopularMovie