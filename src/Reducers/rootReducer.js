const initState = {
  root: "",
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "ROOT":
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
