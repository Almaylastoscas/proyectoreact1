import Formulario from "./componentes/Formulario";
import TodoList from "./componentes/TodoList";

function App() {
  return (
    <div className="container">
      <Formulario />
      <hr />
      <br />
      <TodoList />
    </div>
  );
}

export default App;
