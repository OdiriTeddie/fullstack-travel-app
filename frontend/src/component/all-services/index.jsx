import { Link } from "react-router-dom";
import "./index.styles.scss";
import { IoMdCheckmark } from "react-icons/io";

export const AllServices = () => {
  return (
    <section className="all-services">
      <div className="all-services__overlay">
        <div className="container">
          <div className="all-services__img">
            <img src="./images/service1.jpg" alt="" />
          </div>
          <div className="all-services__content">
            <div className="all-services__header">
              <p className="subheading">Adventure Travel</p>
              <h2>Embrace the Thrill of the unknown</h2>
              <p>
                Are you tired of the typical tourist destinations and looking to
                step out of your comfort zone? Adventure travel may be the
                perfect solution for you! Here are four reasons why you should
                book an adventure travel experience :
              </p>
            </div>
            <ul role="list" className="checklist">
              <li className="list">
                <IoMdCheckmark />
                Connect with nature
              </li>
              <li className="list">
                <IoMdCheckmark />
                Experience other cultures
              </li>
              <li className="list">
                <IoMdCheckmark />
                Create unforgettable memories
              </li>
            </ul>
            <Link to="/services" className="btn">
              All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
