import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useNowPlaying from '../customeHooks/useNowPlaying'
import usePopularMovie from '../customeHooks/usePopularMovie'
import useTopRatedMovie from '../customeHooks/useTopRatedMovie'
import useUpComingMovie from '../customeHooks/useUpComingMovie'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'

const Browser = () => {

  const showGPTSearch = useSelector((store)=>store.gpt.toggleGptState);

  useNowPlaying()
  usePopularMovie()
  useTopRatedMovie()
  useUpComingMovie()

  return (
    <div>
      <Header />
      {
        showGPTSearch ? (
          <GptSearch />
        )
        :
        (<>
        <MainContainer />
        <SecondaryContainer /></>)
      }
    </div>
  )
}

export default Browser