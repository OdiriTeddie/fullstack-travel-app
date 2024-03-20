import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const PackageBox = ({ image, city, country, summary, price }) => {
  return (
    <div className="travel-box">
      <div className="travel-box__img">
        <img src={image} alt="" />
      </div>
      <div className="travel-box__content">
        <div>
          <h2>{city}</h2>
          <div className="travel-box__location">
            <FaMapMarkerAlt />
            <p>{country}</p>
          </div>
        </div>
        <div>
          <p>{summary}</p>
        </div>
        <div className="travel-box__footer">
          <Link to="/packages/miami" className="btn">
            Details
          </Link>
          <div className="travel-box__quote">
            From<span>$ {price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

PackageBox.propTypes = {
  image: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
  summary: PropTypes.string,
  price: PropTypes.number,
};
