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
    <form className="formulario-habito" onSubmit={manejarEnvio}>
      <input
        className="campo-habito"
        type="text"
        placeholder="Nuevo hábito"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button className="boton-agregar-habito">Agregar</button>
    </form>
  );
}

export default FormularioHabito;