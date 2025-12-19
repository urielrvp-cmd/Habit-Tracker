import { useState } from "react";
import { useHabitos } from "./components/Habitos/GestionHabitos/UseGestionHabitos";
import FormularioHabito from "./Components/Habitos/FormularioNuevoHabitos/FormularioHabitos";
import ListaHabitos from "./Components/Habitos/ListaDeHabitos/ListaHabitos"
import Resumen from "./Components/Habitos/ResumenDeHabitos/ResumenHabitos";
import "./index.css"

const STORAGE_MODO = "modo-oscuro";

function App() {
  const [modoOscuro, setModoOscuro] = useState(() => {
    const modoGuardado = localStorage.getItem(STORAGE_MODO);
    return modoGuardado === "true";
  });
  
  const { 
    habitos, 
    habitosPendientes, 
    agregarHabito,
    habitosCompletados, 
    alternarHabito, 
    eliminarHabito,
    eliminarCompletados,} = useHabitos();

  const alternarModo = () => {
    const nuevoModo = !modoOscuro;
    setModoOscuro(nuevoModo);
    localStorage.setItem(STORAGE_MODO, nuevoModo);
  };

  return (
    <div className={`app ${modoOscuro ? "modo-oscuro" : "modo-claro"}`}>
      <header className="encabezado-aplicacion">
        <div className="barra-superior">
          <div className="logo-aplicacion">📘</div>
          <h1 className="titulo-aplicacion">
            Habit Tracker
          </h1>
          <button
            className="boton-modo"
            onClick={alternarModo}
            aria-label="Cambiar modo"
          >
            {modoOscuro ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      <main className="contenedor-principal"> 
        <FormularioHabito onAgregar={agregarHabito} />
          <section>
            <h2>Pendientes</h2>
              <ListaHabitos
                habitos={habitosPendientes}
                onAlternar={alternarHabito}
                onEliminar={eliminarHabito}
                />
          </section>

          <section>
            <h2>Completados</h2>
            {habitosCompletados.length > 0 && (
              <button onClick={eliminarCompletados}>
              Eliminar completados
            </button>
          )}
          <ListaHabitos
            habitos={habitosCompletados}
            onAlternar={alternarHabito}
            onEliminar={eliminarHabito}
            />
        </section>
        <Resumen
          total={habitos.length}
          completados={habitosCompletados.length}
          />
      </main>  
    </div>
  );
}

export default App;