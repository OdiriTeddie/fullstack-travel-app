import { PageHeader } from "../../component/page-header";
import "./index.styles.scss";
import { FaLocationDot } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <PageHeader label="Contact Us" />
      <section className="container contact-details">
        <div className="contact-box">
          <div className="contact-box__heading">
            <div className="contact-box__icon">
              <FaLocationDot />
            </div>
            <h3>Location</h3>
          </div>
          <div className="contact-box__details">
            <h4>Travel Agency</h4>
            <p>1626 Michigan Ave, Wolverhampton WV39 0JT, United Kingdom</p>
          </div>
          <div className="contact-box__details">
            <h4>Travel Agency</h4>
            <p>1626 Michigan Ave, Wolverhampton WV39 0JT, United Kingdom</p>
          </div>
        </div>
        <div className="contact-box">
          <div className="contact-box__heading">
            <div className="contact-box__icon">
              <FaHeadset />
            </div>
            <h3>Give us a call</h3>
          </div>
          <div className="contact-box__details">
            <h4>Mobile Number</h4>
            <p>
              Paul Davis - Tour Consultant : +1 629 592 593 Amy Moore - Local
              Guide : +1 483 842 205
            </p>
          </div>
          <div className="contact-box__details">
            <h4>Office Number</h4>
            <p>
              Administration : +1 184 016 482 Technical Office +1 963 935 836
            </p>
          </div>
        </div>
        <div className="contact-box">
          <div className="contact-box__heading">
            <div className="contact-box__icon">
              <MdOutlineEmail />
            </div>
            <h3>Write for anything</h3>
          </div>
          <div className="contact-box__details">
            <h4>Quotes</h4>
            <p>
              Write to this email for a detailed quotation quote@travel.com and
              information.
            </p>
          </div>
          <div className="contact-box__details">
            <h4>Consulting</h4>
            <p>
              Our free consultation service can be requested here
              info@travel.com every day.
            </p>
          </div>
        </div>
      </section>
      <section className="container-wide contact-form">
        <div className="form-header">
          <p className="form-header__subheading">Plan your Next Trip</p>
          <h2>Get in Touch</h2>
          <p className="form-header__subtext">
            Write to us for personalized travel advice or for information on
            group travel and last minute travel, all travel is insured and safe.
          </p>

          <form className="main-form">
            <input type="text" placeholder="Type your name" />

            <input type="email" placeholder="Insert your email" />

            <textarea cols="30" rows="4" placeholder=" Your Message"></textarea>

            <button type="submit" className="form-btn">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
