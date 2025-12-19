import { useHabitos } from "./components/Habitos/GestionHabitos/UseGestionHabitos";
import FormularioHabito from "./Components/Habitos/FormularioNuevoHabitos/FormularioHabitos";


function App() {
  const { agregarHabito } = useHabitos();
  return (
    <div>
      <h1>Habit Tracker</h1>
      <FormularioHabito onAgregar={agregarHabito} />
    </div>
  );
}

export default App;