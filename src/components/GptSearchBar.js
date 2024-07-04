import React, { useRef } from 'react'
import changeLanguage from '../utils/languageConstant'
import { useSelector } from 'react-redux'
import openai from '../utils/openAIConfig'


const GptSearchBar = () => {

  const lang = useSelector((store)=>store.lang.defaultLanguage)
  const searchText = useRef(null)

  const handleGPTSearch = async() =>{

    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query" + searchText.current.value + ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: a,b,c"

    const gptresults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery}],
      model: 'gpt-3.5-turbo',
    });
    console.log(gptresults.choices)
  }

  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
        <input
        ref={searchText}
         type='text'
         className='p-4 m-4 col-span-9'
          placeholder= {changeLanguage[lang].gptSearchPlaceholder} />

          <button className='col-span-3 m-4 px-4
          bg-red-700 text-white rounded-lg' onClick={handleGPTSearch}>{
            changeLanguage[lang].search
          }</button>
      </form>
    </div>
  )
}

export default GptSearchBar