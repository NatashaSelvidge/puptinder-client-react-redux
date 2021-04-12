const initialState = {
  dogs: [],
  loading: true,
};

const dogsReducer = (state = initialState, action) => {
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
    case "ADD_DOG":
      return {
        ...state,
        dogs: [...state.dogs, action.dog],
      };

    default:
      return state;
  }
};

export default dogsReducer;
