// Importa la librería que crea la aplicación React en el navegador.
import ReactDOM from "react-dom/client";
// Importa el componente BrowserRouter para activar la navegación por URL sin recargar la página.
import { BrowserRouter } from "react-router-dom";
// Importa estilos generales de la aplicación.
import "./index.css";
// Importa la aplicación principal con todas las rutas y componentes.
import App from "./App.jsx";

// BrowserRouter habilita la navegacion entre las vistas sin recargar la pagina.
// Se utiliza para que los enlaces del sidebar y los Route funcionen correctamente.
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
