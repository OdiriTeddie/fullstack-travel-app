import "./index.scss";
import { FaLocationDot } from "react-icons/fa6";
import PropTypes from "prop-types";
import day from "dayjs";
import { customFetch } from "../../utils";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSelectedPackage } from "../../features/travelPackages/travelPackagesSlice";

export const SelectedPackageBox = ({
  tourName,
  duration,
  country,
  price,
  date,
  image,
  message,
  selectedId,
}) => {
  const token = useSelector((state) => state.userState.user.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const response = customFetch.delete(`/selected-packages/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("You removed a package successfully");
      navigate(0);
    } catch (error) {
      console.log("Error");
    }
  };

  const handleEdit = (selectedId, price, date, msg) => {
    const editPackageData = { id: selectedId, price, date, msg };
    dispatch(getSelectedPackage(editPackageData));
    navigate("/update-package");
  };

  return (
    <div className="selectedPackage__box">
      <div className="selectedPackage__img">
        <img src={image} alt="" />
      </div>
      <div className="selectedPackage__content">
        <div className="selectedPackage__content_body">
          <div className="selectedPackage__content_header">
            <div>
              <p>{tourName}</p>
              <div className="selectedPackage__locator">
                <FaLocationDot />
                <span>{country}</span>
              </div>
            </div>
            <div className="selected__date">
              <span>Date:</span> <span> {day(date).format("DD/MM/YYYY")} </span>
            </div>
            <div className="selected__date">
              <span>Duration:</span> <span> {duration} </span>
            </div>
          </div>
          <div>
            <p className="selectedPackage__details">{message}</p>
          </div>
        </div>
        <div className="selectedPackage__rate">
          <p>
            <span>$</span> <span>{price}</span>
          </p>

          <div className="selectedPackage-btns">
            <button
              className="btn update-btn"
              to="/"
              onClick={() => handleEdit(selectedId, price, date, message)}
            >
              Edit
            </button>
            <button
              className="btn update-btn"
              onClick={() => handleDelete(selectedId)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

SelectedPackageBox.propTypes = {
  tourName: PropTypes.string,
  duration: PropTypes.string,
  country: PropTypes.string,
  price: PropTypes.number,
  tourExcept: PropTypes.string,
  image: PropTypes.string,
  links: PropTypes.string,
  message: PropTypes.string,
  date: PropTypes.string,
  selectedId: PropTypes.string,
};
