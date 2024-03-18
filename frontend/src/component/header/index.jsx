import "./index.styles.scss";
import { Nav } from "../navigation";
import { Link, useNavigate } from "react-router-dom";
import SiteLogo from "../../assets/logo.png";
import { logoutUser } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.user);

  const handleLogout = () => {
    navigate("/");
    dispatch(logoutUser());
  };
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <img src={SiteLogo} alt="site-logo" />
        </Link>

        <Nav />
        {user ? (
          <div className="logout-wrapper">
            <Link to="/dashboard" className="dashboard-link">
              Dashboard
            </Link>
            <button className="btn logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn search-btn">
            Login/Register
          </Link>
        )}
      </div>
    </header>
  );
};
