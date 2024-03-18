import "./index.styles.scss";
import SpacerImg from "../../assets/spacer-img.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { FaChild } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { PiLadderSimple } from "react-icons/pi";
import { IoMdCheckmark } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { Form, Link, redirect, useLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { customFetch } from "../../utils";
import { getPackage } from "../../features/travelPackages/travelPackagesSlice";
import { toast } from "react-toastify";

export const loader = async ({ params }) => {
  const response = await customFetch(`/packages/${params.packageName}`);
  const singlePackage = response.data.travelPackage;

  return { singlePackage };
};

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const { date, msg } = data;
    const userId = store.getState().userState.user.id;
    const token = store.getState().userState.user.token;
    console.log(token);
    const packageId = store.getState().packageState.singlePackage._id;

    const selectedPackageData = { userId, packageId, date, msg };

    try {
      const response = await customFetch.post(
        "/selected-packages",
        selectedPackageData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Travel Package booked successfully");
      return redirect("/dashboard");
    } catch (error) {
      toast.error("Login and Try again");
    }

    return null;
  };

export default function PackageSingle() {
  const user = useSelector((state) => state.userState.user);
  const dispatch = useDispatch();
  const { singlePackage } = useLoaderData();

  const {
    name,
    duration,
    longDescription,
    price,
    minAge,
    difficulty,
    _id: id,
  } = singlePackage;

  const handleSubmit = () => {
    dispatch(getPackage(singlePackage));
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
              <h1>{name}</h1>
              <div className="package-single__location_locator">
                <FaLocationDot />
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
                    <p> {duration} </p>
                  </div>
                </div>
                <div className="highlight__single">
                  <div className="highlight__icon">
                    <PiLadderSimple />
                  </div>
                  <div className="highlight__single_details">
                    <h4>Difficulty</h4>
                    <p> {difficulty} </p>
                  </div>
                </div>
                <div className="highlight__single">
                  <div className="highlight__icon">
                    <FaChild />
                  </div>
                  <div className="highlight__single_details">
                    <h4>Min Age</h4>
                    <p> {minAge} </p>
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
            <p>{longDescription}</p>
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
          <Form className="booking-form" method="POST">
            <div className="booking-form__quote">
              <div className="booking-form__range">
                Price <span>From</span>
              </div>
              <div className="booking-form__price">$ {price}</div>
            </div>
            <div className="booking-form__title">
              <p>Booking ID: </p>
              <div className="booking-form__title_divide"></div>
              <p className="id"> {id.slice(0, 6)} </p>
            </div>
            <div className="formgroup">
              <input type="date" required name="date" />
            </div>
            <div className="formgroup"></div>
            <div className="formgroup">
              <textarea
                rows="3"
                name="msg"
                placeholder="Your message"
                required
              />
            </div>

            {user ? (
              <button
                className="btn booking-btn"
                type="submit"
                onClick={handleSubmit}
              >
                Book Now
              </button>
            ) : (
              <Link to="/login" className="btn booking-btn" type="submit">
                Login to Book
              </Link>
            )}
          </Form>
        </div>
      </section>
    </>
  );
}
