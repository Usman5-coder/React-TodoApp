// import React from 'react'
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Todos = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  //   const [todoText, setTodoText] = useState("");

  function handleAdd() {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    console.log(todos);
  }

  function handleEdit(e) {
    setTodo(e.target.value);
  }
  function handleDelete(e, id) {
    let newTodos = todos.filter((todo) => todo.id!== id);
    setTodos(newTodos);
  }
  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((todo) => {
      return todo.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };
  return (
    <>
      <div className="todo-container w-[70vw] mt-[3rem] mx-auto rounded-xl py-4 bg-slate-700 min-h-[80vh]">
        <h2 className="todo-title text-center text-2xl text-white font-semibold">
          Add New Todos
        </h2>
        <div className="add-todo flex justify-center items-center gap-4 py-4 on">
          <input
            type="text"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
            className="bg-white p-1 rounded-sm"
            placeholder="Add New Todo..."
          />
          <button
            className="add-btn text-white bg-green-500 hover:bg-green-700 text-center px-4 py-1 rounded-sm"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
        <h2 className="your-todos text-center text-white text-3xl font-semibold ">
          Your Todos
        </h2>
        {todos.map((item) => {
          return (
            <div
              key={item.todo}
              className="todos px-[3rem] my-2 text-white text-center flex justify-between"
            >
              <input
                type="checkbox"
                value={item.isCompleted}
                name={item.id}
                onChange={handleCheckbox}
                id=""
              />
              <div className={item.isCompleted ? "line-through" : ""}>
                {item.todo}
              </div>
              <div className="buttons flex gap-2">
                <button
                  onClick={(e) => {
                    handleDelete(e, item.id);
                  }}
                  className="delete text-sm text-white bg-green-500 hover:bg-green-700 text-center px-4 py-1 rounded-sm"
                >
                  Delete
                </button>
                <button
                  onClick={handleEdit}
                  className="edit text-sm text-white bg-green-500 hover:bg-green-700 text-center px-4 py-1 rounded-sm"
                >
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Todos;
