import { createSlice } from "@reduxjs/toolkit";

const travelPackageSlice = createSlice({
  name: "travelPackage",
  initialState: {
    editPackage: false,
    // singlePackage: {},
    editSelectedPackageData: {},
  },
  reducers: {
    getPackage: (state, action) => {
      state.singlePackage = action.payload;
    },
    getSelectedPackage: (state, action) => {
      state.editPackage = true;
      state.editSelectedPackageData = action.payload;
      localStorage.setItem(
        "editData",
        JSON.stringify(state.editSelectedPackageData)
      );
    },
  },
});

export const { getPackage, getSelectedPackage } = travelPackageSlice.actions;

export default travelPackageSlice.reducer;
