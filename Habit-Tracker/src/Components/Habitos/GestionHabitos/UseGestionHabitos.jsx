//Manejara toda la logica y el estado de los habitos.

import { useState } from "react";

export function useHabitos() {
  const [habitos, setHabitos] = useState([]);

  return { habitos };
}