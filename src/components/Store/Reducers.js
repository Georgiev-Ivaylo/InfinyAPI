import { combineReducers } from "redux";

const initialLoadingState = {
  isActive: false,
};

const loadingReducer = (state = initialLoadingState, action) => {
  switch (action.type) {
    case "START":
      return { ...state, isActive: true };
    case "STOP":
      return { ...state, isActive: false };
    default:
      return state;
  }
};

// Combine Reducers
const rootReducer = combineReducers({
  loading: loadingReducer,
  // Add other reducers here if you have more
});

export default rootReducer;
