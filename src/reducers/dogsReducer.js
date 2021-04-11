const initialState = {
  dogs: [],
  loading: true,
};

const dogsReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SET_DOGS":
      return {
        ...state,
        loading: false,
        dogs: action.dogs,
      };

    default:
      return state;
  }
};

export default dogsReducer;