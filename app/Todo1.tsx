 'use client' // Note: If this is not a typo and you want to use 'use strict', correct it to 'use strict'
import React, { useState } from "react";

// Define the TodoApp component
export default function TodoApp() {
  // State variables
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { todoText: "todo 1", completed: false },
    { todoText: "todo 2", completed: true },
    { todoText: "todo 3", completed: true },
    { todoText: "todo 4", completed: false },
  ]);

  // Event handler for checkbox click
  const onClickHandler = (selectedTodo:any) => {
    const newTodos = todos.map((todo) => {
      if (todo.todoText === selectedTodo.todoText) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  // Event handler for adding a new todo
  const addTodo = () => {
    const newTodo = { todoText: todo, completed: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodo(""); // Clear input field after adding todo
  };

  // Event handler for deleting a todo
  const deleteTodo = (selectedTodo:any) => {
    const newTodos = todos.filter((todo) => todo.todoText !== selectedTodo.todoText);
    setTodos(newTodos);
  };

  // JSX structure for the TodoApp component
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "400px", margin: "auto" }}>
      <h1>Todo App</h1>
      <div style={{ marginBottom: "10px" }}>
        <input
          placeholder="Add Todo Text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todoItem) => (
          <li
            key={todoItem.todoText}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "5px",
            }}
          >
            <input
              type="checkbox"
              checked={todoItem.completed}
              onChange={() => onClickHandler(todoItem)}
            />
            <span
              style={{
                color: todoItem.completed ? "green" : "orange",
                fontStyle: "oblique",
                marginLeft: "5px",
              }}
            >
              {todoItem.todoText}
            </span>
            <button onClick={() => deleteTodo(todoItem)} style={{ marginLeft: "10px" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
