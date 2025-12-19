//Muestra la lista de habitos
import ItemHabito from "../HabitosItem/HabitosItem";

function ListaHabitos({ habitos, onAlternar, onEliminar }) {
  if (habitos.length === 0) {
    return <p>Sin hábitos</p>;
  }

  return (
    <ul className="lista-habitos">
      {habitos.map((habito) => (
        <ItemHabito
          key={habito.id}
          habito={habito}
          onAlternar={onAlternar}
          onEliminar={onEliminar}
        />
      ))}
    </ul>
  );
}

export default ListaHabitos;