import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const DestinationBox = ({ bgClass, country, text }) => {
  return (
    <div className={`adventure__destination ${bgClass}`}>
      <div className="adventure__destination_overlay">
        <h2>{country}</h2>
        <p>{text}</p>
        <Link to="/packages" className="btn">
          All Package
        </Link>
      </div>
    </div>
  );
};

DestinationBox.propTypes = {
  bgClass: PropTypes.string,
  country: PropTypes.string,
  text: PropTypes.string,
};
