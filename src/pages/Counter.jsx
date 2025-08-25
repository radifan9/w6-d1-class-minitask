import React, { useContext } from "react";
import { counterContext } from "../context/counter/counterContext";

export const Counter = () => {
  const { state, dispatch } = useContext(counterContext);

  return (
    <>
      <h1>Counter</h1>
      <p >
        This page is to demonstrate the use of Context, useReducer for a counter
        app
      </p>
      <p className="mb-10">Here we use Context for storing the count state and Reducer for changing the state of the count.</p>

      <p>Count : {state.count}</p>
      <div className="flex gap-4">
        <button
          className="rounded-sm bg-gray-100 px-2"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          +
        </button>
        <button
          className="rounded-sm bg-gray-100 px-2"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          -
        </button>
        <button
          className="rounded-sm bg-gray-100 px-2"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>
        <button
          className="rounded-sm bg-gray-100 px-2"
          onClick={() => dispatch({ type: "RANDOM" })}
        >
          Random
        </button>
      </div>
    </>
  );
};
