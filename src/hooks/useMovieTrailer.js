import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/movieSlice';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const url = "https://api.themoviedb.org/3/movie/"+ movieId+ "/videos?language=en-US";
    const getMovie = async () => {
      const data = await fetch(url, API_OPTIONS);
      const jsonData = await data.json();
  
      const trailer = jsonData.results.filter(
        (video) => video.type === "Trailer"
      );
      const showTrailer =
        trailer.length === 0
          ? jsonData.results[0]
          : trailer.length > 1
          ? trailer[0]
          : trailer;
  
      dispatch(addTrailerVideo(showTrailer));
    };
  
    useEffect(() => {
      getMovie ();
    }, []);
}

export default useMovieTrailer
