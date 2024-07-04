import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movie",
    initialState:{
        nowPlayingMovie: null,
        popularMovie : null,
        topRatedMovie: null,
        upComingMovie: null
    },
    reducers:{
        addNowPlayingMovies:(state,action) =>{
            state.nowPlayingMovie = action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovie = action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovie = action.payload
        },
        addUpComingMovies:(state,action)=>{
            state.upComingMovie = action.payload
        }
    }
})


export const {addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpComingMovies} = movieSlice
.actions

export default movieSlice.reducer