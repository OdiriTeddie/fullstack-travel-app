import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/user/userSlice";
import travelPackageReducer from "./features/travelPackages/travelPackagesSlice";
import modalReducer from "./features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    userState: userReducer,
    packageState: travelPackageReducer,
    modalState: modalReducer,
  },
});
