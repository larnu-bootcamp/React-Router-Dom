import { NavLink } from "react-router-dom";

export default function Navbar() {
  
  return (
    <nav>
      <li>
        <NavLink exact to="/" > Home </NavLink>
      </li>
      <li>
        <NavLink exact to="/login" > Login </NavLink>
      </li>
      <li>
        <NavLink exact to="/dashboard" > Dashboard </NavLink>
      </li>
    </nav>
  );
}
