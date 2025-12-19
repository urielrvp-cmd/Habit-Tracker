// Mostrar un habito individual e permite interactuar con el.

function ItemHabito({ habito, onAlternar, onEliminar }) {
  return (
            <li>
              <span
                onClick={() => onAlternar(habito.id)}
                  style={{
                  textDecoration: habito.completado ? "line-through" : "none",
                  cursor: "pointer",
                }}
                >
                {habito.nombre}
              </span>
              <button onClick={() => onEliminar(habito.id)}>
              ✕
              </button>
            </li>
          );
}

export default ItemHabito;