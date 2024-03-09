import "./index.styles.scss";
import SpacerImg from "../../assets/spacer-img.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { FaChild } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { PiLadderSimple } from "react-icons/pi";
import { IoMdCheckmark } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function PackageSingle() {
  const countryData = {
    Italy: ["florence", "toscany"],
    Japan: ["tokyo", "kyoto"],
    Egypt: ["nile", "cairo"],
    France: ["paris"],
    Greece: ["athens", "rome"],
    USA: ["miami"],
  };

  const [wasSubmitted, setWasSubmitted] = useState(false);
  const [touristName, setTouristName] = useState("");

  let params = useParams();
  let locations = Object.values(params);
  let location = locations[0];
  let place = `${location.at(0).toUpperCase()}${location.slice(1)} `;

  function displayName() {
    let displayCountry;
    for (let country in countryData) {
      const cities = countryData[country];

      if (cities.includes(location)) {
        displayCountry = country;
      }
    }
    return displayCountry;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fieldValues = Object.fromEntries(formData.entries());

    setWasSubmitted(true);
    setTouristName(fieldValues.name);
  };

  return (
    <>
      <section>
        <div className="spacer-img">
          <img src={SpacerImg} alt="" />
        </div>
        <div className="package-single__header">
          <div className="container">
            <div className="package-single__location">
              <h1>{place}</h1>
              <div className="package-single__location_locator">
                <FaLocationDot /> {displayName()}
              </div>
            </div>
            <div>
              <div className="highlight">
                <div className="highlight__single">
                  <div className="highlight__icon">
                    <FaClock />
                  </div>
                  <div className="highlight__single_details">
                    <h4>Durations</h4>
                    <p>5 Days</p>
                  </div>
                </div>
                <div className="highlight__single">
                  <div className="highlight__icon">
                    <PiLadderSimple />
                  </div>
                  <div className="highlight__single_details">
                    <h4>Difficulty</h4>
                    <p>Medium</p>
                  </div>
                </div>
                <div className="highlight__single">
                  <div className="highlight__icon">
                    <FaChild />
                  </div>
                  <div className="highlight__single_details">
                    <h4>Min Age</h4>
                    <p>5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container main-content">
        <div>
          <div className="main-content__details">
            <h2>Enjoy the Adventure</h2>
            <p>
              Are you looking for an adventure of a lifetime? Join us on an
              unforgettable journey through some of the world is most stunning
              landscapes and cultural destinations. Our expertly curated tours
              take you to incredible destinations, from the rugged mountains of
              Patagonia to the vibrant cities of Asia. Our itineraries are
              designed to immerse you in the local culture, with opportunities
              to meet locals, try new foods, and learn about the history and
              traditions of each destination. Our experienced guides will lead
              you through each destination, sharing their knowledge and passion
              for travel. We offer a range of activities to suit every traveler,
              from hiking and kayaking to cultural tours and culinary
              experiences.
            </p>
            <p>
              {" "}
              Our accommodations are carefully selected for comfort and
              convenience, with options to suit every budget. Whether you prefer
              luxurious hotels or cozy homestays, we have something for
              everyone. At every step of the journey, we prioritize
              sustainability and responsible tourism. We work with local
              communities to ensure that our tours have a positive impact on the
              environment and the people we meet along the way. Join us on a
              journey of discovery and exploration, and discover the world is
              most incredible destinations with us.
            </p>
          </div>
          <div className="main-content__options">
            <h2>Included/Excluded</h2>
            <p>
              To help you plan your trip, we have put together a list of what is
              included and what is not included in your tour package. This will
              give you a clear understanding of what to expect and help you make
              any necessary arrangements before your journey begins.
            </p>
            <ul role="list" className="options-list">
              <div>
                <li>
                  {" "}
                  <IoMdCheckmark />
                  Train tickets and Bus transportation
                </li>
                <li>
                  {" "}
                  <IoMdCheckmark />
                  Breakfast, lunch, and dinner.
                </li>
                <li>
                  {" "}
                  <IoMdCheckmark />
                  Accommodation at hotel
                </li>
                <li>
                  {" "}
                  <IoMdCheckmark />
                  Train tickets and Bus transportation
                </li>
              </div>
              <div>
                <li>
                  {" "}
                  <IoMdCheckmark />
                  Professional tour guide
                </li>
                <li>
                  {" "}
                  <IoMdCheckmark />
                  Transfers between destinations
                </li>
                <li>
                  {" "}
                  <IoCloseSharp />
                  Entrance fees to museums
                </li>
                <li>
                  {" "}
                  <IoCloseSharp />
                  Custom itinerary
                </li>
              </div>
            </ul>
          </div>
          <div className="main-content__options">
            <h2>Itinerary</h2>
            <p>
              We have carefully planned out each day to give you the best
              possible experience. From exploring historic landmarks to tasting
              delicious local cuisine, each day is packed with adventure and
              excitement. Join us as we take you on a journey through some of
              the most fascinating destinations in the world.
            </p>
            <ul role="list" className="itenerary-list">
              <li>
                {" "}
                <span>DAY 1</span> - Arrival and Orientation
              </li>
              <li>
                <span>DAY 2</span> - City Tour
              </li>
              <li>
                <span>DAY 3</span> - Nature Hike
              </li>
              <li>
                <span>DAY 4</span> - Museum Visit
              </li>
              <li>
                <span>DAY 4</span> - Free Day
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar">
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="booking-form__quote">
              <div className="booking-form__range">
                Price <span>From</span>
              </div>
              <div className="booking-form__price">$ 789</div>
            </div>
            <div className="booking-form__title">
              <p>Booking ID: </p>
              <div className="booking-form__title_divide"></div>
              <p className="id">4828</p>
            </div>
            <div className="formgroup">
              <input type="date" required />
            </div>
            <div className="formgroup">
              <input
                type="text"
                placeholder="Type your name and surname"
                name="name"
                required
              />
            </div>
            <div className="formgroup">
              <input
                type="email"
                placeholder="Insert your email"
                name="email"
                required
              />
            </div>
            <div className="formgroup">
              <textarea
                rows="3"
                name="message"
                placeholder="Your message"
                required
              />
            </div>
            {/* <div>
              <div>
                <h4>Extra Services</h4>
                <p>Add extra services on your reservation</p>
              </div>
              <div>
                <input type="checkbox" />
                <input type="checkbox" />
              </div>
            </div> */}
            <button className="btn booking-btn" type="submit">
              Book Now
            </button>
            {wasSubmitted && <h2>Thanks for Booking {touristName}! </h2>}
          </form>
        </div>
      </section>
    </>
  );
}
