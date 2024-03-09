import "./index.styles.scss";
import PropTypes from "prop-types";

export const PageHeader = ({ label }) => {
  return (
    <section className="page-header">
      <div className="page-header__overlay"></div>
      <div className="page-header__content">
        <h1>{label}</h1>
      </div>
    </section>
  );
};

PageHeader.propTypes = {
  label: PropTypes.string,
};
