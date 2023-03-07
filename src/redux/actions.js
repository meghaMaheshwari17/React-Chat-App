// to add new user or to add new message
export const addMessage = (message) => {
    return (dispatch) => {
      dispatch({ type: "ADD_MESSAGE", payload: message });
    };
  };
export const reset = () => {
    return (dispatch) => {
        dispatch({ type: "RESET" });
      };
    // Also the custom logic like for the rest of the logout handler
};