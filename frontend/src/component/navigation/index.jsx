import { Link } from "react-router-dom";
import "./index.styles.scss";

export const Nav = () => {
  return (
    <nav className="main-nav">
      <ul role="list" className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/packages">Packages</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};
