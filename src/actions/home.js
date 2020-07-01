import { fecthAdvertisement } from "../apis/home";
import { onLoader, offLoader } from "./base";
/*---------------------------------- get advertisment ----------------------------- */
export const ADVERTISMENT_WAITING = "ADVERTISMENT_WAITING";
export const ADVERTISMENT_DATA = "ADVERTISMENT_DATA";
export const ADVERTISMENT_FAILED = "ADVERTISMENT_FAILED";

export const getAdvertisment = () => {
  return async (dispatch) => {
    dispatch(onLoader());
    const result = await fecthAdvertisement();
    if (result.success && result.data.message !== "error") {
      dispatch(offLoader());
      return dispatch({
        type: ADVERTISMENT_DATA,
        payload: result.data,
      });
    } else if (result.data) {
      dispatch(offLoader());
      return dispatch({
        type: ADVERTISMENT_FAILED,
      });
    }
  };
};
