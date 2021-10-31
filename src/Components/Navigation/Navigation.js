import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
export default function Navigation() {
  return (
    <div>
      <ul className={s.nav_wrapper}>
        <li>
          <NavLink exact to="/">
            <h2>Home</h2>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/movies">
            <h2>Movies</h2>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
