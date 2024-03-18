import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Root from "./routes/root.jsx";
import { store } from "./store.js";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import {
  Contact,
  Dashboard,
  Login,
  Packages,
  PackageSingle,
  Register,
  Services,
  UpdatePackage,
} from "./pages/index.jsx";

// loaders
import { loader as dashboardLoader } from "./pages/dashboard";
import { loader as packagesLoader } from "./pages/packages";
import { loader as singlePackageLoader } from "./pages/package-single";
import { loader as homeLoader } from "./component/plan/index.jsx";
// actions
import { action as registerAction } from "./pages/register/index.jsx";
import { action as loginAction } from "./pages/login/index.jsx";
import { action as singlePackageAction } from "./pages/package-single/index.jsx";
import { action as updatePackageAction } from "./pages/update-package/index.jsx";

import Error from "./pages/error/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <App />,
        loader: homeLoader,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        loader: dashboardLoader(store),
        // action: dashboardAction(store),
      },
      {
        path: "/update-package",
        element: <UpdatePackage />,
        action: updatePackageAction(store),
      },
      {
        path: "/packages",
        element: <Packages />,
        loader: packagesLoader,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/packages/:packageName",
        element: <PackageSingle />,
        loader: singlePackageLoader,
        action: singlePackageAction(store),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <ToastContainer position="top-center" />
  </Provider>
);
