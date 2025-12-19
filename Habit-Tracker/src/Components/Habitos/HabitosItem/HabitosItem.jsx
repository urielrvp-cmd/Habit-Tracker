// Mostrar un habito individual e permite interactuar con el.
import { useState } from "react";
import "./HabitoItemEstilos.css"

function ItemHabito({ habito, onAlternar, onEliminar }) {
  const [eliminando, setEliminando] = useState(false);

  const confirmarEliminacion = () => {
    setEliminando(true);
    setTimeout(() => {
      onEliminar(habito.id);
    }, 400);
  };

  return (
    <li
      className={`item-habito ${
        habito.completado ? "habito-completado" : ""
      } ${eliminando ? "habito-saliendo" : ""}`}
    >
      <span
        className={
          habito.completado
            ? "texto-habito texto-habito-completado"
            : "texto-habito"
        }
        onClick={() => onAlternar(habito.id)}
      >
        {habito.nombre}
      </span>

      <button
        className="boton-eliminar-habito"
        onClick={confirmarEliminacion}
      >
        ✕
      </button>
    </li>
  );
}

export default ItemHabito;