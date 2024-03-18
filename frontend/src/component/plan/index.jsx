import "./index.styles.scss";
import { Link } from "react-router-dom";
import { PackageBox } from "../package-box";
import { useLoaderData } from "react-router-dom";
import { customFetch } from "../../utils";

export const loader = async () => {
  try {
    const response = await customFetch.get("/packages");
    const packages = response.data.travelPackages;
    return { packages };
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const PlanTrip = () => {
  const { packages } = useLoaderData();

  const limitedList = packages.slice(0, 3);

  const mappedPackages = limitedList?.map((travelPackage) => {
    const {
      name,
      duration,
      image,
      shortDescription,
      price,
      country,
      _id: id,
    } = travelPackage;
    return (
      <PackageBox
        key={id}
        city={name}
        duration={duration}
        country={country}
        price={price}
        summary={shortDescription}
        image={image}
        links={`/packages/${name}`}
      />
    );
  });
  return (
    <section className="plan-trip">
      <div className="container">
        <div className="plan-header">
          <div className="plan-trip__heading">
            <p className="plan-trip__subheading">Dream Vacation Destination</p>
            <h2>Plan the Trip of a Lifetime with Ease</h2>
            <p>
              Whether you are looking for a romantic getaway, a family-friendly
              adventure, or a solo journey to explore the world, a travel agency
              can provide you with a custom-tailored itinerary that exceeds your
              expectations.
            </p>
            <Link to="/services" className="btn">
              More Info
            </Link>
          </div>
          <div>
            <img src="./images/map.png" alt="" />
          </div>
        </div>

        <div className="travel-list">{mappedPackages}</div>
      </div>
    </section>
  );
};
