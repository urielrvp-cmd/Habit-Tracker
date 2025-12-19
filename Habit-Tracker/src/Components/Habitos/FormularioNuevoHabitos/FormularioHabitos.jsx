//crear un nuevo habito a partir de un formulario.
import { useState } from "react";
import "./FormularioHabitosEstilos.css"

function FormularioHabito({ onAgregar }) {
  const [nombre, setNombre] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!nombre.trim()) return;
    onAgregar(nombre);
    setNombre("");
  };

  return (
    <form onSubmit={manejarEnvio}>
      <input
        type="text"
        placeholder="Nuevo hábito"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button>Agregar</button>
    </form>
  );
}

export default FormularioHabito;