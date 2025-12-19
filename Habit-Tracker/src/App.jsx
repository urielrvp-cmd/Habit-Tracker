import { useState } from "react";
import { useHabitos } from "./components/GestionHabitos/UseGestionHabitos";
import FormularioHabito from "./components/FormularioNuevoHabitos/FormularioHabitos";
import ListaHabitos from "./components/ListaDeHabitos/ListaHabitos"
import Resumen from "./components/ResumenDeHabitos/ResumenHabitos";
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
        <section className="contenedor-columnas">
          <div className="columna columna-pendientes">
            <h2 className="titulo-columna">Pendientes</h2>
            <ListaHabitos
              habitos={habitosPendientes}
              onAlternar={alternarHabito}
              onEliminar={eliminarHabito}
            />
          </div>
        <section className="columna columna-completados">
          <h2 className="titulo-columna">Completados</h2>
            {habitosCompletados.length > 0 && (
              <button
                className="boton-eliminar-completados"
                onClick={eliminarCompletados}
              >
                🗑 Eliminar completados
              </button>
            )}
            <ListaHabitos
              habitos={habitosCompletados}
              onAlternar={alternarHabito}
              onEliminar={eliminarHabito}
            />
          </section>
        </section>
        <Resumen
          total={habitos.length}
          completados={habitosCompletados.length}
        />
      </main>

      <footer className="pie-aplicacion">
        <p className="texto-pie">
          © 2025 Habit Tracker. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;