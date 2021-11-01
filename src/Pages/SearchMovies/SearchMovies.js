import { useEffect, useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { fetchMoviesByQuery } from '../../Services/MovieFetch';
import s from './SearchMovies.module.css';
import defaultImg from '../../images/300.jpg';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const history = useHistory();
  const storedQuery = new URLSearchParams(location.search).get('query');

  const handleValueChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query === '') {
      return alert('Enter something...');
    }
    fetchMoviesByQuery(query)
      .then(setMovies)
      .catch(e => console.log(e));
    setQuery('');
  };

  const pushSearch = () => {
    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  useEffect(() => {
    if (storedQuery)
      fetchMoviesByQuery(storedQuery)
        .then(setMovies)
        .catch(e => console.log(e));
  }, []);

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="on"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handleValueChange}
        />
        <button type="submit" onClick={pushSearch}>
          Search
        </button>
      </form>
      <div>
        <ul className={s.ImageGallery}>
          {movies &&
            movies.map(({ title, id, poster_path, name, original_title }) => (
              <li className={s.ImageGalleryItem} key={id}>
                <Link
                  query={storedQuery}
                  to={{
                    pathname: `/movies/${id}`,
                    state: {
                      from:
                        `${history.location.pathname}` +
                        `${history.location.search}`,

                      search: location.search,
                    },
                  }}
                >
                  <img
                    className={s.ImageGalleryItem_image}
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500${poster_path}`
                        : defaultImg
                    }
                    alt={title}
                    width="150"
                    title={title}
                  />
                  <div> {name || original_title}</div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
