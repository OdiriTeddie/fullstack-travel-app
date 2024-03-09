import { Adventure } from "./component/adventure";
import { AllServices } from "./component/all-services";
import { Hero } from "./component/hero";
import { Packages } from "./component/packages";
import { PlanTrip } from "./component/plan";
import { SearchTrip } from "./component/seach-trip";

function App() {
  return (
    <>
      <Hero />
      <PlanTrip />
      <SearchTrip />
      <Adventure />
      <AllServices />
      <Packages />
    </>
  );
}

export default App;
