import { configureStore } from '@reduxjs/toolkit'
import React, { useReducer } from 'react'
import userSlice from './userSlice'
import movieSlice from './movieSlice'
import gptSlice from './gptSlice'
import configSlice from './configSlice'

const appStore = configureStore({
    reducer:{
        user:userSlice,
        movie:movieSlice,
        gpt  : gptSlice,
        lang : configSlice
    }
})

export default appStore