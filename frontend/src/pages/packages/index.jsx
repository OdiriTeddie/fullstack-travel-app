import "./index.styles.scss";
import { PageHeader } from "../../component/page-header";

import { customFetch } from "../../utils";
import { MainPackageBox } from "../../component";
import { Form, useLoaderData } from "react-router-dom";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  try {
    const response = await customFetch.get("/packages", { params });
    const packages = response.data.travelPackages;
    const totalTravelPackages = response.data.totalTravelPackages;
    return { packages, totalTravelPackages };
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default function Packages() {
  const { packages, totalTravelPackages } = useLoaderData();

  const mappedPackages = packages?.map((travelPackage) => {
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
      <MainPackageBox
        key={id}
        tourName={name}
        duration={duration}
        country={country}
        price={price}
        tourExcept={shortDescription}
        image={image}
        links={`/packages/${name}`}
      />
    );
  });

  return (
    <>
      <PageHeader label="Packages" />
      <section className="package">
        <div className="container packages__head">
          <Form className="package-search">
            <label htmlFor="search">Search Packages</label>
            <input type="search" name="search" />
          </Form>
          <h2> Total Travel Packages: {totalTravelPackages}</h2>
        </div>

        <div className="container package__list">{mappedPackages}</div>
      </section>
    </>
  );
}
