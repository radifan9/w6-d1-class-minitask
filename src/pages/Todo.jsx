import React, { useContext, useState } from "react";
import { todoContext } from "../context/todo/todoContext";

export const Todo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { state, dispatch } = useContext(todoContext);

  // Handler function
  function handleAddToggle() {
    setIsOpen((now) => {
      return !now;
    });
  }

  return (
    <section className="relative min-h-screen">
      <TodoList
        handleAddToggle={handleAddToggle}
        state={state}
        dispatch={dispatch}
      />
      {isOpen && (
        <TodoForm handleAddToggle={handleAddToggle} dispatch={dispatch} />
      )}
    </section>
  );
};

const TodoList = ({ handleAddToggle, state, dispatch }) => {
  return (
    <div className="relative">
      <h1>Todo List</h1>
      <p className="mb-8">
        Aplikasi ini dibuat untuk mendemonstrasikan menggunakan React Context
        dan useReducer.
      </p>

      {/* Area Todolist */}

      <button onClick={handleAddToggle} className="p-2 border-[1px] rounded-xl">
        Add Todo
      </button>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {state.map((todo, idx) => {
          return (
            <div key={idx} className="rounded-xl border-[1px] p-2">
              <h2>{todo.title}</h2>
              <p
                onClick={() => {
                  dispatch({ type: "TOOGLE_TODO", payload: todo.title });
                }}
              >
                Is done? {todo.isDone ? "✅ Done" : "❎ Not Done"}
              </p>
              <button
                onClick={() => {
                  dispatch({ type: "DELETE_TODO", payload: todo.title });
                }}
              >
                ❌
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const TodoForm = ({ handleAddToggle, dispatch }) => {
  return (
    <div
      className="absolute bg-black/60 inset-0 -mx-[var(--small-pad)] flex flex-col items-center justify-center"
      onClick={handleAddToggle}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();

          dispatch({
            type: "ADD_TODO",
            payload: { title: e.target.title.value, isDone: false },
          });
          handleAddToggle();
        }}
        className="bg-white flex flex-col gap-4 p-8 rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <label htmlFor="title">Title</label>
        <input
          className="rounded-xl border-[1px] py-2"
          type="text"
          id="title"
          name="title"
        />
        <button className="p-2 border-[1px] rounded-xl">Add To Do List</button>
      </form>
    </div>
  );
};
