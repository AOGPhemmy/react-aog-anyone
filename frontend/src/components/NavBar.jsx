import { Link } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
  return (
    <>
      <div className="femi_header">
        <h2>Media City</h2>
        <p>Created by Adetimehin Olufemi George Bootcamp Tech with Tim</p>
      </div>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">Hollywood Most Popular Movies</Link>
        </div>

        <div className="navbar-links">
          <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/Favourites" className="nav-link">
            Favourites
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
