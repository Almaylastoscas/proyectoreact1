import React, { useState } from "react";

const Formulario = () => {
  const [todo, setTodo] = useState({
    todoNombre: "",
    todoDescripcion: "",
    todoEstado: "pendiente",
    todoCheck: false,
  });
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { todoNombre, todoDescripcion } = todo;
    if (!todoDescripcion.trim() || !todoNombre.trim()) {
      setError(true);
      return;
    }
    setError(false);
    console.log(todo);
  };
  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  const PintarError = () => {
    return <div className="alert alert-danger">Campos obligatorios</div>;
  };

  return (
    <div className="container mt-2">
      <h1>Formulario controlado por estados "UseState"</h1>
      {error ? <PintarError /> : null}
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Ingrese todo"
          name="todoNombre"
          value={todo.todoNombre}
          onChange={handleChange}
        />
        <textarea
          className="form-control mb-2"
          type="text"
          placeholder="ingrese descripcion"
          name="todoDescripcion"
          value={todo.todoDescripcion}
          onChange={handleChange}
        />
        <select
          className="form-control mb-2"
          name="todoEstado"
          onChange={handleChange}
          value={todo.todoEstado}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completada">Completada</option>
        </select>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
            checked={todo.todoCheck}
            onChange={handleChange}
            name="todoCheck"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Dar prioridad
          </label>
        </div>
        <button className="btn btn-primary" type="submit">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
