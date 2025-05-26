import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import LoginFormEmpresa from "./components/Empresa/LoginEmpresa";
import RegistroEmpresaForm from "./components/Empresa/RegistroEmpresa";
import PasswordResetForm from "./components/recuperarcontraseña";
import MiArea from "./pages/MiArea";
import('./styles/Login.css')
import { Layout } from './layouts/layout'
import CrearOfertaPage from "./pages/empresa/crear-oferta";
import HomePage from "./pages/empresa/home";
import MisOfertasPage from "./pages/empresa/mis-ofertas";

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
          <Route path="Perfil" element={<MiArea />} />
          <Route path="publicar-vacantes" element={<CrearOfertaPage />} />
          <Route path="revisar-publicaciones" element={<MisOfertasPage />} />
          {/* Aquí puedes ir agregando más rutas que compartan el layout */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;