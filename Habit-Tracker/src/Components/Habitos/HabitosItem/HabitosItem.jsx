// Mostrar un habito individual e permite interactuar con el.

function ItemHabito({ habito, onAlternar }) {
  return <li>
            <span
              onClick={() => onAlternar(habito.id)}
              style={{
                textDecoration: habito.completado ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
            {habito.nombre}
        </span>
    </li>;
}

export default ItemHabito;