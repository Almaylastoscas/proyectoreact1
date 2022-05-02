import React, { useState } from "react";
import Formulario2 from "./Formulario2";
import TodoCard from "./TodoCard";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const agregarTodo = (todo) => {
    console.log(todo);
    setTodos((old) => [...old, todo]);
  };
  const eliminarTodo = (id) => {
    setTodos((old) => old.filter((e) => e.id !== id));
  };
  const editarTodo = (id) => {
    const editarTodos = todos.map((e) =>
      e.id === id ? { ...e, estado: !e.estado } : e
    );
    setTodos(editarTodos);
  };
  return (
    <div>
      <h1>Liasta de TODOS</h1>
      <Formulario2 agregarTodo={agregarTodo} />
      <ul className="list-group list-group-numbered">
        {todos.map((e) => (
          <TodoCard
            key={e.id}
            todo={e}
            eliminarTodo={eliminarTodo}
            editarTodo={editarTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
