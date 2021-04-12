export const getDogs = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    fetch("http://localhost:3001/dogs")
      .then((resp) => resp.json())
      .then((dogs) => dispatch({ type: "SET_DOGS", dogs }));
  };
};

export const addDog = (dog, history) => {
  return (dispatch) => {
    fetch("http://localhost:3001/dogs", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ dog }),
    })
      .then((resp) => resp.json())
      .then((dog) => {
        dispatch({ type: "ADD_DOG", dog });
        history.push("/dogs");
      });
  };
};
