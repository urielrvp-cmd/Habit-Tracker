//resumen total de los habitos.}

function Resumen({ total, completados }) {
  const pendientes = total - completados;

  return (
    <div>
      <p>Total: {total}</p>
      <p>Completados: {completados}</p>
      <p>Pendientes: {pendientes}</p>
    </div>
  );
}

export default Resumen;

