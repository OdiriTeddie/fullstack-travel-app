import { Link } from "react-router-dom";

export default function Error() {
  return (
    <main>
      <div>
        <p>404</p>
        <h1>page not found</h1>
        <p>Sorry, we could not find the page you are looking for.</p>
        <div>
          <Link to="/">go back home</Link>
        </div>
      </div>
    </main>
  );
}
