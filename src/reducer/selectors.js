import { createSelector } from "reselect";

/*--------------------------- advertisment selector ------------------------- */
const selectAdvertisment = (state) => state.home.advertismentData;

export const advertismentData = createSelector(
  selectAdvertisment,
  (allAdvertisment) => allAdvertisment
);
