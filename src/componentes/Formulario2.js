import Swal from "sweetalert2";
import { useFormulario } from "../hookcuston.js/useFormulario";

const Formulario2 = ({ agregarTodo }) => {
  const initialState = {
    nombre: "",
    descripcion: "",
    estado: "pendiente",
    prioridad: "false",
  };
  const [inputs, handleChange, reset] = useFormulario(initialState);
  const { nombre, descripcion, estado, prioridad } = inputs;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim()) {
      e.targuet[0].focus();
      Swal.fire({
        title: "error!",
        text: "Complete todos los datos",
        icon: "error",
      });
      return;
    }
    if (!descripcion.trim()) {
      e.targuet[1].focus();
      Swal.fire({
        title: "error!",
        text: "Complete todos los datos",
        icon: "error",
      });
      return;
    }
    Swal.fire({
      title: "Exitooo!",
      text: "Tarea registrada con exito",
      icon: "success",
    });
    agregarTodo({
      nombre: nombre,
      descripcion: descripcion,
      estado: estado === "pendiente" ? false : true,
      prioridad: prioridad,
      id: Date.now(),
    });
    reset();
  };

  return (
    <div>
      <h1>Formulario 2 lista TODO</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          name="nombre"
          placeholder="Ingrese Todo Nombre"
          value={nombre}
          onChange={handleChange}
        />
        <textarea
          placeholder="Ingrese descripcion"
          className="form-control mb-2"
          name="descripcion"
          value={descripcion}
          onChange={handleChange}
        />
        <select
          name="estado"
          className="form-comtrol mb-2"
          value={estado}
          onChange={handleChange}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>
        <div className="form-check">
          <input
            id="flexChekDefault"
            className="form-check-input"
            type="checkbox"
            checked={prioridad}
            onChange={handleChange}
          />
          <label
            className="form-check-label"
            htmlFor="flexCheckDefault"
            name="prioridad"
          >
            Prioritario
          </label>
        </div>
        <button type="submit" className="btn btn-outline-primary">
          AGREGAR
        </button>
      </form>
    </div>
  );
};

export default Formulario2;
