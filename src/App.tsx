import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // URL de la página de tu web donde está el iframe
    window.location.replace("https://ayna.com.pe/parametros-vma/");
  }, []);

  // No renderizamos nada, solo redirigimos
  return null;
}
