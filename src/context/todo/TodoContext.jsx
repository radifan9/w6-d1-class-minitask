import { useReducer } from "react";
import { todoContext as TodoContext } from "./todoContext";

// { title: string, isDone: boolean }
const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      // Make sure no same title is added
      // Loop through the entire array, if there the same title with the payload, the immediately return
      for (const element of state) {
        if (element.title == action.payload.title) {
          return state;
        }
      }
      return [...state, action.payload];

    case "TOOGLE_TODO":
      // Return each and every element in the list
      // But if the title match the action.payload, then toggle it
      return state.map((todo) => {
        if (todo.title == action.payload) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });

    case "DELETE_TODO":
      // Return everything as long as todo.title and action.payload is different
      return state.filter((todo) => {
        return todo.title != action.payload;
      });

    default:
      return state;
  }
};

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // state --> the current todo list, starts as [] empty array from initialState
  // dispatch --> a function that you can call with { type, payload } objects to update the state through the reducer
  // reducer --> the function you defined earlier that handles "ADD_TODO" "TOGGLE_TODO" and "DELETE_TODO"

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {/* TodoProvider is a Context Provider. It's job is to make state and dispatch available to any component wrapped inside it */}
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
