import './App.css';

import { useEffect, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
// const Navigation = lazy(() => import('./Components/Navigation/Navigation'));
import fetchMovies from './Services/MovieFetch';

const Home = lazy(() => import('./Pages/Home/Home'));
const SearchMovies = lazy(() => import('./Pages/SearchMovies/SearchMovies'));
const MovieDetails = lazy(() => import('./Pages/MovieDetails/MovieDetails'));
const NotFound = lazy(() => import('./Pages/NotFound/NotFound'));

function App() {
  // console.log(fetchMovies('https://api.themoviedb.org/3/', 'batman'));
  // fetch('https://api.themoviedb.org/3/movie/trending/movie/day')
  //   .then(response => {
  //     return response.json();
  //   })
  //   .then(data => {
  //     console.log(data);
  //   });

  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<h1>Загружаем</h1>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={SearchMovies} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route component={NotFound} />
          {/* <Route>
            <Home />
          </Route>
          <Route>
            <SearchMovies />
          </Route>
          <Route>
            <MovieDetails />
          </Route>
          <Route>
            <NotFound />
          </Route> */}
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
