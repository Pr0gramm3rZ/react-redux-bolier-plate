export const root = () => {
  return async (dispatch, getState) => {
    dispatch({ type: "ROOT" });
  };
};
