import { Link } from "react-router-dom";
import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import PropTypes from "prop-types";

export const MainPackageBox = ({
  tourName,
  duration,
  country,
  price,
  tourExcept,
  image,
  links,
}) => {
  return (
    <div className="package__box">
      <div className="package__img">
        <img src={image} alt="" />
        <div className="package__duration">
          <FaClock />

          <span>{duration}</span>
        </div>
      </div>
      <div className="package__content">
        <div className="package__location">
          <p>{tourName}</p>
          <div className="package__locator">
            <FaLocationDot />
            <span>{country}</span>
          </div>
        </div>

        <p className="package__details">{tourExcept}</p>

        <div className="package__rate">
          <div>
            From
            <p>
              <span>$</span> <span>{price}</span>
            </p>
          </div>
          <Link to={links} className="btn">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

MainPackageBox.propTypes = {
  tourName: PropTypes.string,
  duration: PropTypes.string,
  country: PropTypes.string,
  price: PropTypes.number,
  tourExcept: PropTypes.string,
  image: PropTypes.string,
  links: PropTypes.string,
};
