import PropTypes from "prop-types";

export const ServicesBox = ({ icon, title, text }) => {
  return (
    <div className="module-list__box">
      <img src={icon} alt="" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

ServicesBox.propTypes = {
  icon: PropTypes.ReactNode,
  title: PropTypes.string,
  text: PropTypes.string,
};
