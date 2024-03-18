import { Link } from "react-router-dom";
import "./index.styles.scss";

const links = [
  { id: 1, url: "/", text: "Home" },
  { id: 2, url: "packages", text: "Packages" },
  { id: 3, url: "services", text: "Services" },
  { id: 4, url: "contact", text: "Contact" },
];

export const Nav = () => {
  return (
    <nav className="main-nav">
      <ul role="list" className="nav-list">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <Link to={link.url}> {link.text} </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
