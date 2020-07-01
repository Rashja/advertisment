import { ON_LOADER, OFF_LOADER } from "../actions/base";

const initialState = { loading: false };

const base = (state = initialState, actions) => {
  switch (actions.type) {
    case ON_LOADER:
      return {
        ...state,
        loading: true,
      };
    case OFF_LOADER:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default base;
