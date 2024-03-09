import "./index.styles.scss";
import { FaAnchor } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1>
            Explore the <br /> World Now!
          </h1>
          <p>
            Looking for your dream vacation destination but do not know where to
            start? With the help of experienced and knowledgeable travel agents,
            you can plan the trip of a lifetime with ease.
          </p>
          <div className="hero-booking">
            <FaAnchor />
            <div>
              <p>Book Your Trip!</p>
              <h2>+ 01 234 345 894</h2>
            </div>
          </div>
          <Link to="/contact" className="btn">
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
};
