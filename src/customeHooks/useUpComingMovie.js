import {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {API_TOKEN_ACCESS} from '../utils/constant'
import { addUpComingMovies } from '../utils/movieSlice'

const useUpComingMovie = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
      getUpComingMovie()
    },[])
    
  const getUpComingMovie = async() => {
    fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_TOKEN_ACCESS)
  .then(response => response.json())
  .then(response => dispatch(addUpComingMovies(response.results)))
  .catch(err => console.error(err));
  }

}

export default useUpComingMovie