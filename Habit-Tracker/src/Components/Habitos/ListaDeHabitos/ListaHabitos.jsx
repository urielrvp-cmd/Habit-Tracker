//Muestra la lista de habitos
import ItemHabito from "../HabitosItem/HabitosItem";

function ListaHabitos({ habitos }) {
  if (habitos.length === 0) {
    return <p>Sin hábitos</p>;
  }

  return (
    <ul className="lista-habitos">
      {habitos.map((habito) => (
        <ItemHabito
          key={habito.id}
          habito={habito}
        />
      ))}
    </ul>
  );
}

export default ListaHabitos;