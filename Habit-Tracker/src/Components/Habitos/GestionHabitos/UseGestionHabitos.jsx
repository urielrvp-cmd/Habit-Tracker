//Manejara toda la logica y el estado de los habitos.

import { useState } from "react";

export function useHabitos() {
  const [habitos, setHabitos] = useState(() => {
    const datosGuardados = localStorage.getItem(CLAVE_STORAGE);
    return datosGuardados ? JSON.parse(datosGuardados) : [];
  });
  
  const guardarEnStorage = (nuevosHabitos) => {
  localStorage.setItem(CLAVE_STORAGE, JSON.stringify(nuevosHabitos));
  setHabitos(nuevosHabitos);
  };

  const agregarHabito = (nombre) => {
    const nuevo = {
      id: crypto.randomUUID(),
      nombre,
      completado: false,
    };
    guardarEnStorage([...habitos, nuevo]);
  };

  const alternarHabito = (id) => {
    const nuevosHabitos = habitos.map((h) =>
      h.id === id ? { ...h, completado: !h.completado } : h
    );
    guardarEnStorage(nuevosHabitos);
  };

  const eliminarHabito = (id) => {
    const nuevosHabitos = habitos.filter((h) => h.id !== id);
    guardarEnStorage(nuevosHabitos);
  };

  const eliminarCompletados = () => {
    const nuevosHabitos = habitos.filter((h) => !h.completado);
    guardarEnStorage(nuevosHabitos);
  };

  const habitosCompletados = habitos.filter((h) => h.completado);
  const habitosPendientes = habitos.filter((h) => !h.completado);

  return { habitos,
    habitosCompletados,
    habitosPendientes,
    agregarHabito,
    alternarHabito,
    eliminarHabito,
    eliminarCompletados,
   };
}