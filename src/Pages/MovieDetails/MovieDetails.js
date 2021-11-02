import {
  Link,
  Route,
  Switch,
  useRouteMatch,
  useHistory,
  useParams,
} from 'react-router-dom';
import { fetchMoviesById } from '../../Services/MovieFetch';
import { useEffect, useState, lazy, Suspense } from 'react';
import Loader from 'react-loader-spinner';
import s from './MovieDetails.module.css';

const Cast = lazy(() =>
  import('../../Components/Cast/Cast' /*webpackChunkName: "Cast"*/),
);
const Reviews = lazy(() =>
  import('../../Components/Reviews/Reviews' /*webpackChunkName: "Reviews"*/),
);
export default function MovieDetails() {
  const { id } = useParams();
  const { url, path } = useRouteMatch();
  const [film, setFilm] = useState({});
  const { title, poster_path, overview } = film;
  const history = useHistory();
  const { search } = history.location.state;
  console.log(history.location);

  useEffect(() => {
    const res = fetchMoviesById(id).then(r => setFilm(r));
    console.log(res);
  }, [id]);

  return (
    <div>
      <p>
        <Link
          to={history.location.state.from ? history.location.state.from : '/'}
        >
          <button className={s.button} type="button">
            Go back
          </button>
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
      <div>
        <Link
          className={s.button}
          to={{
            pathname: `${url}/cast`,
            state: {
              from: history.location.state.from,
            },
          }}
        >
          Cast
        </Link>
        <Link
          className={s.button}
          to={{
            pathname: `${url}/reviews`,
            state: {
              from: history.location.state.from,
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
  );
}
