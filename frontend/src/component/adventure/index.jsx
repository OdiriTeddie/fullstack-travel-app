import "./index.styles.scss";
import { DestinationBox } from "../destination-box";

export const Adventure = () => {
  return (
    <section className="adventure">
      <div className="container">
        <div className="adventure__header">
          <p className="subheading">Choose your Trip</p>
          <h2>Travel Destinations Available Worldwide</h2>
          <p>
            We have compiled a list of top destinations across the globe,
            scoured the world for the most alluring and fascinating places to
            visit. From the beautiful beaches of the Caribbean to the majestic
            mountains of Europe and the vibrant cities of Asia, our destination
            list has something for everyone.
          </p>
        </div>

        <div className="adventure__destination_box">
          <DestinationBox
            country="USA"
            text="Here is filled with diverse cultures & cities"
            bgClass=""
          />
          <DestinationBox
            country="Japan"
            text="The top culture of the Land of the Rising Sun"
            bgClass="destination2"
          />
          <DestinationBox
            country="Greece"
            text="Explore the vibrant and natural cities and cloud"
            bgClass="destination3"
          />
          <DestinationBox
            country="Italy"
            text="Taste the cuisine and all charming cities, towns"
            bgClass="destination4"
          />
        </div>
      </div>
    </section>
  );
};
