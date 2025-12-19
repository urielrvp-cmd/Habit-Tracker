//resumen total de los habitos.}

import "./ResumenHabitos.css";

export default function Resumen({ total, completados }) {
  const pendientes = total - completados;

  return (
    <div className="contenedor-resumen">
      <p className="dato-resumen">Total: {total}</p>
      <p className="dato-resumen">Completados: {completados}</p>
      <p className="dato-resumen">Pendientes: {pendientes}</p>
    </div>
  );
}