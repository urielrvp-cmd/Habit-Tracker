//Muestra la lista de habitos

function ListaHabitos({ habitos }) {
  if (habitos.length === 0) {
    return <p>Sin hábitos</p>;
  }

  return (
    <ul>
      {habitos.map((habito) => (
        <li key={habito.id}>{habito.nombre}</li>
      ))}
    </ul>
  );
}

export default ListaHabitos;