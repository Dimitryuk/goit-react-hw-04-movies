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
  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<h1>Загружаем</h1>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={SearchMovies} />
          <Route path="/movies/:id" component={MovieDetails} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
