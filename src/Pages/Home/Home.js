
import { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../../Services/MovieFetch'
import MoviesList from '../../Components/MoviesList/MoviesList';

export default function Home() {

  const [movie, setMovie] = useState([])
  useEffect(() => {
    fetchPopularMovies().then(setMovie)
  },[])
  return <>  <MoviesList movie={movie} title ="Todays Popular:" /> </>
}
