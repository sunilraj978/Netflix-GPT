import {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {API_TOKEN_ACCESS} from '../utils/constant'
import { addTopRatedMovies } from '../utils/movieSlice'

const useTopRatedMovie = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
      getTopRatedMovie()
    },[])
    
  const getTopRatedMovie = async() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_TOKEN_ACCESS)
  .then(response => response.json())
  .then(response => dispatch(addTopRatedMovies(response.results)))
  .catch(err => console.error(err));
  }

}

export default useTopRatedMovie