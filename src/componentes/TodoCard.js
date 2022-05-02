import React from "react";

const TodoCard = (props) => {
  return (
    <li className=" list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">
          {props.todo.nombre} {props.todo.estado ? "finalizado" : "pendiente"}
        </div>
        <p>{props.todo.descripcion}</p>
        <div></div>
        <button
          className="btn btn-danger me-2 "
          onClick={() => props.eliminarTodo(props.todo.id)}
        >
          Eliminar
        </button>
        <button
          className="btn btn-warning"
          onClick={() => props.editarTodo(props.todo.id)}
        >
          Editar
        </button>
      </div>
      <span className="badge bg-primary rounded-pill">
        {props.todo.prioridad && "prioritario"}
      </span>
    </li>
  );
};

export default TodoCard;
