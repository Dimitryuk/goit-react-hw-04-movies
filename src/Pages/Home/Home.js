import { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../../Services/MovieFetch';
import MoviesList from '../../Components/MoviesList/MoviesList';

export default function Home() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetchPopularMovies().then(setFilms);
  }, []);
  return <>{films && <MoviesList films={films} title="Todays popular:" />}</>;
}
