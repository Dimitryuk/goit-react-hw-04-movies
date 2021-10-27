import { NavLink } from 'react-router-dom';
export default function Navigation() {
  return (
    <div>
      <ul>
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
