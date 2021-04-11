export const getDogs = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    fetch("http://localhost:3001/dogs")
      .then((resp) => resp.json())
      .then((dogs) => dispatch({ type: "SET_DOGS", dogs }));
  };
};
