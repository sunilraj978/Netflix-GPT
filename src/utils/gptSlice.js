import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        toggleGptState:false
    },
    reducers:{
        toggleGPTView:(state,action)=>{
            state.toggleGptState = !state.toggleGptState
        }
    }
})

export const {toggleGPTView} = gptSlice.actions

export default gptSlice.reducer;