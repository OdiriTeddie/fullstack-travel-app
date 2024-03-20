import "./index.scss";
import { SelectedPackageBox } from "../../component";
import { Link, redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { customFetch } from "../../utils";

export const loader = (store) => async () => {
  const user = store.getState().userState.user;

  if (!user) {
    toast.warn("You must be logged In");
    return redirect("/login");
  }
  const token = store.getState().userState.user.token;

  try {
    const response = await customFetch("/selected-packages", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const selectedPackages = response.data;
    return { selectedPackages };
  } catch (error) {
    console.log(error);
  }
  return null;
};

export default function Dashboard() {
  const user = useSelector((state) => state.userState.user);
  const { selectedPackages } = useLoaderData();

  const displaySelectedPackages = selectedPackages.map((packages) => {
    const {
      _id: selectedId,
      date,
      msg,
      packageId: {
        country,
        name,
        price,
        duration,
        image,
        shortDescription,
        _id: id,
      },
    } = packages;
    return (
      <SelectedPackageBox
        key={selectedId}
        tourName={name}
        date={date}
        duration={duration}
        country={country}
        price={price}
        tourExcept={shortDescription}
        message={msg}
        image={image}
        links="#"
        id={id}
        selectedId={selectedId}
      />
    );
  });
  console.log(displaySelectedPackages.length);

  return (
    <section className="dashboard">
      <div className="container">
        <div className="dashboard__header">
          <h1>Welcome, {user.name}</h1>
        </div>
        <div className="selectedPackage__list">
          {displaySelectedPackages.length === 0 ? (
            <div className="empty">
              <h4>Sorry, no packages yet, please book a travel package </h4>
              <Link to="/packages" className="btn">
                Packages
              </Link>{" "}
            </div>
          ) : (
            displaySelectedPackages
          )}
        </div>
      </div>
    </section>
  );
}
