import "./index.styles.scss";
import { IoMdCheckmark } from "react-icons/io";
import { Link } from "react-router-dom";
export const Packages = () => {
  return (
    <section className="packages">
      <div className="container">
        <header className="packages__header">
          <p className="subheading">clear Price</p>
          <h2>Affordable Travel Packages</h2>
          <p>
            We believe that everyone deserves to experience their dream vacation
            without breaking the bank. That is why we offer a price section on
            our website that features a range of affordable travel
          </p>
        </header>
        <div className="packages__list">
          <div className="packages__box">
            <div className="packages__box_price">
              <h3>Half Board</h3>
              <p className="price">
                <span>$50</span> / Day
              </p>
            </div>
            <div className="packages__box_content">
              <ul role="list">
                <li className="price-list">
                  <IoMdCheckmark />
                  Transfers from Airport
                </li>
                <li className="price-list">
                  <IoMdCheckmark />
                  Minimum 3 Star Hotel
                </li>
                <li className="price-list">
                  <IoMdCheckmark />
                  Alcoholic beverages
                </li>
                <li className="price-list">
                  <IoMdCheckmark />
                  Meals in Restaurants
                </li>
              </ul>
              <Link to="/packages" className="btn">
                View Trips
              </Link>
            </div>
          </div>
          <div className="packages__box blue">
            <div className="packages__box_price">
              <h3>All Inclusive</h3>
              <p className="price">
                <span>$32</span> / Day
              </p>
            </div>
            <div className="packages__box_content">
              <ul role="list">
                <li className="price-list">
                  <IoMdCheckmark />
                  Meals in Restaurants
                </li>
                <li className="price-list">
                  <IoMdCheckmark />
                  Alcoholic beverages
                </li>
                <li className="price-list">
                  <IoMdCheckmark />
                  Transfers from Airport
                </li>
                <li className="price-list">
                  <IoMdCheckmark />
                  Incl. Museum Tickets
                </li>
              </ul>
              <Link to="/packages" className="btn btn-blue">
                View Trips
              </Link>
            </div>
          </div>
          <div className="packages__box dark-blue">
            <div className="packages__box_price">
              <h3>Excursions Included</h3>
              <p className="price">
                <span>$68</span> / Day
              </p>
            </div>
            <div className="packages__box_content">
              <ul role="list">
                <li className="price-list">
                  <IoMdCheckmark />
                  Minimum 3 Star Hotel
                </li>
                <li className="price-list">
                  <IoMdCheckmark />
                  Meals in Restaurants
                </li>
                <li className="price-list">
                  <IoMdCheckmark />
                  Incl. Museum Tickets
                </li>
                <li className="price-list">
                  <IoMdCheckmark />
                  Meals in Restaurants
                </li>
              </ul>
              <Link to="/packages" className="btn">
                View Trips
              </Link>
            </div>
          </div>
        </div>
        <p className="package-insurance">
          * All trips include medical insurance
        </p>
      </div>
    </section>
  );
};
