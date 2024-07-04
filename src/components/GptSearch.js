import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggession from './GptMovieSuggession'

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
            <img
             src='https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='netflix-bg' />
        </div>
        <GptSearchBar />
        <GptMovieSuggession />
    </div>
  )
}

export default GptSearch