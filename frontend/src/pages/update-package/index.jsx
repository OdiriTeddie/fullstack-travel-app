import { useSelector } from "react-redux";
import "./index.scss";
import { Form, redirect, redirectDocument } from "react-router-dom";
import { customFetch } from "../../utils";
import day from "dayjs";
import { toast } from "react-toastify";

export const action =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;

    if (!user) {
      toast.warn("You must be logged In");
      return redirect("/login");
    }

    const token = store.getState().userState.user.token;

    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const editSelectedPackageData = JSON.parse(
      localStorage.getItem("editData")
    );

    const { id } = editSelectedPackageData;

    try {
      const response = customFetch.patch(`/selected-packages/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("You updated a package successfully");
      localStorage.removeItem("editData");
      return redirectDocument("/dashboard");
    } catch (error) {
      console.log(error);
    }
    return null;
  };

export default function UpdatePackage() {
  const user = useSelector((state) => state.userState.user);

  const editSelectedPackageData = JSON.parse(localStorage.getItem("editData"));
  const { date, msg, price, id } = editSelectedPackageData;

  const editDate = day(date).format("YYYY-MM-DD");

  return (
    <section className="modal container">
      <div className="update-form">
        <Form className="editBooking-form" method="POST">
          <div className="editBooking-form__quote">
            <div className="editBooking-form__range">Price</div>
            <div className="editBooking-form__price">$ {price}</div>
          </div>
          <div className="editBooking-form__title">
            <p>Package ID: </p>
            <div className="editBooking-form__title_divide"></div>
            <p className="id"> {id.slice(0, 6)} </p>
          </div>
          <div className="formgroup">
            <input type="date" required name="date" defaultValue={editDate} />
          </div>
          <div className="formgroup"></div>
          <div className="formgroup">
            <textarea
              rows="5"
              cols="15"
              name="msg"
              placeholder="Your message"
              required
              defaultValue={msg}
            />
          </div>

          {user ? (
            <button className="btn booking-btn" type="submit">
              Update Package
            </button>
          ) : (
            <button className="btn booking-btn" type="submit">
              Login to Book
            </button>
          )}
        </Form>
      </div>
    </section>
  );
}
