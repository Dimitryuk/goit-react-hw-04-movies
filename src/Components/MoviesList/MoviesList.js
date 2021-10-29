import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import s from './MoviesList.module.css'

export default function MoviesList({ movie, title }) {
    const [movies, setMovies] = useState([])
    const history = useHistory()
    useEffect(() => { setMovies(movie) }, [])
    return (<>
        <h2>{title} </h2>
      <ul className={s.ImageGallery}>
        {movie &&
          movie.map(({ title, id, poster_path, name }) => (
            <li className={s.ImageGalleryItem} key={id} >
              <Link
                to={{
                  pathname: `/movies/${id}`,
                  state: {
                    ref: history.location.pathname,
                    search: history.location.search,
                  },
                }}
              >
                      <p>{ title}</p>
                <img className ={s.ImageGalleryItem_image}
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                  width="150"
                  title={title}
                />
              </Link>
            </li>
          ))}
      </ul>
    
    </>)
}