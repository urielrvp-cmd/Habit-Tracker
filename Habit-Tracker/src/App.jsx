import { useHabitos } from "./components/Habitos/GestionHabitos/UseGestionHabitos";
import FormularioHabito from "./Components/Habitos/FormularioNuevoHabitos/FormularioHabitos";
import ListaHabitos from "./Components/Habitos/ListaDeHabitos/ListaHabitos"

function App() {
  const { habitos, agregarHabito } = useHabitos();
  return (
    <div>
      <h1>Habit Tracker</h1>
      <FormularioHabito onAgregar={agregarHabito} />
      <ListaHabitos habitos={habitos} />
    </div>
  );
}

export default App;