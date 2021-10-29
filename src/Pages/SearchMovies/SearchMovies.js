import { render } from '@testing-library/react';
import MoviesList from '../../Components/MoviesList/MoviesList'
import { fetchMoviesByQuery } from '../../Services/MovieFetch';
import { useEffect, useState } from 'react';
import { useHistory, useLocation,  } from 'react-router';

export default function SearchMovies() {
  const location = useLocation()
  const history = useHistory

  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])

  const localSavedQuery = new URLSearchParams(location.search).get('queryBy') ?? ''
  useEffect(() => {
    fetchMoviesByQuery(query).then(setMovies)
  },[localSavedQuery])
  
  const onSubmitHandle =  evt => {
    evt.prevetnDefault()
    const query = evt.target.value
  fetchMoviesByQuery().then(setQuery)
    history.push({ ...location, search: `queryBy=${query}` })

  }
   const onChangeHandle = evt => {
      setQuery(evt.target.value)
    }
  return (
     <>
   <form onSubmit={onSubmitHandle}>
        <label>
          <input
            
            onChange={onChangeHandle}
            type="text"
            placeholder="Enter movie name"
            value={query}
          ></input>
        </label>
        <button type="submit" >
          Search
        </button>
      </form>
      <MoviesList movie={movies} history={history} query={query} />
  
  </>
  )
 
}
