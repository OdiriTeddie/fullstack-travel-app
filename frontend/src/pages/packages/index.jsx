import "./index.styles.scss";
import { PageHeader } from "../../component/page-header";
import PackageImg1 from "../../assets/package-img1.jpg";
import PackageImg2 from "../../assets/package2.jpg";
import PackageImg3 from "../../assets/package3.jpg";
import PackageImg4 from "../../assets/package4.jpg";
import PackageImg5 from "../../assets/package5.jpg";
import PackageImg6 from "../../assets/package6.jpg";
import PackageImg7 from "../../assets/package7.jpg";
import PackageImg8 from "../../assets/package8.jpg";
import PackageImg9 from "../../assets/package9.jpg";
import PackageImg10 from "../../assets/package10.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Packages() {
  return (
    <>
      <PageHeader label="Packages" />
      <section className="package">
        <div className="container package__list">
          <div className="package__box">
            <div className="package__img">
              <img src={PackageImg1} alt="" />
              <div className="package__duration">
                <FaClock />

                <span>1 Week</span>
              </div>
            </div>
            <div className="package__content">
              <div className="package__location">
                <p>Nile</p>
                <div className="package__locator">
                  <FaLocationDot />
                  <span>Egypt</span>
                </div>
              </div>

              <p className="package__details">
                Witness the grandeur of the pyramids and temples while sailing
                down the Nile river on a felucca boat.
              </p>

              <div className="package__rate">
                <div>
                  From
                  <p>
                    <span>$</span> <span>490</span>
                  </p>
                </div>
                <Link to="/packages/nile" className="btn">
                  Details
                </Link>
              </div>
            </div>
          </div>

          <div className="package__box">
            <div className="package__img">
              <img src={PackageImg2} alt="" />
              <div className="package__duration">
                <FaClock />

                <span>5 Days</span>
              </div>
            </div>
            <div className="package__content">
              <div className="package__location">
                <p>Florence</p>
                <div className="package__locator">
                  <FaLocationDot />
                  <span>Italy</span>
                </div>
              </div>

              <p className="package__details">
                Cultural tour in search of Italian history and its beauties with
                local guide and possibility to rent bikes.
              </p>

              <div className="package__rate">
                <div>
                  From
                  <p>
                    <span>$</span> <span>98</span>
                  </p>
                </div>
                <Link to="/packages/florence" className="btn">
                  Details
                </Link>
              </div>
            </div>
          </div>

          <div className="package__box">
            <div className="package__img">
              <img src={PackageImg3} alt="" />
              <div className="package__duration">
                <FaClock />

                <span>10 Days</span>
              </div>
            </div>
            <div className="package__content">
              <div className="package__location">
                <p>Rome</p>
                <div className="package__locator">
                  <FaLocationDot />
                  <span>Greece</span>
                </div>
              </div>

              <p className="package__details">
                Marvel at the breathtaking art and architecture, From the
                splendor of the Roman Empire to the Renaissance .
              </p>

              <div className="package__rate">
                <div>
                  From
                  <p>
                    <span>$</span> <span>490</span>
                  </p>
                </div>
                <Link to="/packages/athens" className="btn">
                  Details
                </Link>
              </div>
            </div>
          </div>
          <div className="package__box">
            <div className="package__img">
              <img src={PackageImg4} alt="" />
              <div className="package__duration">
                <FaClock />

                <span>13 Days</span>
              </div>
            </div>
            <div className="package__content">
              <div className="package__location">
                <p>Tokyo</p>
                <div className="package__locator">
                  <FaLocationDot />
                  <span>Japan</span>
                </div>
              </div>

              <p className="package__details">
                Experience the alluring beauty and bustling energy of Tokyo
                through our immersive tour with a good guide.
              </p>

              <div className="package__rate">
                <div>
                  From
                  <p>
                    <span>$</span> <span>790</span>
                  </p>
                </div>
                <Link to="/packages/tokyo" className="btn">
                  Details
                </Link>
              </div>
            </div>
          </div>
          <div className="package__box">
            <div className="package__img">
              <img src={PackageImg5} alt="" />
              <div className="package__duration">
                <FaClock />

                <span>14 Days</span>
              </div>
            </div>
            <div className="package__content">
              <div className="package__location">
                <p>Athens</p>
                <div className="package__locator">
                  <FaLocationDot />
                  <span>Greece</span>
                </div>
              </div>

              <p className="package__details">
                Immerse yourself in the history and culture of this ancient city
                as you explore the stunning Acropolis.
              </p>

              <div className="package__rate">
                <div>
                  From
                  <p>
                    <span>$</span> <span>620</span>
                  </p>
                </div>
                <Link to="/packages/athens" className="btn">
                  Details
                </Link>
              </div>
            </div>
          </div>
          <div className="package__box">
            <div className="package__img">
              <img src={PackageImg6} alt="" />
              <div className="package__duration">
                <FaClock />

                <span>1 Week</span>
              </div>
            </div>
            <div className="package__content">
              <div className="package__location">
                <p>Miami</p>
                <div className="package__locator">
                  <FaLocationDot />
                  <span>USA</span>
                </div>
              </div>

              <p className="package__details">
                With convenient transportation and a small group size, you will
                have the ultimate personalized tour experience.
              </p>

              <div className="package__rate">
                <div>
                  From
                  <p>
                    <span>$</span> <span>700</span>
                  </p>
                </div>
                <Link to="/packages/miami" className="btn">
                  Details
                </Link>
              </div>
            </div>
          </div>
          <div className="package__box">
            <div className="package__img">
              <img src={PackageImg7} alt="" />
              <div className="package__duration">
                <FaClock />

                <span>15 Days</span>
              </div>
            </div>
            <div className="package__content">
              <div className="package__location">
                <p>Toscany</p>
                <div className="package__locator">
                  <FaLocationDot />
                  <span>Italy</span>
                </div>
              </div>

              <p className="package__details">
                Whether you are looking for a romantic tour, Tuscany is the
                perfect destination for a true Italian experience.
              </p>

              <div className="package__rate">
                <div>
                  From
                  <p>
                    <span>$</span> <span>450</span>
                  </p>
                </div>
                <Link to="/packages/toscany" className="btn">
                  Details
                </Link>
              </div>
            </div>
          </div>
          <div className="package__box">
            <div className="package__img">
              <img src={PackageImg8} alt="" />
              <div className="package__duration">
                <FaClock />

                <span>8 Days</span>
              </div>
            </div>
            <div className="package__content">
              <div className="package__location">
                <p>Kyoto</p>
                <div className="package__locator">
                  <FaLocationDot />
                  <span>Japan</span>
                </div>
              </div>

              <p className="package__details">
                Witness the beauty of the cherry blossom season as you stroll
                through the famous Philosopher Path.
              </p>

              <div className="package__rate">
                <div>
                  From
                  <p>
                    <span>$</span> <span>480</span>
                  </p>
                </div>
                <Link to="/packages/kyoto" className="btn">
                  Details
                </Link>
              </div>
            </div>
          </div>
          <div className="package__box">
            <div className="package__img">
              <img src={PackageImg9} alt="" />
              <div className="package__duration">
                <FaClock />

                <span>10 Days</span>
              </div>
            </div>
            <div className="package__content">
              <div className="package__location">
                <p>Cairo</p>
                <div className="package__locator">
                  <FaLocationDot />
                  <span>Egypt</span>
                </div>
              </div>

              <p className="package__details">
                Our expert guides will take you on a journey through time as
                they share their knowledge and traditions.
              </p>

              <div className="package__rate">
                <div>
                  From
                  <p>
                    <span>$</span> <span>800</span>
                  </p>
                </div>
                <Link to="/packages/cairo" className="btn">
                  Details
                </Link>
              </div>
            </div>
          </div>
          <div className="package__box">
            <div className="package__img">
              <img src={PackageImg10} alt="" />
              <div className="package__duration">
                <FaClock />

                <span>1 Week</span>
              </div>
            </div>
            <div className="package__content">
              <div className="package__location">
                <p>Paris</p>
                <div className="package__locator">
                  <FaLocationDot />
                  <span>France</span>
                </div>
              </div>

              <p className="package__details">
                Our expert guides will take you on a journey through the history
                of this city, from the Louvre to Notre-Dame.
              </p>

              <div className="package__rate">
                <div>
                  From
                  <p>
                    <span>$</span> <span>900</span>
                  </p>
                </div>
                <Link to="/packages/paris" className="btn">
                  Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
