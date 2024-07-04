import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGPTView } from '../utils/gptSlice';
import { SUPPORTED_LANG } from '../utils/constant';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector((store)=> store.user)

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          
          const {uid, email, displayName} = user;
          dispatch(addUser({
            uid:uid,
            email:email,
            displayName:displayName
          }))
          navigate("/browser");
        } else {
          dispatch(removeUser)
          navigate("/")
        }
      });
},[])


const handleToogleGPT = () =>{
  dispatch(toggleGPTView())
}


  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(removeUser) 
    }).catch((error) => {
       console.log(error)
    });
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-r to-black
    z-10 flex justify-between'>
        <img
        className="w-44"
        src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt='logo' />

        {
          user &&(
            <div className='p-2 flex'>
              <select onChange={(e)=>{
                console.log(e.target.value)
                dispatch(changeLanguage(e.target.value))
              }} className='p-2 m-2 bg-gray-900 text-white'>
                {
                  SUPPORTED_LANG.map(lang => <option value={lang.identifier} key={lang.identifier}>
                    {lang.name}
                  </option>)
                }
              </select>

<button onClick={handleToogleGPT} className='py-2 px-4 bg-purple-500 text-white rounded-lg mx-2'>GPT Search</button>

        <img className='w-8 mr-1' alt='logout-logo'
        src="https://i.pinimg.com/474x/2a/fe/8a/2afe8a2aa5ab2402671ac8b536ca6516.jpg" />
      

        <button onClick={handleSignOut} className='font-bold'>(Sign Out)</button>
      </div>
          )
        }
    </div>

  )
}

export default Header