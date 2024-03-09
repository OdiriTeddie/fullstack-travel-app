import "./index.styles.scss";
import { Link } from "react-router-dom";
import { PackageBox } from "../package-box";

export const PlanTrip = () => {
  return (
    <section className="plan-trip">
      <div className="container">
        <div className="plan-header">
          <div className="plan-trip__heading">
            <p className="plan-trip__subheading">Dream Vacation Destination</p>
            <h2>Plan the Trip of a Lifetime with Ease</h2>
            <p>
              Whether you are looking for a romantic getaway, a family-friendly
              adventure, or a solo journey to explore the world, a travel agency
              can provide you with a custom-tailored itinerary that exceeds your
              expectations.
            </p>
            <Link to="/services" className="btn">
              More Info
            </Link>
          </div>
          <div>
            <img src="./images/map.png" alt="" />
          </div>
        </div>

        <div className="travel-list">
          <PackageBox
            image="./images/trave1.jpg"
            city="Toscany"
            country="Italy"
            summary="Whether you are looking for a romantic tour, Tuscany is the
                  perfect destination for a true Italian experience."
            price="$450"
          />

          <PackageBox
            image="./images/tokyo.jpg"
            city="Tokyo"
            country="Japan"
            summary="Experience the alluring beauty and bustling energy of Tokyo
            through our immersive tour with a good guide."
            price="$790"
          />

          <PackageBox
            image="./images/tokyo.jpg"
            city="Miami"
            country="USA"
            summary="This iconic landmark is home to an array of thrilling good
            attractions and stunning fresh ocean views."
            price="$700"
          />
        </div>
      </div>
    </section>
  );
};
