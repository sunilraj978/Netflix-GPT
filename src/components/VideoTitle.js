import React from 'react'
import { useSelector } from 'react-redux'

const VideoTitle = ({title, desc}) => {

    const movie = useSelector((store)=>store.movie?.nowPlayingMovie)

  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/3'>{desc}</p>
        <div>
            <button className='bg-white text-black hover:bg-opacity-50
            p-4 px-16 text-lg rounded-lg'>  Play</button>
            <button className='bg-gray-500 text-white
            p-4 px-16 text-lg bg-opacity-50 rounded-lg mx-2'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle