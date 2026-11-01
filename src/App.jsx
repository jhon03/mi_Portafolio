import { BrowserRouter, Routes, Route } from "react-router-dom";

// Componentes
import Navbar from "./components/NavBar/navbar";

// Páginas
import Inicio from "./pages/Inicio";
import Formacion from "./pages/Formacion";
import Proyectos from "./pages/Proyectos";
import TejidoSocial from "./pages/TejidoSocial";
import Familia from "./pages/Familia";
import Gustos from "./pages/Gustos";
import Servicios from "./pages/Servicios";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />

          <Route path="/formacion" element={<Formacion />} />

          <Route path="/proyectos" element={<Proyectos />} />

          <Route path="/tejido-social" element={<TejidoSocial />} />

          <Route path="/familia" element={<Familia />} />

          <Route path="/gustos" element={<Gustos />} />

          <Route path="/servicios" element={<Servicios />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;