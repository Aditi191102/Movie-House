import { useEffect } from 'react';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const nowPlayingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
      const movieData = await data.json();
      
      dispatch(addNowPlayingMovies(movieData.results));
    }
    useEffect(()=>{
      nowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies
