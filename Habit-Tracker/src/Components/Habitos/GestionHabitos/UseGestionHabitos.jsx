//Manejara toda la logica y el estado de los habitos.

import { useState } from "react";

export function useHabitos() {
  const [habitos, setHabitos] = useState(() => {
    const datosGuardados = localStorage.getItem(CLAVE_STORAGE);
    return datosGuardados ? JSON.parse(datosGuardados) : [];
  });

  return { habitos };
}