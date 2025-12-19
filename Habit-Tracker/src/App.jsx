import { useHabitos } from "./components/Habitos/GestionHabitos/UseGestionHabitos";
import FormularioHabito from "./Components/Habitos/FormularioNuevoHabitos/FormularioHabitos";
import ListaHabitos from "./Components/Habitos/ListaDeHabitos/ListaHabitos"
import Resumen from "./Components/Habitos/ResumenDeHabitos/ResumenHabitos";


function App() {
  const { habitos, habitosPendientes, agregarHabito,
  habitosCompletados, alternarHabito} = useHabitos();

  return (
    <div>
      <h1>Habit Tracker</h1>
      <FormularioHabito onAgregar={agregarHabito} />
      <section>
        <h2>Pendientes</h2>
          <ListaHabitos
            habitos={habitosPendientes}
            onAlternar={alternarHabito}
          />
      </section>

    <section>
      <h2>Completados</h2>
      <ListaHabitos
        habitos={habitosCompletados}
        onAlternar={alternarHabito}
      />
    </section>
    <Resumen
      total={habitos.length}
      completados={habitosCompletados.length}
    />
    </div>
  );
}

export default App;