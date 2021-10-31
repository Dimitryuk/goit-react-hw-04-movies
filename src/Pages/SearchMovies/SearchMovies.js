import { render } from '@testing-library/react';
import MoviesList from '../../Components/MoviesList/MoviesList';
import { fetchMoviesByQuery } from '../../Services/MovieFetch';
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

// export default function SearchMovies() {
//   const location = useLocation();
//   const history = useHistory();
//   console.log(location);

//   const [query, setQuery] = useState('');
//   const [movies, setMovies] = useState([]);

//   const localSavedQuery =
//     new URLSearchParams(location.search).get('queryBy') ?? '';
//   useEffect(() => {
//     fetchMoviesByQuery(query).then(setMovies);
//   }, [localSavedQuery]);

//   const onSubmitHandle = evt => {
//     evt.prevetnDefault();
//     const query = evt.target.value;
//     fetchMoviesByQuery().then(setQuery);
//     history.push({ ...location, search: `queryBy=${query}` });
//   };
//   const onChangeHandle = evt => {
//     setQuery(evt.target.value);
//   };
//   return (
//     <>
//       <form onSubmit={onSubmitHandle}>
//         <label>
//           <input
//             onChange={onChangeHandle}
//             type="text"
//             placeholder="Enter movie name"
//             value={query}
//           ></input>
//         </label>
//         <button type="submit">Search</button>
//       </form>
//       <MoviesList movie={movies} history={history} query={query} />
//     </>
//   );
// }

function SearchMovies() {
  const location = useLocation();
  const history = useHistory();

  const [searchQuery, setSearchQuery] = useState();
  const [searchMovies, setSearchMovies] = useState();

  const storedSearchQuery =
    new URLSearchParams(location.search).get('queryBy') ?? '';
  console.log(storedSearchQuery);

  useEffect(() => {
    if (!storedSearchQuery) {
      return;
    }
    fetchMoviesByQuery(searchQuery)
      .then(setSearchMovies)
      .catch(console.log('error'));
  }, [storedSearchQuery]);

  const handleSubmit = async e => {
    e.preventDefault();
    const searchQuery = e.target.value;
    const response = fetchMoviesByQuery().then(setSearchMovies);
    console.log(response);

    history.push({
      ...location,
      search: `queryBy=${searchQuery}`,
    });
  };
  const handleChange = e => {
    setSearchQuery(e.target.value);
  };
  console.log(searchQuery);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Enter movie name..."
            value={searchQuery}
          ></input>
        </label>
        <button type="submit">Search</button>
      </form>
      <MoviesList films={searchMovies} history={history} query={searchQuery} />
    </>
  );
}

SearchMovies.propTypes = {
  // bla: PropTypes.string,
};

SearchMovies.defaultProps = {
  // bla: 'test',
};

export default SearchMovies;
