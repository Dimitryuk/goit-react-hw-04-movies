import { Link, Route , Switch , useRouteMatch,
  useHistory,useParams} from 'react-router-dom'
import { fetchCastById, fetchMoviesById } from '../../Services/MovieFetch'
import { useEffect, useState, lazy, Suspense } from 'react'
import Loader from 'react-loader-spinner';

const Cast = lazy(() =>  import('../../Components/Cast/Cast' /*webpackChunkName: "Cast"*/) )
const Reviews = lazy(()=>{import('../../Components/MovieReview/MovieReview' /*webpackChunkName: "Reviews"*/)})
export default function MovieDetails() {
  const { id } = useParams();
  const { url, path } = useRouteMatch();
  const [film, setFilm] = useState({})
  const { title, poster_path, overview } = film
    const history = useHistory();
  const { ref, search } = history.location.state
  console.log(ref)
    console.log(search);;
  useEffect(() => {
    const res = fetchMoviesById(id).then(r=>setFilm(r))
  },[id])

  return (
    <div>
 <p>
        <Link to={`${ref}${search}` ? `${ref}${search}` : '/'}>
          <button type="button">Go back</button>
        </Link>
      </p>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt="poster"
        width="450"
      />
      <h3>{title}</h3>
      <p>{overview} </p>
      <hr />
      <div >
        <Link
          to={{
            pathname: `${url}/cast`,
            state: {
              ref: ref,
              search: search,
            },
          }}
          
        >
          Cast
        </Link>
        <Link
          to={{
            pathname: `${url}/reviews`,
            state: {
              ref: ref,
              search: search,
            },
          }}
          
        >
          Review
        </Link>
      </div>

      <Suspense
        fallback={
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={80}
            width={80}
            timeout={3000}
          />
        }
      >
        <Switch>
          <Route path={`${path}/reviews`} component={Reviews} />
          <Route path={`${path}/cast`} component={Cast} />
        </Switch>
      </Suspense>
    </div>
  )
}
