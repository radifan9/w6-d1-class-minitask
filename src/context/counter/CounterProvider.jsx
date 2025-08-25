import { useReducer } from "react";
import { counterContext as CounterContext } from "./counterContext";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: 0 };
    case "RANDOM":
      return { ...state, count: Math.floor(Math.random() * 10) + 1 };
    default:
      return state;
  }
};

function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

export default CounterProvider;
