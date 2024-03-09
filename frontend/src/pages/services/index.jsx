import "./index.styles.scss";
import { PageHeader } from "../../component/page-header";
import { IoMdCheckmark } from "react-icons/io";

import ServicImg1 from "../../assets/service1.jpg";
import ServicImg2 from "../../assets/service2.jpg";
import ServicImg3 from "../../assets/service3.jpg";
import ServicImg4 from "../../assets/service4.jpg";

import Airline from "../../assets/ship.png";
import OceanCruises from "../../assets/police.png";
import Transport from "../../assets/transport.png";
import Iteneraries from "../../assets/itenaries.png";
import Insurance from "../../assets/insurance.png";
import Guide from "../../assets/guide.png";
import { Link } from "react-router-dom";
import { ServicesBox } from "../../component";

export default function Services() {
  return (
    <>
      <PageHeader label={"Services"} />
      <section className="services">
        <div className="service-overlay"></div>
        <div className="container">
          <div className="services__content">
            <div className="services__header">
              <h2>Tourist Hotspots</h2>
              <p>Trip Planning for the Best Travel Experience Possible</p>
            </div>
            <div className="services__details">
              <p className="services__text">
                Welcome to our travel agency, where we specialize in providing
                our clients with unforgettable travel experiences.Whether you
                are looking to relax on a tropical beach or embark on a cultural
                adventure, we can help you plan your dream vacation. From
                flights and accommodations to tours and activities, we will
                handle all the details, so you can focus on making memories.
              </p>
              <ul className="services__list" role="list">
                <li>
                  <IoMdCheckmark />
                  We offer a wide range of travel tours to destinations all over
                  the world
                </li>
                <li>
                  <IoMdCheckmark />
                  Our travel agents are available to assist you every step of
                  the way
                </li>
              </ul>
              <button className="btn">Contact Us</button>
            </div>
          </div>
          <div className="services__img img1">
            <div className="img-small">
              <img src={ServicImg1} alt="" />
            </div>
            <div className="img-small img2">
              <img src={ServicImg2} alt="" />
            </div>
            <div className="img-small img3">
              <img src={ServicImg3} alt="" />
            </div>
            <div className="img-wide img4">
              <img src={ServicImg4} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="services__modules">
        <div className="container">
          <div className="services__header">
            <h2>Let us help you plan your next adventure</h2>
            <p>Perfect Vacation come True</p>
          </div>

          <div className="module-list">
            <ServicesBox
              icon={Airline}
              title="Airline Tickets"
              text="Our travel agency specializes in providing our customers with the best deals on airline tickets."
            />
            <ServicesBox
              icon={OceanCruises}
              title="Ocean Cruises"
              text="Luxurious and comfortable way of travel, and passengers can enjoy stunning views of the sea."
            />
            <ServicesBox
              icon={Transport}
              title="Means of Transport"
              text="Our travel agency offers a variety of means of transport to get
              you around your destination safely."
            />
            <ServicesBox
              icon={Iteneraries}
              title="Travel itineraries"
              text="Our team of experts will take care of all the planning and
              logistics, providing you with a detailed itinerary."
            />
            <ServicesBox
              icon={Insurance}
              title="Travel Insurance"
              text="Travel insurance is an essential part of any trip, providing
              peace of mind and protection."
            />
            <ServicesBox
              icon={Guide}
              title="Local Guide"
              text=" We can connect you with guides who will take you off the best
              path and show you their city."
            />
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="services-cta__overlay"></div>
        <div className="services-cta__content">
          <h2>Let us Help you Plan your Next Getaway Now</h2>
          <p>
            Contact our agency and we will get you a quote in a very short time.
            Discover the world with us! Book your next unforgettable adventure
            today.
          </p>
          <Link to="/contact" className="btn">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
