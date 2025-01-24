import React, { useEffect } from 'react'
import Header from "./Header"
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'

const Browse = () => {

  const dispatch = useDispatch();

  const nowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
    const movieData = await data.json();
    dispatch(addNowPlayingMovies(movieData.results));
  }

  useEffect(()=>{
    nowPlayingMovies();
  },[])

  return (
    <div>
      <Header/>
      
    </div>
  )
}

export default Browse
