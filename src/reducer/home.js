import { ADVERTISMENT_DATA } from "../actions/home";

const initialState = { advertismentData: [], advMode: "" };

const home = (state = initialState, actions) => {
  switch (actions.type) {
    case ADVERTISMENT_DATA:
      return {
        ...state,
        advertismentData: actions.payload.result,
      };
    default:
      return state;
  }
};

export default home;
