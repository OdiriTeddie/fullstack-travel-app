import "./index.styles.scss";
import { Nav } from "../navigation";
import { Link } from "react-router-dom";
import SiteLogo from "../../assets/logo.png";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <img src={SiteLogo} alt="site-logo" />
        </Link>

        <Nav />
        <Link to="/packages" className="btn search-btn">
          Search Travel
        </Link>
      </div>
    </header>
  );
};
