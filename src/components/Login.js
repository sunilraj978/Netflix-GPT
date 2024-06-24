import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setSignInForm] = useState(true)

    const toggleSignUpForm = () => {
        setSignInForm(!isSignInForm)
    }

  return (
    <div>
        <Header />
        <div className='absolute'>
            <img
             src='https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='netflix-bg' />
        </div>
        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80'>
        <h1 className='font-bold text-3xl py-3 text-white'>{
            isSignInForm ? "Sign In" : "Sign Up"
            }</h1>
            {
                !isSignInForm &&
                <input type='text'placeholder='Full Name'
            className='p-4 my-2 w-full bg-gray-800' />
            }
            <input type='text'placeholder='Email Address'
            className='p-4 my-2 w-full bg-gray-800' />
            <input type='password' placeholder='Password'
            className='p-4 my-2 w-full bg-gray-800' />
            <button className='p-3 my-6 w-full text-white bg-red-700 rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p onClick={toggleSignUpForm} className='py-4 text-white cursor-pointer'>
                {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered Sign In Now"}
                </p>
        </form>
    </div>
  )
}

export default Login