import "./index.styles.scss";

import { Link } from "react-router-dom";

export const SearchTrip = () => {
  return (
    <section className="search-trip">
      <div className="container">
        <div className="search-trip__header">
          <p className="subheading">Choose your Trip</p>
          <h2>Start your Vacation Now</h2>
          <p>
            Looking for your dream vacation destination but do not know where to
            start? With the help of experienced and knowledgeable travel agents,
            you can plan the trip of a lifetime with ease.
          </p>
        </div>

        <Link to="/packages" className="btn form-btn">
          Travel Tour Packages
        </Link>
      </div>
    </section>
  );
};
