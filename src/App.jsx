import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import LoginFormEmpresa from "./components/Empresa/LoginEmpresa";
import RegistroEmpresaForm from "./components/Empresa/RegistroEmpresa";
import PasswordResetForm from "./components/recuperarcontraseña";
import("./styles/Login.css");
import { Layout } from "./layouts/layout";
import CrearOfertaPage from "./pages/empresa/crear-oferta";
import HomePage from "./pages/empresa/home";
import MisOfertasPage from "./pages/empresa/mis-ofertas";
import HomeEgresadoPage from "./pages/egresado/home_egresado";
import HojaDeVida from "./pages/egresado/cv";
import ListaVacantes from "./pages/egresado/visualizar-vacantes";
import DetalleVacante from "./pages/egresado/detalle-vacante";
import SessionGuard from "./middlewares/auth.midleware";
import MisPostulacionesPage from "./pages/egresado/mis-postulaciones";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="LoginEmpresa" element={<LoginFormEmpresa />} />
        <Route path="RegistroEmpresa" element={<RegistroEmpresaForm />} />
        <Route path="Recuperar" element={<PasswordResetForm />} />

        <Route path="/" element={<Layout />}>
          <Route path="/home-empresa" element={<HomePage />} />
          <Route path="publicar-vacantes" element={<CrearOfertaPage />} />
          <Route path="revisar-publicaciones" element={<MisOfertasPage />} />
          <Route path="/home-egresado" element={<HomeEgresadoPage />} />
          <Route path="hoja-de-vida" element={<HojaDeVida />} />
          <Route path="mis-postulaciones" element={<MisPostulacionesPage />} />
          <Route path="visualizar-vacantes" element={<ListaVacantes />} />
          <Route path="/vacantes/:id" element={<DetalleVacante />} />

          {/* Aquí puedes ir agregando más rutas que compartan el layout */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
