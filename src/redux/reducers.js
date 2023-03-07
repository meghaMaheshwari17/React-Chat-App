// get dummy json data from data.js
import {data} from '../data'

// set intial state of messages to that
const initialState = {
    messages: data,
  };
  
  export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
      // to add new message or user
      case "ADD_MESSAGE":
        return {
          ...state,
          messages:  action.payload,
        };
        // to reset the redux store to its initial state
        case "RESET":
        return initialState;
      default:
        return state;
    }
  };
  